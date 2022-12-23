import React, { useReducer, useContext } from 'react'
import axios from 'axios'
// local imports
import reducer from './reducer'
import { allColumns, visibleColumns } from '../utils/config'

// get values from local storage
const sequence = localStorage.getItem('sequence')

const initialState = {
  allColumns,
  columnSequence: sequence ? JSON.parse(sequence) : allColumns,
  visibleColumns: visibleColumns,
  data: [],
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // handle column visibility
  const handleChange = ({ name, value }) => {
    dispatch({ type: 'HANDLE_CHANGE', payload: { name, value } })
  }

  // alters column sequence
  const changeSequence = (newSequence) => {
    dispatch({
      type: 'HANDLE_SEQUENCE',
      payload: { newSequence },
    })
    localStorage.setItem('sequence', JSON.stringify(newSequence))
  }

  const getData = async () => {
    const url = 'https://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03'
    try {
      const {
        data: { data },
      } = await axios.get(url)
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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}
export { AppProvider, initialState, useAppContext }
