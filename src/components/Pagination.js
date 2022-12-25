import Wrapper from '../assets/wrappers/pagination'
import {useAppContext} from '../context/appContext'

const Pagination = () => {
  const {totalRecords, paginate} = useAppContext()

  //   generate page number
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalRecords / 10); i++) {
    pageNumbers.push(i)
  }
  return (
    <Wrapper>
      {pageNumbers.map((number) => (
        <span key={number} onClick={() => paginate(number)}>
          {number}
        </span>
      ))}
    </Wrapper>
  )
}
export default Pagination
