import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Input } from '../styles'
import { setIncomeAction } from '../store/expense/expense-slice'

const Income = () => {
  const income = useSelector((store:any) => store.EXPENSE.income)
  const dispatch = useDispatch()
 
  return (
    <>
      <label>Income</label>
      <Input
        type={'text'}
        name={'income'}
        value={income}
        onChange={(e) => dispatch(setIncomeAction(+e.target.value))}
      />
    </>
  )
}

export default Income
