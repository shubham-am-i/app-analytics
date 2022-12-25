import React, {useReducer, useContext} from 'react'
import axios from 'axios'
import moment from 'moment/moment'
import millify from 'millify'
import format from 'date-fns/format'
// local imports
import reducer from './reducer'
import {allColumns, visibleColumns} from '../utils/config'

// get values from local storage
const sequence = localStorage.getItem('sequence')

const initialState = {
  allColumns,
  columnSequence: sequence ? JSON.parse(sequence) : allColumns,
  visibleColumns: visibleColumns,
  data: [],
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
        record.date = moment(record.date).format('D MMM YY')
        record.fill_rate = (+((record.requests / record.responses) * 100).toFixed(2)).toString().concat('%')
        record.CTR = (+((record.clicks / record.impressions) * 100).toFixed(2)).toString().concat('%')
        record.requests = millify(record.requests, {
          lowercase: true,
        })
        record.responses = millify(record.responses, {
          lowercase: true,
        })
        record.clicks = millify(record.clicks, {
          precision: 2,
          decimalSeparator: ',',
          lowercase: true,
        })
        record.impressions = millify(record.impressions, {
          precision: 2,
          decimalSeparator: ',',
          lowercase: true,
        })
        record.revenue = millify(record.revenue)
      })
      dispatch({
        type: 'GET_DATA_SUCCESS',
        payload: {
          data,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        getData,
        handleChange,
        changeSequence,
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}
export {AppProvider, initialState, useAppContext}
