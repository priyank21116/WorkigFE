import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';


// import MapC from '../components/C/MapC';
import WDomain from '../components/C/WDomain';
import SmDetails from '../components/C/SmDetails';
import AvailSm from '../components/C/AvailSm';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';

const MapScreenC = () => {

      const Stack = createNativeStackNavigator();

      return (
            <View style={tw` h-screen bg-indigo-500 w-full`}>

                  <View style={tw`h-2/6  w-full`}>
                  <Text style={tw`text-blue-600 `}> MAP HERE</Text>
                        {/* <MapC /> */}
                  </View>

                  <View style={tw`h-4/6 bg-gray-100 w-full border-t-8 border-indigo-500 rounded-t-3xl   z-0`}>
                 
                 
                       <Stack.Navigator initialRouteName="WDomain" screenOptions={{headerShown: false}} >
                              <Stack.Screen name="WDomain" component={WDomain } />
                              <Stack.Screen name="AvailSm" component={AvailSm } />
                              <Stack.Screen name="SmDetails" component={SmDetails } />
                        </Stack.Navigator>
                  </View>
            </View>
      )
}

export default MapScreenC

const styles = StyleSheet.create({})