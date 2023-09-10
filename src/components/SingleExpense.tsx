import * as React from 'react'
import { useDispatch } from 'react-redux'

import { deleteExpenseAction } from '../store/expense/expense-slice'
import { DeleteButton, SingleExpenseWrapper } from '../styles'

interface SingleItemProps {
  id?: string
  name: string
  price: string
}

const SingleExpense: React.FC<SingleItemProps> = ({ id, name, price }) => {
  const dispatch = useDispatch()
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(deleteExpenseAction(id))
  }
  return (
    <SingleExpenseWrapper key={id}>
      <h4>{name}</h4>
      <h4>${price}</h4>
      <DeleteButton onClick={handleDelete}>delete</DeleteButton>
    </SingleExpenseWrapper>
  )
}

export default SingleExpense
