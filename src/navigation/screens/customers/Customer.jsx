import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import SelectRegion from './SelectRegion'
import RegionStacks from './RegionStacks'
import NewCustomer from '../../../features/customer/New'

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <Tab.Navigator
      lazy={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName

          if (route.name === 'Customers') {
            iconName = 'people'
          } else if (route.name === 'Add') {
            iconName = focused ? 'person-add' : 'person-add-outline'
          }

          return <Ionicons name={iconName} color={color} />
        },
        tabBarActiveTintColor: '#ff0008',
        tabBarInactiveTintColor: '#ccc',
        headerShown: false
      })}
    >
      <Tab.Screen name="Customers" component={RegionStacks} />
      <Tab.Screen name="Add" component={NewCustomer} />
    </Tab.Navigator>
    // <NavigationContainer>
    // </NavigationContainer>
  )
}

export default Navigation
