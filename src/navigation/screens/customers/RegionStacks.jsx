import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ListCustomer from '../../../features/customer/List'
import GlobalStyles from '../../../styles'
import SelectRegion from './SelectRegion'
const Stack = createNativeStackNavigator()

const RegionStacks = () => {
  const { list } = useSelector((state) => state.customer)

  return (
    <Stack.Navigator initialRouteName={undefined}>
      <Stack.Screen
        name={'Select Region'}
        component={SelectRegion}
      />
      {list.length !== 0 &&
        list.map((item) => (
          <Stack.Screen
            key={item.id}
            name={`${item.id} - ${item.name}`}
            component={ListCustomer}
          />
        ))}
    </Stack.Navigator>
  )
}

export default RegionStacks
