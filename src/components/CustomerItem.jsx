import {
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native"

import Ionicons from "react-native-vector-icons/Ionicons"

export const CustomerItem = ({ customer, onPress }) => {
  const { id, name, age, region } = customer

  return (
    <TouchableOpacity style={styles.customerItem} onPress={onPress}>
      <Text style={styles.line}>ID: {id}</Text>
      <Text style={styles.line}>Name: {name}</Text>
      <Text style={styles.line}>Age: {age}</Text>
      <Text style={styles.line}>Region: {region}</Text>
      <Ionicons
        style={styles.edit}
        name="create-outline"
        size={24}
        color="darkgoldenrod"
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  customerItem: {
    rowGap: 8,
    borderRadius: 4,
    padding: 16,
    margin: 8,
    backgroundColor: "lightyellow",
    border: "1px solid darkgoldenrod"
  },
  line: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 6
  },
  edit: {
    position: "absolute",
    top: 8,
    right: 8
  }
})
