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
  /* On screens that are 600px or less */
  @media screen and (max-width: 480px) {
    padding: 1%;
    margin-top: 2%;
    height: 150px;
    div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 0.5em;
      column-gap: 0.5em;
    }
    div span {
      padding: 3px 18px;
    }
  }
`
export default Wrapper
