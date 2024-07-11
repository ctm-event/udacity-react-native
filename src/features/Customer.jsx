import { useNavigation } from '@react-navigation/native'
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native'

const Customer = () => {
  const navigate = useNavigation()
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.title}>
          <Text>Customer</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigate('Details')
            }}
          >
            <Text>View Details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Customer

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
