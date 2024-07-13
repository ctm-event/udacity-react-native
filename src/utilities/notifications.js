import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications'
import React, { useEffect, useState } from 'react'
import {
  Keyboard,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

const onSubmit = (seconds) => {
  console.log(seconds)
  Keyboard.dismiss()
  const schedulingOptions = {
    content: {
      title: 'Keep in touch with your customer',
      body: 'Please take sometimes to contact with your existing Customer',
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: 'blue'
    },
    trigger: {
      seconds: seconds
    }
  }
  Notifications.scheduleNotificationAsync(schedulingOptions)
}

const handleNotification = () => {
  console.warn('Notification only show when app is inactive')
}

const askNotification = async () => {
  const { status } = await Notifications.requestPermissionsAsync()
  if (Constants.isDevice && status === 'granted')
    console.log('Notification permissions granted.')
}

const TimerNotification = () => {
  const [text, onChangeText] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    askNotification()

    const listener =
      Notifications.addNotificationReceivedListener(handleNotification)
    return () => listener.remove()
  }, [])

  const onSetNotification = () => {
    onSubmit(Number(text))
    setModalVisible(true)
  }

  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={{
          borderWidth: 1,
          borderColor: 'rgb(128, 128, 128)',
          borderRadius: 4,
          padding: 15
        }}
        placeholder="Seconds"
        keyboardType="numeric"
      />
      <Pressable
        onPress={onSetNotification}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          transition: 'all 200ms ease',
          backgroundColor: !!text ? '#ff0008' : '#ccc',
          marginTop: 16
        }}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 21,
            fontWeight: '500',
            letterSpacing: 0.25,
            color: 'white'
          }}
        >
          Schedule
        </Text>
      </Pressable>
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          presentationStyle="overFullScreen"
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
            setModalVisible(!modalVisible)
          }}
        >
          <View
            style={[
              styles.centeredView,
              {
                flexBasis: '100%',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
              }
            ]}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Notification has been scheduled</Text>
              <Pressable
                style={styles.primaryButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

export default TimerNotification

const styles = StyleSheet.create({
  primaryButton: {
    textAlign: 'center',
    display: 'block',
    border: '1px solid #ff0008',
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#ff0008',
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    with: '100%'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
})
