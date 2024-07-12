import { useNavigation, useRoute } from '@react-navigation/native'
import { useMemo } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import CustomerForm from '../../../components/CustomerForm'
import { updateCustomer } from '../reducers'

const EditCustomer = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const { list: allCustomers } = useSelector((state) => state.customer)

  const {
    params: { id }
  } = useRoute()

  const customer = useMemo(() => {
    return allCustomers.find((item) => item.id === id)
  }, [id, allCustomers])

  const onSubmit = (formData) => {
    dispatch(updateCustomer(formData))
    navigate('Select Region')
  }

  return (
    <View style={{ margin: '1rem' }}>
      <CustomerForm onSubmit={onSubmit} customer={customer} />
    </View>
  )
}

export default EditCustomer
