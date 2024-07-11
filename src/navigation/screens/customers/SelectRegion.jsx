import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import GlobalStyles from '../../../styles'
import { useNavigation } from '@react-navigation/native'

const SelectRegion = () => {
  const { list } = useSelector((state) => state.customer)
  const { navigate } = useNavigation()

  const component =
    list.length > 0 ? (
      list.map((item) => (
        <Text
          key={item.id}
          onClick={() => {
            navigate(`${item.id} - ${item.name}`)
          }}
        >
          {item.id} {item.name}
        </Text>
      ))
    ) : (
      <View style={GlobalStyles.screenWrapper}>
        <Text>There is no regions</Text>
      </View>
    )

  return component
}

export default SelectRegion
