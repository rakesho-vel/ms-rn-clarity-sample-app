/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Config} from 'react-native-config';
import {initialize} from 'react-native-clarity';
import SignInScreen from "./src/screens/signin";
import WelcomeScreen from "./src/screens/welcome";
import ProductDetailsScreen from "./src/screens/product";

function App(): React.JSX.Element {
  const Stack = createStackNavigator();

  console.log(Config.MICROSOFT_CLARITY_PROEJECT_ID);

  useEffect(() => {
    // initialize Microsoft Clarity
    initialize('jnu0y0rcjg');
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signin"
          component={SignInScreen}
          options={{
            headerTitle: "Sign In",
            headerStyle: { backgroundColor: "grey" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerTitle: "Dashboard",
            headerStyle: { backgroundColor: "grey" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Product"
          component={ProductDetailsScreen}
          initialParams={{
            productName: "Product 1",
            price: 100,
            description: "Description 1",
          }}
          options={{
            headerTitle: "Product",
            headerStyle: { backgroundColor: "grey" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
