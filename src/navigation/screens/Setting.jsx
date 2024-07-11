import { useNavigation } from '@react-navigation/native'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

const Setting = () => {
  const navigate = useNavigation()
  return (
    <SafeAreaView classNam=''>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={{
            textAlign: 'left'
          }}>Setting</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Setting

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
})
