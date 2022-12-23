// native import
import { useEffect } from 'react'
// external import

// local import
import { useAppContext } from '../context/appContext'
import { tableHeading } from '../utils/config'

const Table = () => {
  const { getData, data } = useAppContext()
  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            {tableHeading.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.app_id}</td>
              <td>{item.requests}</td>
              <td>{item.responses}</td>
              <td>{item.impressions}</td>
              <td>{item.clicks}</td>
              <td>{item.revenue}</td>
              {/* <td>{item.date}</td>
              <td>{item.date}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Table
