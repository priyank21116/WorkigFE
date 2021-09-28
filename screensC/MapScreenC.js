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

import { useSelector,useDispatch } from 'react-redux';

const MapScreenC = ({navigation}) => {

      const dispatch = useDispatch()
      

      const Stack = createNativeStackNavigator();

      return (
            <View style={tw` w-full bg-blue-200`}>

                  <View style={tw`h-2/5  w-full `}>
                  {/* <Text style={tw`text-blue-600 `}> MAPppp HERE</Text> */}
                        <MapCurrLoc />
                  </View>

                  <View style={tw`h-3/5 border-2 border-b-0 bg-gray-50 w-full rounded-t-3xl  overflow-hidden  z-50`}>
                 
                
                       <Stack.Navigator initialRouteName="SmDetails" screenOptions={{headerShown: false}} >
                              
                              <Stack.Screen name="AvailSm" component={AvailSm } />
                              <Stack.Screen name="SmDetails" component={SmDetails } />
                        </Stack.Navigator>
                       
                  </View>
            </View>
      )
}

export default MapScreenC

const styles = StyleSheet.create({})