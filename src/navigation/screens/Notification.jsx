import {
  SafeAreaView,
  ScrollView,
  View
} from 'react-native'
import GlobalStyles from '../../styles'
import TimerNotification from '../../utilities/notifications'

const Notification = () => {
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={GlobalStyles.screenWrapper}>
          <TimerNotification />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Notification