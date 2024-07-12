import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'
import { ListRegion } from '../../../constants/region'
import EditCustomer from '../../../features/customer/Edit'
import ListCustomer from '../../../features/customer/List'
import SelectRegion from '../../../features/region/List'

const Stack = createNativeStackNavigator()

const Stacks = () => {
  const { list } = useSelector((state) => state.customer)

  return (
    <Stack.Navigator initialRouteName={undefined}>
      <Stack.Screen
        name={'Select Region'}
        component={SelectRegion}
        options={{
          gestureEnabled: true
        }}
      />
      {ListRegion.length > 0 &&
        ListRegion.map((region) => (
          <Stack.Screen
            key={region}
            name={region}
            component={ListCustomer}
            initialParams={{ region }}
            options={{
              gestureEnabled: true
            }}
            gestureEnabled={true}
          />
        ))}
      <Stack.Screen
        name={'Edit Customer'}
        component={EditCustomer}
        options={{
          gestureEnabled: true
        }}
      />
    </Stack.Navigator>
  )
}

export default Stacks
