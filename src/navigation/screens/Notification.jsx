import { useNavigation } from "@react-navigation/native"
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from "react-native"
import TimerNotification from "../../utilities/notifications"
import GlobalStyles from "../../styles"

const Notification = () => {
  const navigate = useNavigation()
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

const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    alignItems: "center"
  }
})
