import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: []
}

const slice = createSlice({
  name: 'customer',
  initialState: initialState,
  reducers: {
    createCustomer: () => {
      // Delegate to saga for handling this duty
    },
    createCustomerResult: (state, { payload }) => {
      state.list = payload
    },
    createCustomerError: (state, { payload }) => {
      console.log(payload)
    },
    loadCustomers: () => {
      // Delegate to saga for handling this duty
    },
    loadCustomersResult: (state, { payload }) => {
      state.list = payload
    },
    updateCustomer: (state, { payload }) => {
      state.list = state.list.map((customer) => {
        if (customer.id === payload.id) return payload
        return customer
      })
    }
  }
})

export const {
  createCustomer,
  createCustomerResult,
  createCustomerError,
  loadCustomers,
  loadCustomersResult,
  updateCustomer
} = slice.actions

export default slice.reducer
