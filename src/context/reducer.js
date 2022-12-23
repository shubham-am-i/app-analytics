import { initialState } from './appContext'

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'HANDLE_CHANGE': {
      const { name, value } = payload
      return {
        ...state,
        [name]: value,
      }
    }

    case 'CLEAR_VALUES': {
      const initialState = {}
      return {
        ...state,
        ...initialState,
      }
    }

    case 'GET_DATA_SUCCESS': {
      const { data } = payload
      return {
        ...state,
        data,
      }
    }

    default:
      throw new Error(`no such action : ${type}`)
  }
}

export default reducer
