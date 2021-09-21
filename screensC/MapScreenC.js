import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';



// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapCurrLoc from '../components/C/MapCurrLoc';
import MapC from '../components/C/MapC';
import SmDetails from '../components/C/SmDetails';
import AvailSm from '../components/C/AvailSm';


const MapScreenC = ({navigation}) => {

      const Stack = createNativeStackNavigator();

      return (
            <View style={tw` h-full bg-indigo-500 w-full`}>

                  <View style={tw`h-3/6  w-full`}>
                  {/* <Text style={tw`text-blue-600 `}> MAPppp HERE</Text> */}
                        <MapCurrLoc />
                  </View>

                  <View style={tw`h-3/6 bg-gray-100 w-full border-t-8 border-indigo-500 rounded-t-3xl   z-0`}>
                 
                
                       <Stack.Navigator initialRouteName="AvailSm" screenOptions={{headerShown: false}} >
                              
                              <Stack.Screen name="AvailSm" component={AvailSm } />
                              <Stack.Screen name="SmDetails" component={SmDetails } />
                        </Stack.Navigator>
                       
                  </View>
            </View>
      )
}

export default MapScreenC

const styles = StyleSheet.create({})