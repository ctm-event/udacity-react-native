import { delay, put, select, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'
import { set } from '../../../utilities/async_storage'
import { CUSTOMER_KEY } from '../../../constants/async_storage_key'

export function* watchUpdateCustomer() {
  yield takeLatest(actions.updateCustomer.toString(), takeUpdateCustomer)
}

export function* takeUpdateCustomer({ payload }) {
  console.log('Starting calling update API', payload)
  try {
    const customers = yield select((state) => state.customer.list)

    // pretend call to API
    yield delay(500)

    console.log('Finish calling API')

    const result = customers.map((customer) => {
      if (customer.id === payload.id) return payload
      return customer
    })

    yield set(CUSTOMER_KEY, result)

    yield put(actions.updateCustomerResult(result))
  } catch (error) {
    yield put(actions.updateCustomerError(error.toString()))
  }
}
