import React from 'react'
import { Input, Button, Icon, Text, Badge } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

import { Alert } from 'react-native';
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { ScrollView } from 'react-native'

// import LoginS from '../screensS/LoginS';
// import LoginC from '../screensC/LoginC';

import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
// import { Icon } from 'react-native-elements'
// import { Input } from 'react-native-elements';


const HomeScreen = ({navigation}) => {
      const navigate = useNavigation();


      return (
            <ScrollView >

                  <View style={[tw`items-center justify-items-center`,{ justifyContent: "center", alignContent: "center", alignItems: "center" }]}>

                        <Text>You are ?</Text>
                        <Button title="Looking for Work" onPress={() => navigation.navigate('LoginS')}></Button>
                        <Button title="Want help for Some Work?" onPress={() =>navigation.navigate('LoginC') }></Button>
                  </View>
            </ScrollView>
      )
}

export default HomeScreen

const styles = StyleSheet.create({})
