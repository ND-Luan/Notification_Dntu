import React from 'react';

import {StyleSheet,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import NotificationScreen from '@screens/NotificationScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIconStyle: {
            marginTop: 7,
          },
          tabBarStyle: {
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,

            shadowOpacity: 0.1,
            elevation: 5,
            borderTopWidth: 0,
            height: 80,
            paddingVertical: 15
          },
          tabBarShowLabel: true,
          //headerShown: false,
          tabBarHideOnKeyboard: true,
        }
        }
      >
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => <FontAwesomeIcon icon={faHome} size={30}/>,
            tabBarLabel:({focused}) =><Text style={[styles.tabHeader, {color: focused ? "red": "black"}]}>Home</Text>
          }} />
        <Tab.Screen name="Notification" component={NotificationScreen}
          options={{
            tabBarIcon: () => <FontAwesomeIcon icon={faBell} size={30}/>,
            tabBarLabel:({focused}) =><Text style={[styles.tabHeader, {color: focused ? "red": "black"}]}>Notification</Text>
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );

}
const styles = StyleSheet.create({
  tabHeader:{
    fontSize:15
  }
})
export default App;