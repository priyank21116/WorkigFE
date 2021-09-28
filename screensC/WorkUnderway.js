import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native'
import { Icon } from 'react-native-elements'

import tw from 'tailwind-react-native-classnames';
import * as yup from 'yup';
import { Formik } from 'formik';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';


import { CMARTpatchFullregister } from '../slices/Cm/CmPerSlice';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';

import { useSelector, useDispatch } from 'react-redux';
const WorkUnderway = ({ navigation }) => {
      const dispatch = useDispatch()
      const [raiseIssue, setraiseIssue] = useState(false)
      const [cancelSmDeal, setcancelSmDeal] = useState(false)
      const [reasonForCancelling, setreasonForCancelling] = useState("")

      const photo = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/21c77039-c68a-4ad9-b6e3-fa31d39a7c4e/d8vtcbc-9f0e08ff-1ab4-43c0-b1f6-9d9347bf95da.png/v1/fill/w_891,h_720,strp/doraemon__nobita_nobi_vector_by_jewel_chanxoxo_d8vtcbc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMjFjNzcwMzktYzY4YS00YWQ5LWI2ZTMtZmEzMWQzOWE3YzRlXC9kOHZ0Y2JjLTlmMGUwOGZmLTFhYjQtNDNjMC1iMWY2LTlkOTM0N2JmOTVkYS5wbmciLCJ3aWR0aCI6Ijw9ODkxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WlZ1FWYRfaSBPD5Rlh8QNOzMHOkzquDj3UTmSa5ev7k"

      const Smname = "sonu"
      const availseens = "12-Aug-21"
      const about = "AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAa AAAAAAAAAAAAAAAAAAAa"
      const specilisation = []

      return (
            <View style={tw`bg-indigo-400 w-full h-full`}>
                  <ScrollView style={tw`bg-gray-50 border rounded-t-xl   mt-20 mx-auto  w-11/12 h-full`}>
                        <View style={tw` mt-28 pb-12 border-b-2  flex-row justify-between `}>
                              {/* <Image /> */}
                              <View style={tw`w-12 h-12 border`}></View>
                              {/* <Image /> */}

                        </View>

                        <View>
                              <View style={tw`flex-row`}>
                                    <View style={tw`w-36 h-36  m-2 border-2 border-indigo-600 rounded-full`}>
                                          <Image
                                                style={tw`w-36 h-36  border-2  rounded-full`}
                                                source={{
                                                      uri: photo,
                                                }} />
                                    </View>
                                    <View>

                                   
                                    <Text style={tw` px-1  pt-3  tracking-wider text-2xl font-semibold`}>{Smname}</Text>
                                    <Text style={tw`px-1`}>Work Domains -
                                          {specilisation?.map(i => (
                                                <ListItem.Subtitle>{` ${i}`}</ListItem.Subtitle>
                                          ))}</Text>
                                    <Text style={tw`px-0`}> Member sinces- {availseens}</Text>
                                    </View>
                              </View>
                              <View style={tw` mb-4`} >

                                    <View style={tw` items-center mx-auto mt-4 mb-2 -ml-2 border-indigo-700 w-full border rounded`}></View>
                                    <View>
                                          <Text style={tw`  pt-1 pl-5   text-xl font-semibold`}>About</Text>
                                          <Text style={tw`px-3 py-5 mb-4`}>{about}</Text>
                                    </View>



                                    <View style={tw` items-center mx-auto mt-4 mb-2 -ml-2 border-indigo-700 w-full border rounded`}></View>
                                    <View style={tw`my-12 w-10/12 mx-auto`}>
                                    <View style={tw`flex-row`}>
                                          <View style={tw`w-1/2 h-12 bg-red-500 items-center justify-center`}>
                                                <TouchableOpacity onPress={() => { setraiseIssue(!raiseIssue) }}>
                                                   
                                                            <Text> Raise Issue</Text>
                                                     
                                                </TouchableOpacity>
                                          </View>
                                          <View  style={tw`w-1/2 h-12 bg-indigo-500 items-center justify-center`}>
                                                <TouchableOpacity>
                                                    
                                                            <Text>Contact Serviceman</Text>
                                                   
                                                </TouchableOpacity>
                                          </View>
                                          </View>
                                          {raiseIssue ?
                                                <View style={tw`bg-red-200 w-full px-2 `}>
                                                      <View style={tw`w-full h-12 mt-3 mb-3 bg-green-500 items-center justify-center`}>
                                                            <TouchableOpacity onPress={() => { console.log("ServiceMan didn't arrived intime") }}>
                                                                  
                                                                        <Text> ServiceMan didn't arrived in time</Text>
                                                                  
                                                            </TouchableOpacity>
                                                      </View>
                                                      <View style={tw`w-full h-12 mb-3 bg-green-500 items-center justify-center`}>
                                                            <TouchableOpacity onPress={() => { console.log("Service is out of contact") }}>
                                                                 
                                                                        <Text> Service is out of contact</Text>
                                                                 
                                                            </TouchableOpacity>
                                                      </View>
                                                      <View style={tw`w-full h-12 mb-3 bg-green-500 items-center justify-center`}>
                                                            <TouchableOpacity onPress={() => {
                                                                  console.log("Need to cancel Deal")
                                                                  setcancelSmDeal(!cancelSmDeal)
                                                            }}>
                                                                 
                                                                        <Text> Need to cancel Deal</Text>
                                                                
                                                            </TouchableOpacity>
                                                      </View>
                                                </View> : null}
                                    </View>
                                    {cancelSmDeal ? <View>
                                          {Alert.alert("Deal wil be cancelled only when Serviceman also agree to it")}
                                          <Input
                                                label="Reason for cancelling deal"
                                                labelStyle={[tw`mt-4 `, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={(text) => setreasonForCancelling(text)}

                                                value={reasonForCancelling}
                                          />

                                          <Button
                                                title="Confirm Deal"
                                                buttonStyle={tw`w-10/12 bg-blue-400 mx-auto`}
                                                onPress={() => {

                                                      console.log("Deal Cancelled", reasonForCancelling)
                                                }
                                                      // dispatch()
                                                }
                                          />

                                    </View> : null}
                                    <View style={tw` h-12 bg-blue-400 items-center justify-center`}>
                                          <TouchableOpacity onPress={() => navigation.navigate("PostReview")}>
                                                
                                                      <Text>Work Done Poceed to Pay</Text>
                                               
                                          </TouchableOpacity>


                                    </View>

                              </View>
                        </View>
                  </ScrollView>
            </View>
      )
}

export default WorkUnderway


