import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import reducer from './reducer'

const initialState = {
  data: [],
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = ({ name, value }) => {
    dispatch({ type: 'HANDLE_CHANGE', payload: { name, value } })
  }

  const getData = async () => {
    const url =
      'https://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03'
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
