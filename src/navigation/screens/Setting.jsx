import { useNavigation } from "@react-navigation/native"
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native"
import GlobalStyles from "../../styles"
import { clear } from "../../utilities/async_storage"
import { useState } from "react"

const Setting = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const clearStorage = async () => {
    await clear()
    setModalVisible(true)
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <Pressable onPress={clearStorage}>
          <Text style={styles.primaryButton}>Clear Storage</Text>
        </Pressable>
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            presentationStyle="overFullScreen"
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.")
              setModalVisible(!modalVisible)
            }}
          >
            <View
              style={[
                styles.centeredView,
                {
                  flexBasis: "100%",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.8)"
                }
              ]}
            >
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Storage has been cleared</Text>
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
      </ScrollView>
    </SafeAreaView>
  )
}

export default Setting

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    ...GlobalStyles.screenWrapper
  },
  primaryButton: {
    textAlign: "center",
    display: "block",
    border: "1px solid #ff0008",
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#ff0008",
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    with: "100%"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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
    backgroundColor: "#F194FF"
  },
  buttonClose: {
    backgroundColor: "#2196F3"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})
