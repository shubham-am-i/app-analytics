import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 1% 1.5%;
  margin-top: 1%;
  border: 1px solid lightgray;
  border-radius: 4px;
  transition: 1s linear;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  span {
    padding: 6px 35px;
    border: 1px solid lightgray;
    margin-left: 1.3%;
    border-radius: 4px;
  }
  .active {
    background-color: #eaeaea;
  }
  @media (min-width: 992px) {
  }
`
export default Wrapper
