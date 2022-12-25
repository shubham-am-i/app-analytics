import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 1% 1.5%;
  margin-top: 1%;
  border: 0.5px solid lightgray;
  border-radius: 4px;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  span {
    padding: 6px 35px;
    border: 0.5px solid lightgray;
    margin-left: 1.3%;
    border-radius: 4px;
  }
  .active {
    background-color: rgb(210, 211, 212);
  }
  @media (min-width: 992px) {
  }
`
export default Wrapper
