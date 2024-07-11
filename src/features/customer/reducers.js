import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: []
}

const slice = createSlice({
  name: 'customer',
  initialState: initialState,
  reducers: {
    addCustomer: (state, { payload }) => {
      state.list = [...state.list, payload]
    }
  }
})

export const { addCustomer } = slice.actions

export default slice.reducer
