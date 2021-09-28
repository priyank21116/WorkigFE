import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
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
            <View style={tw`bg-indigo-400 w-full px-8 pb-12 h-full`}>
                  <ScrollView style={tw`bg-gray-50 border rounded-t-xl px-4   mt-20 mx-auto  w-11/12 h-full`}>

                        <Text style={tw`text-2xl mt-12 mb-8 font-bold`}>Review Service</Text>

                        <Slider
                              value={review.RateOn5}
                              onValueChange={(text) => setreview({ ...review, RateOn5: text })}
                              maximumValue={5}
                              minimumValue={1}
                              step={1}
                              trackStyle={{ height: 10, backgroundColor: 'transparent' }}
                              thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
                        />


                        <Input
                              label="Add Comment and briefly share your experience"
                              labelStyle={[tw`mt-4 `, { color: "#8f00ff" }]}
                              keyboardType="default"
                              onChangeText={(text) => setreview({ ...review, comment: text })}

                              value={review.comment}
                        />


                        <View style={tw`w-10/12 h-16 bg-blue-500 mt-4 items-center mx-auto justify-center`}>
                              <TouchableOpacity disabled={(!review.RateOn5 || !review.comment) ? true : false} onPress={() => {
                                    console.log("dipatch review",review)

                              }}>
                                   
                                          <Text>Submit Review and Exit</Text>
                                   
                              </TouchableOpacity>
                        </View>

                        <View style={tw`w-10/12 h-20 mt-8 bg-indigo-500 items-center mx-auto justify-center`}>
                              <TouchableOpacity onPress={() => {
                                    navigation.navigate("DomainScreen")
                                    console.log("MOve to Domain screnn",review.comment)
                                    // setcancelSmDeal(!)
                              }}>
                                    
                                          <Text>Search Serviceman for another work</Text>
                                    
                              </TouchableOpacity>
                        </View>

                  </ScrollView>
            </View>
      )
}

export default PostReview

