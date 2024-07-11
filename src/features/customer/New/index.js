import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useUpdateFields } from '../../../store/hooks'
import { addCustomer } from '../reducers'
import formStyles from './styles'

const CustomerForm = ({ disabled = false }) => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const styles = StyleSheet.create(formStyles())
  const { fields, setFormField } = useUpdateFields()
  const { common_name, scientific_name } = fields

  const onSubmit = () => {
    dispatch(
      addCustomer({
        name: 'steven',
        age: '35',
        id: Date.now()
      })
    )
    navigate('Customers')
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          // key={'common_name'}
          placeholder="Common Name"
          value={common_name}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            padding: 15
          }}
          onChangeText={(v) => {
            // setFormField('common_name', v)
            console.log(v)
          }}
          onBlur={(e) => {
            setFormField('common_name', e.target.value)
          }}
        />

        <TextInput
          key={'scientific_name'}
          placeholder="Scientific Name"
          value={scientific_name || ''}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            padding: 15
          }}
          onChangeText={(v) => setFormField('scientific_name', v)}
        />

        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.text}>{'Submit'}</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CustomerForm
