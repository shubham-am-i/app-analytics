// native import
import {useState, useEffect} from 'react'
// external import
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
      <DateRange />
      <button className='acc-button' onClick={() => setShowSettings(!showSettings)}>
        Settings
      </button>
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
          {data.map((item, i) => (
            <tr key={i}>
              {filtered.map((data, i) => (
                <td key={i}>{item[data]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  )
}
export default Table
