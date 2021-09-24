import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames';

import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import { ARTpatchFullregister } from '../slices/Sm/SmPerSlice'
import { Input, Button, Icon } from 'react-native-elements';

const DeclarationSpage = ({ navigation }) => {

      const dispatch = useDispatch()
      const SmPerr = useSelector(state => state.SmPer)

      // console.log("STATTTTT<<<<<<<<<<<",SmPerr)
      const [declare, setDeclare] = useState(false)

      const OnsubmitFormtwo = () => {
            if (declare) {
                  dispatch(ARTpatchFullregister(SmPerr))
                        .unwrap()
                        .then((res) => {
                              console.log("RESP FROM DeclarationSpage DISPATCH", res)
                              console.log("DISSSPPPPPATCH  Declaretion & Full Details  DDDONEEEEEEEEEE", SmPerr)
                              navigation.navigate('Login')

                        })
                        .catch((rejectedValueOrSerializedError) => {
                              console.log("DeclarationSpage error", rejectedValueOrSerializedError)
                        })

            } else {
                  Alert.alert(
                        "Cannot Register",
                        "You need to checkout Declaration before we can register you",
                        [
                              {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                              }

                        ]
                  );
            }


      }

      return (
            <View style={tw`w-full h-full items-center justify-center`}>
                  <Text style={tw`font-bold text-2xl`}>  Checkout Declaration </Text>

                  <View style={tw`flex-1 mx-6 w-full my-32`}>


                        <CheckBox
                              checked={declare}
                              style={tw`border-none bg-white`}
                              uncheckedColor="#4632A1"
                              color='#8F9195'
                              title="I Declare that all data I have submit are True to best of my konwladge"
                              onPress={() => setDeclare(!declare)}

                        />


                  </View>
                  <Button
                        style={[tw`w-6/12 shadow-lg`, { shadowColor: '#00ACEE' }]}
                        buttonStyle={tw`w-8/12 bg-indigo-400 mx-auto`}
                        title="Register"
                        onPress={OnsubmitFormtwo}

                  />
            </View>
      )
}

export default DeclarationSpage

const styles = StyleSheet.create({})
