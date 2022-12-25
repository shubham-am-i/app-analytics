import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 0 1.5%;
  margin-top: 0.6%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  div span {
    padding: 5px 25px;
    border: 0.5px solid lightgray;
    border-radius: 4px;
  }
  .active {
    background: radial-gradient(circle at 0% 0.5%, rgb(241, 241, 242) 0.1%, rgb(224, 226, 228) 100.2%);
  }
  @media (min-width: 992px) {
  }
`
export default Wrapper
