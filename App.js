import Login from './components/Login';
import List from './components/List';
import Form from './components/Form';
import SignUp from './components/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="Form" component={Form} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}