import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity,BackHandler, Image,Alert } from 'react-native'
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

import { Slider } from 'react-native-elements';
const PostReview = ({ navigation }) => {

      const [review, setreview] = useState({
            RateOn5: null,
            comment: ""
      })


      return (
            <View style={tw`bg-indigo-400 w-full px-4 pb-8 h-full`}>
                  <ScrollView style={tw`bg-gray-50 border rounded-t-2xl px-4  mt-20 mx-auto  w-11/12 h-full`}>

                        <Text style={tw`text-2xl mx-auto mt-12 mb-4 font-bold items-center`}>Review Service</Text>
                        <View style={tw`border rounded pt-12 px-6 bg-gray-100 pb-16 mx-2`}>
                              <Text style={[tw`font-bold mb-3 text-indigo-500`, { color: "#8f00ff" }]}>On Scale to five how would you rate Serviceman ?</Text>
                              <Slider
                                    value={review.RateOn5}
                                    onValueChange={(text) => setreview({ ...review, RateOn5: text })}
                                    maximumValue={5}
                                    minimumValue={1}
                                    step={1}
                                    trackStyle={{ height: 10, backgroundColor: 'transparent' }}
                                    thumbStyle={{ height: 30, width: 30, backgroundColor: 'transparent' }}
                                    thumbProps={{
                                          children: (

                                                <Icon
                                                      name='ellipse'
                                                      type='ionicon'
                                                      color='black'
                                                      size={30}
                                                      containerStyle={{ bottom: 3, right: 5 }}

                                                />

                                          ),
                                    }}
                              />


                              <Input
                                    label="Add Comment and briefly share your experience"
                                    labelStyle={[tw`mt-8 `, { color: "#8f00ff" }]}
                                    keyboardType="default"
                                    onChangeText={(text) => setreview({ ...review, comment: text })}
                                    value={review.comment}
                              />
                        </View>

                        <View style={tw`w-10/12 h-16 bg-red-400 rounded mt-4 items-center mx-auto justify-center`}>
                              <TouchableOpacity disabled={(!review.RateOn5 || !review.comment) ? true : false} onPress={() => {
                                    console.log("dipatch review", review)
                                    
                                          Alert.alert("Hold on!", "Are you sure you want to go back?", [
                                                {
                                                      text: "Cancel",
                                                      onPress: () => null,
                                                      style: "cancel"
                                                },
                                                { text: "YES", onPress: () => BackHandler.exitApp() }
                                          ]);
                                          return true;
                                    

                              }}>
                                    <Text style={tw`text-center font-semibold`}>Submit Review and Exit</Text>

                              </TouchableOpacity>
                        </View>

                        <View style={tw`w-10/12 h-20 mt-8 px-4 bg-indigo-400 items-center mx-auto justify-center`}>
                              <TouchableOpacity disabled={(!review.RateOn5 || !review.comment) ? true : false} onPress={() => {
                                    navigation.navigate("DomainScreen")
                                    console.log("MOve to Domain screnn", review.comment)
                                    // setcancelSmDeal(!)
                              }}>

                                    <Text style={tw`text-center font-semibold`}> Submit Search Serviceman for another work</Text>

                              </TouchableOpacity>
                        </View>

                  </ScrollView>
            </View>
      )
}

export default PostReview

