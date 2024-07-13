import { delay, put, select, takeLatest } from 'redux-saga/effects'
import { set } from '../../../utilities/async_storage'
import * as actions from '../reducers'
import { CUSTOMER_KEY } from '../../../constants/async_storage_key'

export function* watchCreateCustomer() {
  yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer)
}

export function* takeCreateCustomer({ payload }) {
  console.log('Starting calling create API', payload)
  try {
    const customers = yield select((state) => state.customer.list)

    const newCustomer = {
      id: Date.now().toString(),
      ...payload
    }

    // pretend call to API
    yield delay(500)
    
    console.log('Finish calling API')
    
    const result = [newCustomer, ...customers]

    yield set(CUSTOMER_KEY, result)

    yield put(actions.createCustomerResult(result))
  } catch (error) {
    yield put(actions.createCustomerError(error.toString()))
  }
}
