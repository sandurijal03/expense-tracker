import * as React from 'react'

import SingleExpense from '../components/SingleExpense'
import { Item } from '../Main'
import { useSelector } from 'react-redux'

interface ExpenseListProps {}

const ExpenseList: React.FC<ExpenseListProps> = () => {
  const expenseList = useSelector((store: any) => store.EXPENSE.expenseList)
  return (
    <div style={{ marginTop: '50px' }}>
      {expenseList &&
        expenseList.map((item: Item, index: number) => {
          return <SingleExpense {...item} key={index} />
        })}
    </div>
  )
}

export default ExpenseList
