import React, { useEffect } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './store'
import { useSelector, useDispatch } from 'react-redux';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';



import HomeScreen from './CommonScreens/HomeScreen';
import Login from './CommonScreens/Login';
import WriteNum from './CommonScreens/OtpScreens/WriteNum';
import VerfiOTP from './CommonScreens/OtpScreens/VerfiOTP';


import MapScreenS from './screensS/MapScreenS';
import DeclarationSpage from './screensS/DeclarationSpage';
import NewWorkCame from './screensS/NewWorkCame';
import RegisterStwo from './screensS/RegisterStwo';
import RegisterSone from './screensS/RegisterSone';
import ProfileScreen from './screensS/ProfileScreen';


import MapScreenC from './screensC/MapScreenC';
import RegisterScreenC from './screensC/RegisterScreenC';
import DomainScreen from './screensC/DomainScreen';
import PostReview from './screensC/PostReview';
import WorkUnderway from './screensC/WorkUnderway';
import Temp from './screensC/temp';


import SmDetails from './components/C/SmDetails';
import AvailSm from './components/C/AvailSm';



function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>

      <NativeBaseProvider >
        <NavigationContainer >
          <SafeAreaProvider>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
              style={{ flex: 1 }}
            >

              <Stack.Navigator initialRouteName="NewWorkCame" screenOptions={{ headerShown: true }} >

                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="WriteNum" component={WriteNum} />
                <Stack.Screen name="VerfiOTP" component={VerfiOTP} />
                <Stack.Screen name="DeclarationSpage" component={DeclarationSpage} />


                <Stack.Screen name="RegisterSone" component={RegisterSone} />
                <Stack.Screen name="RegisterStwo" component={RegisterStwo} />
                <Stack.Screen name="MapScreenS" component={MapScreenS} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="NewWorkCame" component={NewWorkCame} />


                <Stack.Screen name="Temp" component={Temp} />
                <Stack.Screen name="DomainScreen" component={DomainScreen} />
                <Stack.Screen name="RegisterScreenC" component={RegisterScreenC} />
                <Stack.Screen name="MapScreenC" component={MapScreenC} />
                <Stack.Screen name="WorkUnderway" component={WorkUnderway} />
                <Stack.Screen name="PostReview" component={PostReview} />
                {/* <Stack.Screen name="SmDetails" component={SmDetails} />
              <Stack.Screen name="AvailSm" component={AvailSm} /> */}




              </Stack.Navigator>

            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </NavigationContainer>
      </NativeBaseProvider>
      {/* } */}
    </>

  );
}

export default () => {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  )
}

