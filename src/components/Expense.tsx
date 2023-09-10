import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Item } from '../Main'
import { Button, Input } from '../styles'
import { addExpenseAction } from '../store/expense/expense-slice'
import { v4 } from 'uuid'

const Expense = () => {
  const dispatch = useDispatch()
  const [detail, setDetail] = React.useState<Item>({
    name: '',
    price: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDetail({ ...detail, [name]: value })
  }

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    dispatch(
      addExpenseAction({ price: detail.price, name: detail.name, id: v4() })
    )
    setDetail({ price: '', name: '' })
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 20px',
      }}
    >
      <div>
        <Input
          type={'text'}
          placeholder={'Expense name'}
          name='name'
          onChange={onChange}
          required
          value={detail.name}
        />
        <Input
          type={'text'}
          value={detail.price}
          placeholder={'Expense charge'}
          name='price'
          onChange={onChange}
          required
        />
      </div>
      <Button onClick={onClick}>Add</Button>
    </div>
  )
}

export default Expense
