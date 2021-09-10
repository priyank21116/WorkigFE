import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';


const NewWorkCame = () => {
      const NewWork = {
            byid: "1234",
            by: "YamaGuchi",
            location: { lat: 22.1, lng: 34.5 },
            WorkDomain: "Painter",
            Workdescription: " PAint 2 room and Grills",
            address: "Lodhi colony japan",
            Clientrating: 3.5
      }
      return (
            <View style={tw`bg-indigo-900 w-full h-full`}>
            <View style={tw`w-11/12 h-5/6 mx-auto bg-white border border-indigo-600 rounded-3xl p-10`}>
                        <View style={tw`h-35 w-full bg-green-300`}>
                                <Text>HEelo justify</Text>
                        </View>
            </View>
                 
            </View>
      )
}

export default NewWorkCame

const styles = StyleSheet.create({})
