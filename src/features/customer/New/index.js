import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { useDispatch } from 'react-redux'
import CustomerForm from '../../../components/CustomerForm'
import { addCustomer, createCustomer } from '../reducers'
import formStyles from './styles'

const NewCustomner = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const styles = StyleSheet.create(formStyles())

  const onSubmit = (formData) => {
    dispatch(createCustomer(formData))
    navigate('Select Region')
  }

  return (
    <View style={styles.container}>
      <CustomerForm onSubmit={onSubmit} />
    </View>
  )
}

export default NewCustomner
