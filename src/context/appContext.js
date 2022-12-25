import React, {useReducer, useContext, useCallback} from 'react'
import axios from 'axios'
import format from 'date-fns/format'
// local imports
import reducer from './reducer'
import {allColumns, formatData, visibleColumns} from '../utils/config'

// get values from local storage
const sequence = localStorage.getItem('sequence')

const initialState = {
  allColumns,
  columnSequence: sequence ? JSON.parse(sequence) : allColumns,
  visibleColumns: visibleColumns,
  data: [],
  totalRecords: 0,
  page: 1,
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // handle column visibility
  const handleChange = ({name, value}) => {
    dispatch({type: 'HANDLE_CHANGE', payload: {name, value}})
  }

  // alters column sequence
  const changeSequence = (newSequence) => {
    dispatch({
      type: 'HANDLE_SEQUENCE',
      payload: {newSequence},
    })
    localStorage.setItem('sequence', JSON.stringify(newSequence))
  }

  // fetch data from API
  const getData = async (start, end) => {
    let startDate = start ? start : format(new Date('June 01, 2021'), 'yyyy-MM-dd')
    let endDate = end ? end : format(new Date('June 30, 2021'), 'yyyy-MM-dd')
    console.log(startDate, endDate)
    const url = `https://go-dev.greedygame.com/v3/dummy/report?startDate=${startDate}&endDate=${endDate}`
    const appUrl = 'https://go-dev.greedygame.com/v3/dummy/apps'
    try {
      const {
        data: {data},
      } = await axios.get(url)
      const {
        data: {data: appData},
      } = await axios.get(appUrl)

      // mapping app_id & app_name
      data.forEach((record) => {
        appData.forEach((appRecord) => {
          if (record.app_id === appRecord.app_id) {
            record.app = appRecord.app_name
          }
        })
        return formatData(record)
      })
      dispatch({
        type: 'GET_DATA_SUCCESS',
        payload: {
          data,
          totalRecords: data.length,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  // sets page number
  const paginate = (pageNumber) => {
    dispatch({type: 'CHANGE_PAGE', payload: {pageNumber}})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        getData,
        handleChange,
        changeSequence,
        paginate,
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}
export {AppProvider, initialState, useAppContext}
