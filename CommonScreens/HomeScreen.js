import React from 'react'
import { Input, Button, Icon, Text, Badge } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

import { Alert, TouchableOpacity } from 'react-native';
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { ScrollView } from 'react-native'

// import LoginS from '../screensS/LoginS';
// import LoginC from '../screensC/LoginC';

import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
// import { Icon } from 'react-native-elements'
// import { Input } from 'react-native-elements';


const HomeScreen = ({ navigation }) => {
      const navigate = useNavigation();


      return (


            <View style={[tw`items-center justify-center bg-gray-100`]}>

                  <TouchableOpacity onPress={() => navigation.navigate('LoginC')}>
                        <View style={[tw`w-10/12 px-4 py-6 mt-20 my-8 mx-auto h-auto border rounded-2xl`,{backgroundColor: "#8f00ff"}]}>
                              <Text style={tw`text-2xl tracking-normal font-bold text-white`} >Want Some workto be done ?</Text>
                        </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() =>navigation.navigate('LoginS')}>
                        <View style={[tw`w-10/12 px-4 py-6 my-8 mx-auto h-auto border rounded-2xl`,{backgroundColor: "#8f00ff"}]}>
                              <Text style={tw`text-2xl tracking-normal font-bold text-white`} >Start Work as Serviceman</Text>
                        </View>
                  </TouchableOpacity>
                 
            </View>

      )
}

export default HomeScreen

const styles = StyleSheet.create({})
