import * as React from 'react'
import { useSelector } from 'react-redux'

import { Item } from '../Main'
import { RemainingWrapper } from '../styles'

const TotalExpense = () => {
  const expenseList = useSelector((store: any) => store.EXPENSE.expenseList)

  let totalExpenses = expenseList.reduce(
    (accumulator: number, expense: Item) => accumulator + +expense.price,
    0
  )

  return (
    <RemainingWrapper>
      <h3>Total expenses</h3>
      <p>$ {totalExpenses}</p>
    </RemainingWrapper>
  )
}

export default TotalExpense
