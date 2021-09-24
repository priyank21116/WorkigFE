import React from 'react'
import { Button, Icon, Text, Badge } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

import { Alert, TouchableOpacity } from 'react-native';
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { useDispatch } from 'react-redux';
import { TypeofUSer } from '../slices/GenralSlice';



const HomeScreen = ({ navigation }) => {
      const dispatch = useDispatch()


      return (


            <View style={[tw`items-center justify-center mt-40 bg-gray-200`]}>

                  <TouchableOpacity onPress={() => {
                        dispatch(TypeofUSer("Client"))
                        navigation.navigate('Login')
                  }}
                  >
                        <View style={[tw`w-10/12 px-4 py-6 mt-20 my-8 mx-auto  border rounded-2xl`, { backgroundColor: "#8f00ff" }]}>
                              <Text style={tw`text-2xl tracking-normal font-bold text-white`} >Want Some workto be done ?</Text>
                        </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                        dispatch(TypeofUSer("Serviceman"))
                        navigation.navigate('Login')
                  }}
                  >
                        <View style={[tw`w-10/12 px-4 py-6 my-8 mx-auto  border rounded-2xl`, { backgroundColor: "#8f00ff" }]}>
                              <Text style={tw`text-2xl tracking-normal font-bold text-white`} >Start Work as Serviceman</Text>
                        </View>
                  </TouchableOpacity>

            </View>

      )
}

export default HomeScreen

const styles = StyleSheet.create({})
