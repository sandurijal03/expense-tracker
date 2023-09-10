import * as React from 'react'
import { useSelector } from 'react-redux'
import { Item } from '../Main'
import { RemainingWrapper } from '../styles'

const RemainingAmount = () => {
  const income = useSelector((store: any) => store.EXPENSE.income)
  const expenseList = useSelector((store: any) => store.EXPENSE.expenseList)

  let totalExpenses = 0
  expenseList.forEach(
    (detail: Item) => (totalExpenses += +detail.price ? +detail.price : 0)
  )

  let remaining = +income - totalExpenses

  return (
    <RemainingWrapper>
      <h3>Remaining</h3>
      <p>$ {remaining}</p>
    </RemainingWrapper>
  )
}

export default RemainingAmount
