import { useNavigation } from '@react-navigation/native'
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet
} from 'react-native'

const Notification = () => {
  const navigate = useNavigation()
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.title}>
          <Text>Notification</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Notification

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
