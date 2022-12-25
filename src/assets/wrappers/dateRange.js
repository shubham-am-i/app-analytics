import styled from 'styled-components'

const Wrapper = styled.section`
  input.inputBox {
    padding: 5px 8px 4px 8px;
    border-radius: 3px;
    border: 0.5px solid lightgray;
  }

  .calendarWrap {
    display: inline-block;
    position: relative;
  }

  .calendarElement {
    position: absolute;
    left: 50%;
    transform: translateX(-15%);
    top: 40px;
    border: 1px solid #ccc;
    z-index: 999;
  }
  @media (min-width: 992px) {
  }
`
export default Wrapper
