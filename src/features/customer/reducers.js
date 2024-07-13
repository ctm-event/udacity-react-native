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
      //
    },
    updateCustomerResult: (state, { payload }) => {
      state.list = payload
    },
    updateCustomerError: (state, { payload }) => {
      console.log(payload)
    }
  }
})

export const {
  createCustomer,
  createCustomerResult,
  createCustomerError,
  loadCustomers,
  loadCustomersResult,
  updateCustomer,
  updateCustomerResult,
  updateCustomerError
} = slice.actions

export default slice.reducer
