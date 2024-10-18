import React from 'react';
import Login from './components/Login';
import List from './components/List';
import SignUp from './components/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Login') {
              iconName = 'log-in-outline'; 
            } else if (route.name === 'List') {
              iconName = 'list-outline'; 
            } else if (route.name === 'SignUp') {
              iconName = 'person-add-outline'; 
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Login" component={Login} />
        {/* <Tab.Screen name="List" component={List} /> */}
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
