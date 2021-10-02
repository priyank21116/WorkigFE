import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, Alert, Animated } from 'react-native'
import { Icon } from 'react-native-elements'
import { Avatar } from "react-native-elements";

import tw from 'tailwind-react-native-classnames';
import * as yup from 'yup';
import { Formik } from 'formik';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

import * as Linking from 'expo-linking';
import { CMARTpatchFullregister } from '../slices/Cm/CmPerSlice';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';

import { useSelector, useDispatch } from 'react-redux';
import { LocationActivityType } from 'expo-location';
// import Animated from 'react-native-reanimated';


const WorkUnderway = ({ navigation }) => {
      const dispatch = useDispatch()
      const [showdetails, setshowdetails] = useState(true)
      const [raiseIssue, setraiseIssue] = useState(false)
      const [cancelSmDeal, setcancelSmDeal] = useState(false)
      const [reasonForCancelling, setreasonForCancelling] = useState("")
      const [cycle, setcycle] = useState({ x: -200, y: 5 })

      const photo = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/21c77039-c68a-4ad9-b6e3-fa31d39a7c4e/d8vtcbc-9f0e08ff-1ab4-43c0-b1f6-9d9347bf95da.png/v1/fill/w_891,h_720,strp/doraemon__nobita_nobi_vector_by_jewel_chanxoxo_d8vtcbc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMjFjNzcwMzktYzY4YS00YWQ5LWI2ZTMtZmEzMWQzOWE3YzRlXC9kOHZ0Y2JjLTlmMGUwOGZmLTFhYjQtNDNjMC1iMWY2LTlkOTM0N2JmOTVkYS5wbmciLCJ3aWR0aCI6Ijw9ODkxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WlZ1FWYRfaSBPD5Rlh8QNOzMHOkzquDj3UTmSa5ev7k"

      const Smname = "sonu"
      const availseens = "12-Aug-21"
      const about = "AAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAa AAAAAAAAAAAAAAAAAAAa"
      const specilisation = []
      const rating = 3.5
      const phone = "6260041022"

      // useEffect(() => {
      //       const interval = setInterval(() => {
      //             setcycle({ x: -200, y: 5 })
      //       }, 100000);
      //       return () => clearInterval(interval);
      // }, []);


      const position = new Animated.Value(-270)
      const endval = -50
      useEffect(() => {
            Animated.loop(Animated.timing(position, {
                  toValue: endval,
                  duration: 2000,
                  friction: 1,
                  useNativeDriver: true,

            }),
                  { iterations: 1000 }).start()

      }, [position, endval]);




      

      const SSstartValue = new Animated.Value(10)
      const EEendValue = 100;   

      useEffect(() => {
            Animated.loop(
                  Animated.timing(SSstartValue, {
                        toValue: EEendValue,
                        friction: 1,
                        useNativeDriver: true,
                  }),
                  { iterations: 1000 },
            ).start();
      }, [SSstartValue, EEendValue]);


      return (
            <View style={tw`bg-indigo-400 w-full h-full`}>
                  <ScrollView showsVerticalScrollIndicator={false} style={tw`bg-gray-50 border-2 rounded-t-2xl   mt-20 mx-auto  w-11/12 h-full`}>
                        
                        {/* <Animated.View
                              style={[
                                    {
                                          height: 50,
                                          width: 50,
                                          backgroundColor: 'black',
                                    },
                                    {
                                          transform: [
                                                {
                                                      translateX:SSstartValue ,
                                                },  
                                          ],
                                    },
                              ]}
                        /> */}
                        <View style={tw` mt-16  pb-24  flex-row justify-between `}>
                              <View style={[tw`border rounded-full absolute left-3 bg-gray-100 `, { zIndex: 3, elevation: 3 }]}>

                                    <Avatar
                                          size={100}
                                          rounded
                                          icon={{ name: 'user', color: 'gray', type: 'font-awesome' }}
                                    />

                              </View>

                              <View style={[tw`border-b-4   -mb-6  border-opacity-60 border-dotted mx-auto border-gray-600 w-8/12 mx-auto`, {}]}>
                              </View>
                              <Animated.View style={[tw`pt-4 -mb-6`,{ transform: [{ translateX: position }] }]}>
                                    <Icon
                                          size={50}
                                          color="black"
                                          name='bicycle-outline'  
                                          type='ionicon'
                                          color='#517fa4'
                                    />
                              </Animated.View>

                              <View style={[tw`border rounded-full absolute right-3 bg-gray-100`, { zIndex: 3, elevation: 3 }]}>
                                    <Avatar
                                          size={100}
                                          rounded
                                          icon={{ name: 'home', color: 'gray', type: 'font-awesome' }}
                                    />
                              </View>


                        </View>

                        <View>
                              <View style={tw`mt-2 border-2 mx-2 rounded-2xl bg-gray-50`}>
                                    <View style={tw`flex-row mt-2 border-b mb-2 pb-5`}>
                                          <View style={tw`w-32 h-32  m-2 border-2 border-indigo-600 rounded-full`}>
                                                <Image
                                                      style={tw`w-32 h-32  border-2  rounded-full`}
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
                                    {showdetails ?
                                          <View>
                                                <View style={tw` items-center mx-auto mt-3 mb-2 -ml-2 border-indigo-600 w-full `}></View>
                                                <View>
                                                      <Text style={tw`  pt-1 pl-5   text-xl font-semibold`}>About</Text>
                                                      <Text style={tw`px-5 mb-2`}>{`Rating- ${rating}/ 5`}</Text>
                                                      <Text style={tw`px-5 py-2 mb-4`}>{about}</Text>
                                                </View>
                                          </View>
                                          : null}

                              </View>

                              <View style={tw` mb-4`} >


                                    <View style={tw` items-center mx-auto mt-4 mb-2 -ml-2  w-full `}></View>
                                    <View style={tw`my-8 w-full mx-auto `}>
                                          <View style={tw`flex-row`}>
                                                <View style={tw` w-5/12 h-12 bg-red-500 rounded mr-2 ml-6  items-center justify-center`}>
                                                      <TouchableOpacity onPress={() => { setraiseIssue(!raiseIssue) }}>

                                                            <Text style={tw` text-base text-white`}> Raise Issue</Text>

                                                      </TouchableOpacity>
                                                </View>
                                                <View style={tw`w-5/12 h-12 bg-indigo-400 rounded mr-2 ml-2  items-center justify-center`}>
                                                      <TouchableOpacity onPress={async () => {

                                                            let result = await Linking.openURL(`tel: ${phone}`)
                                                            console.log(" :::::::::CALL::::::::::::::::::", result)
                                                      }}>

                                                            <Text style={tw` text-base text-white`}>Contact Serviceman</Text>

                                                      </TouchableOpacity>
                                                </View>
                                          </View>
                                          {raiseIssue ?
                                                <View style={tw`bg-gray-200 w-10/12 mx-auto mt-4 px-2 `}>
                                                      <View style={tw`w-full h-12 mt-3 mb-3 bg-green-400 items-center justify-center`}>
                                                            <TouchableOpacity onPress={() => {
                                                                  Alert.alert("Serviceman is asked to update you about his cuurrent location")
                                                                  console.log("ServiceMan didn't arrived intime")
                                                            }}>

                                                                  <Text> ServiceMan didn't arrived in time</Text>

                                                            </TouchableOpacity>
                                                      </View>
                                                      <View style={tw`w-full h-12 mb-3 bg-green-400 items-center justify-center`}>
                                                            <TouchableOpacity onPress={() => {
                                                                  Alert.alert("Our team will try to approch earliest and will upadate you.If that Serviceman didn't respond positively ,We will allocate another partner to you.Request you to kepp patience ")
                                                                  console.log("Service is out of contact")
                                                            }}>

                                                                  <Text> Service is out of contact</Text>

                                                            </TouchableOpacity>
                                                      </View>
                                                      <View style={tw`w-full h-12 mb-3 bg-green-400 items-center justify-center`}>
                                                            <TouchableOpacity onPress={() => {
                                                                  !cancelSmDeal && Alert.alert("Deal wil be cancelled only when Serviceman also agree to it")
                                                                  console.log("Need to cancel Deal")
                                                                  setcancelSmDeal(!cancelSmDeal)
                                                            }}>

                                                                  <Text> Need to cancel Deal</Text>

                                                            </TouchableOpacity>
                                                      </View>
                                                </View> : null}
                                    </View>
                                    {cancelSmDeal ? <View style={tw`m-4`}>

                                          <Input
                                                label="Reason for cancelling deal"
                                                labelStyle={[tw`mt-4  `, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={(text) => setreasonForCancelling(text)}

                                                value={reasonForCancelling}
                                          />

                                          <Button
                                                title="Request to Cancel Deal"
                                                buttonStyle={tw`w-10/12 bg-blue-400 mx-auto`}
                                                onPress={() => {

                                                      console.log("Deal Cancelled", reasonForCancelling)
                                                }
                                                      // dispatch()
                                                }
                                          />

                                    </View> : null}
                                    <View style={tw` h-16 bg-blue-400 mx-2 mb-20 items-center rounded justify-center`}>
                                          <TouchableOpacity onPress={() => navigation.navigate("PostReview")}>

                                                <Text style={tw`font-bold text-xl text-white`}>Work Done Poceed to Pay</Text>

                                          </TouchableOpacity>


                                    </View>

                              </View>
                        </View>
                  </ScrollView>
            </View>
      )
}

export default WorkUnderway


