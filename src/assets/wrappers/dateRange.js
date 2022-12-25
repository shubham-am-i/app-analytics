import styled from 'styled-components'

const Wrapper = styled.section`
  .calendarWrap {
    display: inline-block;
    position: relative;
  }
  input.inputBox {
    height: 33px;
    border: 1px solid #70707038;
    border-radius: 4px;
    text-align: center;
    font-size: 16px;
  }
  .calendarElement {
    position: absolute;
    left: 50%;
    transform: translateX(-15%);
    top: 40px;
    border: 1px solid #ccc;
    z-index: 999;
  }
  /* On screens that are 600px or less */
  @media screen and (max-width: 480px) {
    input.inputBox {
      height: 25px;
    }
    .calendarElement {
      transform: translate(-20%);
    }
  }
`
export default Wrapper
