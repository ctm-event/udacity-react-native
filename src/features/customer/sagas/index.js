import { all } from 'redux-saga/effects'
import { watchCreateCustomer } from './create'
import { watchLoadCustomer } from './load'
import { watchUpdateCustomer } from './update'

export default function* customer() {
  yield all([
    watchCreateCustomer(), 
    watchLoadCustomer(),
    watchUpdateCustomer()
  ])
}
