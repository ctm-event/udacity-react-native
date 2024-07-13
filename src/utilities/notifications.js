import React, { useEffect, useState } from "react"
import {
  Keyboard,
  TextInput,
  View,
  Button,
  Pressable,
  Text
} from "react-native"
import Constants from "expo-constants"
import * as Notifications from "expo-notifications"

const onSubmit = (seconds) => {
  Keyboard.dismiss()
  const schedulingOptions = {
    content: {
      title: "This is a notification",
      body: "This is the body",
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: "blue"
    },
    trigger: {
      seconds: seconds
    }
  }
  // Notifications show only when app is not active.
  // (ie. another app being used or device"s screen is locked)
  Notifications.scheduleNotificationAsync(schedulingOptions)
}

const handleNotification = () => {
  console.warn("ok! got your notif")
}

const askNotification = async () => {
  // We need to ask for Notification permissions for ios devices
  const { status } = await await Notifications.requestPermissionsAsync()
  if (Constants.isDevice && status === "granted")
    console.log("Notification permissions granted.")
}

const TimerNotification = () => {
  const [text, onChangeText] = useState("")

  useEffect(() => {
    askNotification()

    const listener =
      Notifications.addNotificationReceivedListener(handleNotification)
    return () => listener.remove()
  }, [])

  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={{
          borderWidth: 1,
          borderColor: "rgb(128, 128, 128)",
          borderRadius: 4,
          padding: 15
        }}
        placeholder="Seconds"
        keyboardType="numeric"
      />
      <Pressable
        onPress={() => onSubmit(Number(text))}
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          transition: "all 200ms ease",
          backgroundColor: "#ff0008",
          marginTop: 16
        }}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 21,
            fontWeight: "500",
            letterSpacing: 0.25,
            color: "white"
          }}
        >
          Schedule
        </Text>
      </Pressable>
    </View>
  )
}

export default TimerNotification
