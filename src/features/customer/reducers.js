import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: []
}

const slice = createSlice({
  name: 'customer',
  initialState: initialState,
  reducers: {
    addCustomer: (state, { payload }) => {
      state.list = [
        ...state.list,
        {
          ...payload,
          id: Date.now().toString()
        }
      ]
    },
    updateCustomer: (state, { payload }) => {
      state.list = state.list.map((customer) => {
        if (customer.id === payload.id) return payload
        return customer
      })
    }
  }
})

export const { addCustomer, updateCustomer } = slice.actions

export default slice.reducer
