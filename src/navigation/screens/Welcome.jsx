import { useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { loadCustomers } from '../../features/customer/reducers'
import GlobalStyles from '../../styles'

const Welcome = ({ onStart }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCustomers())
  }, [])

  const onPress = () => {
    onStart()
  }

  return (
    <View style={{ ...GlobalStyles.screenWrapper, ...styles.welcomePage }}>
      <View style={styles.contentWrapper}>
        <Text style={styles.welcomeText}>Welcome to customer management app!</Text>
        <Pressable onPress={onPress}>
          <Text style={styles.button}>Get Started!</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  welcomePage: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexGrow: '1',
    rowGap: '1rem'
  },
  contentWrapper: {
    flex: '1 1 100%',
    alignItems: 'center',
    rowGap: '2rem'
  },
  welcomeText: {
    fontSize: '20px'
  },
  button: {
    textAlign: 'center',
    display: 'block',
    border: '1px solid #ff0008',
    padding: '1rem',
    borderRadius: '0.25rem',
    backgroundColor: '#ff0008',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 500,
    with: '50%'
  }
})
