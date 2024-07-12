import { useEffect, useMemo, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { ListRegion } from '../constants/region'

const CustomerForm = ({ onSubmit, customer = undefined }) => {
  const [name, setName] = useState(customer ? customer.name : '')
  const [age, setAge] = useState(customer ? customer.age : '')
  const [region, setRegion] = useState(customer ? customer.region : '')

  const disable = useMemo(() => {
    return !name || !age || !region
  }, [name, age, region])

  const doSubmitForm = () => {
    const id = customer ? customer.id : undefined
    onSubmit({ id, name, age, region })
    setName('')
    setAge('')
    setRegion('')
  }

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="enter full name"
        style={{
          borderWidth: 1,
          borderColor: 'rgb(128, 128, 128)',
          borderRadius: 4,
          padding: 15
        }}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="enter age"
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: 'rgb(128, 128, 128)',
          borderRadius: 4,
          padding: 15
        }}
        value={age}
        onChangeText={setAge}
      />

      <View style={{ position: 'relative' }}>
        <SelectList
          data={ListRegion.map((region) => ({
            key: region,
            value: region
          }))}
          setSelected={setRegion}
          boxStyles={{
            borderRadius: '4px'
          }}
          defaultOption={{ value: region, key: region }}
          placeholder="select region"
        />
      </View>

      <Pressable
        style={{
          ...styles.button,
          backgroundColor: disable ? '#ccc' : '#ff0008'
        }}
        onPress={() => {
          doSubmitForm()
        }}
        disabled={disable}
      >
        <Text style={styles.text}>{'Submit'}</Text>
      </Pressable>
    </View>
  )
}

export default CustomerForm

const styles = StyleSheet.create({
  container: {
    margin: '1rem'
  },
  submitButton: {
    borderRadius: '10px'
  },
  form: {
    rowGap: '1rem'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    transition: 'all 200ms ease'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '500',
    letterSpacing: 0.25,
    color: 'white'
  }
})
