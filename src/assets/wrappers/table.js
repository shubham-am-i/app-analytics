import styled from 'styled-components'

const Wrapper = styled.section`
  .components-container {
    display: flex;
    justify-content: space-between;
  }
  .acc-button {
    width: 129px;
    height: 33px;
    border: 1px solid #70707038;
    border-radius: 4px;
    font: normal normal bold 16px Lato;
    letter-spacing: 0.27px;
    color: #1d1a1a;
  }
  table {
    margin-top: 30px;
    width: 100%;
    border-collapse: collapse;
  }
  tr.border-top td {
    border-top: 0.4px solid lightgrey;
    padding: 0.4% 0;
  }
  tr th {
    color: #707070;
    text-align: start;
    height: 50px;
  }
  tr td {
    font-size: 15px;
  }
  img {
    width: 18px;
    margin-right: 8px;
  }
  /* On screens that are 600px or less */
  @media screen and (max-width: 480px) {
    .acc-button {
      height: 28px;
    }
    table {
      width: 100% !important;
    }
  }
`
export default Wrapper
