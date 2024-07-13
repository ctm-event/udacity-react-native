import { useEffect } from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
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
    <SafeAreaView>
      <View style={{ ...GlobalStyles.screenWrapper, ...styles.welcomePage }}>
        <View style={styles.contentWrapper}>
          <Text style={styles.welcomeText}>
            Welcome to customer management app!
          </Text>
          <Pressable onPress={onPress}>
            <Text style={styles.button}>Get Started!</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  welcomePage: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexGrow: 1,
    rowGap: 16
  },
  contentWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 32
  },
  welcomeText: {
    fontSize: 20
  },
  button: {
    textAlign: 'center',
    display: 'block',
    border: '1px solid #ff0008',
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#ff0008',
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    with: '50%'
  }
})
