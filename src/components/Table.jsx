// native import
import {useState, useEffect, memo} from 'react'
// external import
import {GoSettings} from 'react-icons/go'
// local import
import {useAppContext} from '../context/appContext'
import Wrapper from '../assets/wrappers/table'
import Accordian from './Accordian'
import DateRange from './DateRange'

const Table = () => {
  const [showSettings, setShowSettings] = useState(false)
  const [filtered, setFiltered] = useState([])
  const {getData, data, columnSequence, visibleColumns} = useAppContext()

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])
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
          {data.slice(0, 10).map((item, i) => (
            <tr key={i} className='border-top'>
              {filtered.map((data, i) => (
                <td key={i}>
                  {data === 'app' ? (
                    <div>
                      <img src='icon.png' alt='logo' />
                      {item[data]}
                    </div>
                  ) : (
                    item[data]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  )
}
export default memo(Table)
