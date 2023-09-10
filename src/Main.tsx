import * as React from 'react'

import {
  Wrapper,
  GlobalStyle,
  TopBar,
  CenterContent,
  Left,
  Right,
  Title,
  Subtitle,
} from './styles'
import Expense from './components/Expense'
import Income from './components/Income'
import ExpenseList from './components/ExpenseList'
import RemainingAmount from './components/RemainingAmount'
import TotalExpense from './components/TotalExpense'

export interface Item {
  id?: string
  name: string
  price: string
}

const Main: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <TopBar>
        <Left>
          <Title>ISpent</Title>
          <Subtitle>Track your expenses</Subtitle>
        </Left>
        <Right>
          <Income />
        </Right>
      </TopBar>
      <CenterContent>
        <div>
          <Expense />
          <ExpenseList />
        </div>
        <div>
          <TotalExpense />
          <RemainingAmount />
        </div>
      </CenterContent>
    </Wrapper>
  )
}

export default Main
