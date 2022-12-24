// native import
import { useState, useEffect } from 'react'
// external import

// local import
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/table'
import { tableHeading } from '../utils/config'
import Accordian from './Accordian'

const Table = () => {
  const [showSettings, setShowSettings] = useState(false)
  const { getData, data, columnSequence, visibleColumns } = useAppContext()

  //   filtered visibleColumns
  let keys = Object.keys(visibleColumns)
  let filtered = keys.filter((key) => visibleColumns[key])
  console.log(filtered)

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])
  return (
    <Wrapper>
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
        <tbody></tbody>
      </table>
    </Wrapper>
  )
}
export default Table
