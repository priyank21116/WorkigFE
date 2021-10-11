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

            <View style={[tw``,{ backgroundColor: "#8f00ff" }]}>
                  <View style={[tw`items-center justify-center py-20 mt-40 mb-40 mx-8 bg-gray-50  border-2 rounded-2xl`]}>
<Text style={tw`text-3xl font-bold italic`}> Search for</Text>
                        <TouchableOpacity onPress={() => {
                              dispatch(TypeofUSer("Client"))
                              navigation.navigate('Login')
                        }}
                        >
                              <View style={[tw`w-10/12 px-4 py-6 mt-20 my-8 mx-auto  border rounded-2xl`, { backgroundColor: "#8f00ff" }]}>
                                    <Text style={tw`text-2xl tracking-normal font-bold text-white`} >Serviceman to get work done</Text>
                              </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                              dispatch(TypeofUSer("Serviceman"))
                              navigation.navigate('Login')
                        }}
                        >
                              <View style={[tw`w-10/12 px-4 py-6 my-8 mx-auto  border rounded-2xl`, { backgroundColor: "#8f00ff" }]}>
                                    <Text style={tw`text-2xl tracking-normal font-bold text-white`} >Work and Start serving</Text>
                              </View>
                        </TouchableOpacity>

                  </View>
            </View>

      )
}

export default HomeScreen

const styles = StyleSheet.create({})
