import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import store from './store'



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';


import LoginC from './screensC/LoginC';
import HomeScreen from './CommonScreens/HomeScreen';
import MapScreenC from './screensC/MapScreenC';
import MapScreenS from './screensS/MapScreenS';
import LoginS from './screensS/LoginS';
import WDomain from './components/C/WDomain';
import NewWorkCame from './screensS/NewWorkCame';
import RegisterStwo from './screensS/RegisterStwo';
import RegisterSone from './screensS/RegisterSone';
import WDomainSm from './screensS/WDomainSm';
import ProfileScreen from './screensS/ProfileScreen';

import WriteNum from './screensS/OtpScreens/WriteNum';
import VerfiOTP from './screensS/OtpScreens/VerfiOTP';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (

    // <Provider store={store} >
    <NativeBaseProvider >
      <NavigationContainer >
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={{ flex: 1 }}
          >
        
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}} >

              <Stack.Screen  name="HomeScreen" component={HomeScreen}  />
              <Stack.Screen  name="WriteNum" component={WriteNum}  />
              <Stack.Screen  name="VerfiOTP" component={VerfiOTP}  />

      
              <Stack.Screen  name="LoginS" component={LoginS}  />
              <Stack.Screen  name="ProfileScreen" component={ProfileScreen}  />
              <Stack.Screen  name="RegisterStwo" component={RegisterStwo}  />
              <Stack.Screen  name="RegisterSone" component={RegisterSone}  />
              <Stack.Screen  name="WDomain" component={WDomain}  />
              <Stack.Screen  name="MapScreenS" component={MapScreenS}  />
              <Stack.Screen  name="WDomainSm" component={WDomainSm}  />

         

              <Stack.Screen  name="LoginC" component={LoginC}  />
              <Stack.Screen  name="NewWorkCame" component={NewWorkCame}  />
              <Stack.Screen  name="MapScreenC" component={MapScreenC}  />

            </Stack.Navigator>
            
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  //  </Provider>

  );
}

