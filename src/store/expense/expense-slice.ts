import { createSlice } from '@reduxjs/toolkit'
import { Item } from '../../Main'

interface InitialStateTypes {
  expenseList: Item[]
  income: number
}

const initialState: InitialStateTypes = {
  expenseList: [],
  income: 0,
}

export const expenseSlice = createSlice({
  name: 'expenseSlice',
  initialState: initialState,
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      currentSlice.expenseList.push(action.payload)
    },
    deleteExpenseAction: (currentSlice, action) => {
      const filteredList = currentSlice.expenseList.filter(
        (expense: any) => expense.id !== action.payload
      )
      currentSlice.expenseList = filteredList
    },
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload
    },
  },
})

export const { addExpenseAction, deleteExpenseAction, setIncomeAction } =
  expenseSlice.actions
