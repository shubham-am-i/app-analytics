import styled from 'styled-components'

const Wrapper = styled.section`
  input.inputBox {
    height: 33px;
    border: 1px solid #70707038;
    border-radius: 4px;
    text-align: center;
    font-size: 16px;
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
