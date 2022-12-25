// native import
import {useState, useEffect, memo} from 'react'
// external import
import {GoSettings} from 'react-icons/go'
// local import
import {useAppContext} from '../context/appContext'
import Wrapper from '../assets/wrappers/table'
import Accordian from './Accordian'
import DateRange from './DateRange'
import Pagination from './Pagination'

const Table = () => {
  const [showSettings, setShowSettings] = useState(false)
  const [filtered, setFiltered] = useState([])
  const {data, columnSequence, visibleColumns, page} = useAppContext()

  // pagination constant
  const start = (page - 1) * 10
  const end = page * 10

  useEffect(() => {
    let arr = []
    for (let column of columnSequence) {
      if (visibleColumns[column]) {
        arr.push(column)
      }
    }
    setFiltered(arr)
  }, [columnSequence, visibleColumns])

  return (
    <Wrapper>
      <div className='components-container'>
        {' '}
        <DateRange />
        <button className='acc-button' onClick={() => setShowSettings(!showSettings)}>
          <GoSettings style={{marginRight: '10px'}} />
          Settings
        </button>
      </div>
      {showSettings && <Accordian />}
      <table className='table'>
        <thead>
          <tr>
            {columnSequence
              .filter((column) => visibleColumns[column] === true)
              .map((column, index) => (
                <th key={index}>{column}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(start, end).map((item, i) => (
            <tr key={i} className='border-top'>
              {filtered.map((data, i) => (
                <td key={i}>
                  {data === 'app' ? (
                    <>
                      <img src='icon.png' alt='logo' />
                      {item[data]}
                    </>
                  ) : (
                    item[data]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </Wrapper>
  )
}
export default memo(Table)
