import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import NewCustomer from '../../../features/customer/New'
import RegionStacks from './Stack'

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName

          if (route.name === 'Regions') {
            iconName = 'people'
          } else if (route.name === 'Add') {
            iconName = focused ? 'person-add' : 'person-add-outline'
          }

          return <Ionicons name={iconName} color={color} />
        },
        tabBarActiveTintColor: '#ff0008',
        tabBarInactiveTintColor: '#ccc',
        headerShown: false,
        lazy: false
      })}
    >
      <Tab.Screen name="Regions" component={RegionStacks} options={{
        tabBarLabel: 'List'
      }} />
      <Tab.Screen name="Add" component={NewCustomer} />
    </Tab.Navigator>
  )
}

export default Navigation
