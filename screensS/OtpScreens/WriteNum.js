import React, { useRef, useState,useEffect } from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';
import { NavigationContainer } from '@react-navigation/native';

const WriteNum = ({navigation}) => {
      let textInput= useRef(null)
      const [phone, setphone] = useState()
      const [countrycode, setcountrycode] = useState(91)
      const [focusInput, setfocusInput] = useState(true)

      function handleSubmiiit(){
            if(phone){  
            navigation.navigate('VerfiOTP')
            }
      }

      const onChangeFocus=()=>{
            setfocusInput(true)
      }
      const onChangeBlur =()=>{
            setfocusInput(false)
      }


      useEffect(() => {
            textInput.focus()
      }, [])

      return (
            <View style={tw`w-full h-full items-center bg-white border-4 border-purple-600`}>
                  <View style={tw`w-11/12 h-96 mt-32 leading-5  items-center justify-center  `}>
                        <Text style={tw`text-2xl pb-4 tracking-widerleading-relaxed text-black`}>Please Enter mobile no </Text>
                        <Text style={tw`italic text-center text-gray-500 text-base font-normal`}> An OTP would be send on that mobile no for veification purpose.</Text>
                       
                        <View style={tw`my-12 flex-row px-8 pb-2`}>
                        {/* constainer input */}
                        <View style={tw`flex-row  items-center justify-center `}>
                              <Text>{"+91  |"}</Text>
                        </View>
                              {/* <Input
                                    style={tw` grid-cols-3 w-10 flex-shrink-0 border-right`}
                                    defaultValue={"+91 |"}
                                    placeholder={countrycode}
                                    keyboardType="number-pad"
                                    onChangeText={text=> setcountrycode(text)}
                                    value={countrycode}
                                   
                              /> */}
                              <Input
                                    ref={(input)=> textInput=input}
                                    style={tw`grid-cols-9 mx-4 w-10/12`}
                                    placeholder="xxx xxx xxxx"
                                    disabledInputStyle={{border:0}}
                                    placeholderTextColor="#A8A8A8"
                                    keyboardType="number-pad"
                                    onChangeText={text=> setphone(text)}
                                    value={phone}
                                    onFocus={onChangeFocus}
                                    onBlur={onChangeBlur}
                              />
                        </View>

                        <Button 
                                    style={tw`w-6/12  items-center justify-center  `}
                                    buttonStyle={tw`w-60 bg-purple-600 mx-auto`}
                                    onPress={handleSubmiiit}
                                    title="Contiune"
                        />
                        
                  </View>
            </View>
      )
}

export default WriteNum

const styles = StyleSheet.create({})
