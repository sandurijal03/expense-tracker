import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
`

const Wrapper = styled.div`
  background: #10121a;
  height: 100vh;
  color: #fff;
`

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191d2b;
  padding: 0px 20px;
`

const Left = styled.div``

const Title = styled.h3`
  font-size: 3rem;
`

const Subtitle = styled.h5`
  font-size: 1.5rem;
`

const Right = styled.div`
  label {
    margin-right: 20px;
  }
`

const CenterContent = styled.div`
  width: 900px;
  margin: 0 auto;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
`

const SingleExpenseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  align-items: center;
  height: 40px;
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid;
  background-color: none;
  padding: 10px;
  margin-right: 10px;
  border-radius: 10px;
  outline: none;
`

const RemainingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  padding: 10px 0px;
`

const Button = styled.button`
  padding: 5px;
  width: 120px;
  background-color: transparent;
  color: white;
  border-radius: 20px;
  cursor: pointer;
`

const DeleteButton = styled(Button)`
  background-color: red;
`

export {
  Wrapper,
  RemainingWrapper,
  Input,
  CenterContent,
  GlobalStyle,
  TopBar,
  Left,
  Right,
  Title,
  Subtitle,
  Button,
  DeleteButton,
  SingleExpenseWrapper,
}
