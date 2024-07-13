import { delay, put, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'
import { get } from '../../../utilities/async_storage'
import { CUSTOMER_KEY } from '../../../constants/async_storage_key'

export function* watchLoadCustomer() {
  yield takeLatest(actions.loadCustomers.toString(), takeLoadCustomers)
}

export function* takeLoadCustomers() {
  console.log('Starting loading customers from async storage')
  try {
    const customers = yield get(CUSTOMER_KEY)

    console.log(customers)
    yield delay(500)
    yield put(actions.loadCustomersResult(customers || []))
  } catch (error) {
    yield put(actions.loadCustomersResult([]))
  }
}
