import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Button } from 'react-native-elements/dist/buttons/Button';

import { useDispatch,useSelector } from 'react-redux';
const VerfiOTP = ({ navigation }) => {

      const dispatch = useDispatch()
      const userType = useSelector(state => state.Genral.typeOUs)

      let textInput = useRef(null)
      let clockCall = null
      const [otpvalue, setOtpvalue] = useState("")
      const lengthInput = 6;
      const defaultCountdown = 5;
      const [countdown, setCountdown] = useState(defaultCountdown)
      const [enableResend, setenableResend] = useState(initialState)

      useEffect(() => {
            clockCall = setInterval(() => {
                  decrementClock();
            }, 1000)

            return () => {
                  clearInterval(clockCall)
            }
      })

      const decrementClock = () => {
            if (countdown === 0) {
                  setenableResend(true)
                  setCountdown(0)
                  clearInterval(clockCall)
            }
            else {
                  setCountdown(countdown - 1)
            }
      }

      const onChangeNum = () => {
            setOtpvalue("")

      }



      function handleSubmiiit() {
           navigation.navi
      }

      const onTextChange = (val) => {
            setOtpvalue(val)
            if(val.length===lenght){
                  
            }
      }

      const onResendOTPbTn = () => {
            if (enableResend) {
                  setCountdown(defaultCountdown)
                  setenableResend(false)
                  clearInterval(clockCall)
                  clockCall = setInterval(() => {
                        decrementClock(0)
                  }, 1000)
            }
      }

      useEffect(() => {
            textInput.focus()
      }, [])

      return (
            <View style={tw`w-full h-full items-center px-3 bg-white border-4 border-purple-600`}>
                  <View style={tw`w-11/12 h-96 mt-32 mx-8 leading-5  items-center justify-center  `}>
                        <KeyboardAvoidingView

                              keyboardVerticalOffset={50}
                              behavior={'padding'}
                        >
                              <Text style={tw`text-2xl items-center justify-center pb-4 mx-auto mt-32 mb-4 tracking-widerleading-relaxed text-black`}>Enter OTP below. </Text>
                              <View>
                                    <TextInput

                                          ref={(input) => textInput = input}
                                          onChangeText={onTextChange}
                                          style={[{ width: 0, height: 0 }, tw`bg-black`]}
                                          value={otpvalue}
                                          maxLength={lengthInput}
                                          returnKeyType="done"
                                          keyboardType="numeric"
                                    />

                                    <View style={tw`flex-row w-11/12 h-auto mx-4 px-8  items-center justify-center  `}>
                                          {
                                                Array(lengthInput).fill().map((data, index) => (
                                                      <View
                                                            key={index}
                                                            style={[tw`py-3 border-b-2  w-12 mx-1 items-center justify-center border-t-0 `, { borderBottomColor: index === otpvalue.length ? "#383838" : "#909090", backgroundColor: "#F0F0F0" }]}>
                                                            <Text style={tw`text-2xl items-center`}
                                                                  onPress={() => textInput.focus()}
                                                            >
                                                                  {otpvalue && otpvalue.length > 0 ? otpvalue[index] : ""}
                                                            </Text>
                                                      </View>
                                                ))
                                          }

                                    </View>
                              </View>
                              <View style={tw`mt-36 px-0 mx-0 w-screen bg-black`}>
                                    <View style={tw`flex-row  h-20 w-10/12 flex-1 mt-0  items-center`}>
                                          <TouchableOpacity style={tw`   h-12 bg-blue-200`} onPress={onChangeNum}>
                                                <View style={tw` border-1 rounded-xl items-center justify-start `}>
                                                      <Text style={tw`items-center text-base text-blue-400`}> Change Number</Text>
                                                </View>
                                          </TouchableOpacity>
                                          <TouchableOpacity style={tw`  h-12  bg-green-300`} onPress={onResendOTPbTn}>
                                                <View style={tw` border-1 rounded-xl items-center justify-center `}>
                                                      <Text style={[tw`items-center text-base text-gray-400`, { color: enableResend ? '#234DB7' : 'gray' }]}>Resend OTP</Text>
                                                </View>
                                          </TouchableOpacity>

                                    </View>
                                    <Button

                                          buttonStyle={tw` w-5/12 my-4  bg-purple-600 mx-auto items-end justify-center `}
                                          onPress={handleSubmiiit}
                                          title="Verify & Proceed"
                                    />
                              </View>


                        </KeyboardAvoidingView>
                  </View>
            </View>
      )
}

export default VerfiOTP