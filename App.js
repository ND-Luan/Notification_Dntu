import React from 'react';

import {StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import NotificationScreen from '@screens/NotificationScreen';
import WebDetail from '@screens/WebDetail'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {createStackNavigator} from '@react-navigation/stack';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
            paddingVertical: 15,
          },
          tabBarShowLabel: true,
          //headerShown: false,
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesomeIcon icon={faHome} size={30} />
            ),
            tabBarLabel: ({focused}) => (
              <Text
                style={[styles.tabHeader, {color: focused ? 'red' : 'black'}]}>
                Home
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="WebView"
          component={NotificationScreen}
          options={{
            tabBarIcon: () => <FontAwesomeIcon icon={faBell} size={30} />,
            tabBarLabel: ({focused}) => (
              <Text
                style={[styles.tabHeader, {color: focused ? 'red' : 'black'}]}>
                WebView
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WebDetail" component={WebDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  tabHeader: {
    fontSize: 15,
  },
});
export default App;
