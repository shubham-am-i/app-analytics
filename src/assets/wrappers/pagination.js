import styled from 'styled-components'

const Wrapper = styled.section`
  margin-top: 5%;
  display: flex;
  justify-content: center;
  span {
    border: 1px solid lightgrey;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1%;
  }
  span:hover {
    cursor: pointer;
    background-color: lightgrey;
  }
  @media (min-width: 992px) {
  }
`
export default Wrapper
