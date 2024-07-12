import { all } from 'redux-saga/effects'
import { watchCreateCustomer } from './create'
import { watchLoadCustomer } from './load'

export default function* customer() {
  yield all([watchCreateCustomer(), watchLoadCustomer()])
}
