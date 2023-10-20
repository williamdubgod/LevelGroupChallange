import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicialPage from './components/InicialPage';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';
import RequestsScreen from './components/RequestsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={InicialPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="RequestsScreen"
          component={RequestsScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
