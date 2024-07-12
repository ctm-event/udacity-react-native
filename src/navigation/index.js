import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import CustomerBottomTab from './screens/customers/BottomTab'
import Notification from './screens/Notification'
import Setting from './screens/Setting'

import Ionicons from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Customer"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#fff',
            width: 250
          }
        }}
      >
        <Drawer.Screen
          name="Customer"
          component={CustomerBottomTab}
          options={{
            title: 'Customer',
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="person-outline"
                size={size}
                color={focused ? '#ff0008' : '#ccc'}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Notification"
          component={Notification}
          options={{
            title: 'Notification',
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="notifications-outline"
                size={size}
                color={focused ? '#ff0008' : '#ccc'}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Setting}
          options={{
            title: 'Settings',
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="settings-outline"
                size={size}
                color={focused ? '#ff0008' : '#ccc'}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavigation
