import React,{useEffect} from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './store'
import { useSelector,useDispatch } from 'react-redux';

import { addTokentostate } from './slices/SmLoginSlice';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';



import HomeScreen from './CommonScreens/HomeScreen';
import Login from './CommonScreens/Login';

import MapScreenC from './screensC/MapScreenC';
import MapScreenS from './screensS/MapScreenS';

import DeclarationSpage from './screensS/DeclarationSpage';
import WDomain from './components/C/WDomain';
import NewWorkCame from './screensS/NewWorkCame';
import RegisterStwo from './screensS/RegisterStwo';
import RegisterSone from './screensS/RegisterSone';
import WDomainSm from './screensS/WDomainSm';
import ProfileScreen from './screensS/ProfileScreen';
import RegisterScreenC from './screensC/RegisterScreenC';

import WriteNum from './CommonScreens/OtpScreens/WriteNum';
import VerfiOTP from './CommonScreens/OtpScreens/VerfiOTP';
import AvailSm from './components/C/AvailSm';




function App() {

      // const token = useSelector(state => state.Genral.token)
      const Stack = createNativeStackNavigator();

      // const  dispatch = useDispatch()
      // useEffect(()=>{
      //     // dispatch(addTokentostate)
      // ,[]})

  
  return (
<>
{/* {token ?  <></> : */}

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
              {/* <Stack.Screen  name="WDomainSm" component={WDomainSm}  /> */}


              {/* <Stack.Screen name="AvailSm" component={AvailSm } /> */}

              <Stack.Screen name="RegisterScreenC" component={RegisterScreenC} />
              <Stack.Screen name="MapScreenC" component={MapScreenC} />


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

