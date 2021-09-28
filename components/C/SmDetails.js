
import React, { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ListItem, Button, Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';
import { Rating } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';



import * as SMS from 'expo-sms';
import * as Linking from 'expo-linking';

import { useDispatch } from 'react-redux';

const SmDetails = ({ navigation }) => {
      const dispatch = useDispatch()
      const [contacted, setcontacted] = useState()
      const [price, setprice] = useState(null)
      const [selcetedSm, setSelectedSm] = useState({
            id: "11maw1",
            name: "Nobita",
            rating: 4.2,
            specilisation: ["Painting,Carpenter"],
            description: " Iam the feet ohg th intereni  Jnjk d nJnj jnnfd dvdfbvd ffdvg fdbv fdbffgera  a a aferebgrebtrb rfbvtrbgnkmkmvdkdvkfngjnf v dsjvnjdsvnjdjvbvn ",
            availseens: "12 Aug 2019",
            review: [{
                  byid: "12344",
                  by: " Nokuhara",
                  rating: 3.5,
                  comment: " Good work done",
                  date: "12 Aug 2101"

            }, {
                  byid: "12554",
                  by: " shinjo",
                  rating: 1,
                  comment: " pathentically done destroy work Aaa a a a a aaaaaaaa   aaaaaa",
                  date: "12 Aug 2101"

            }, {
                  byid: "12994",
                  by: " Yamaguchi",
                  rating: 5,
                  comment: " Excillant he is!! Best work done",
                  date: "12 Aug 2101"

            },
            ],
            photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/21c77039-c68a-4ad9-b6e3-fa31d39a7c4e/d8vtcbc-9f0e08ff-1ab4-43c0-b1f6-9d9347bf95da.png/v1/fill/w_891,h_720,strp/doraemon__nobita_nobi_vector_by_jewel_chanxoxo_d8vtcbc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMjFjNzcwMzktYzY4YS00YWQ5LWI2ZTMtZmEzMWQzOWE3YzRlXC9kOHZ0Y2JjLTlmMGUwOGZmLTFhYjQtNDNjMC1iMWY2LTlkOTM0N2JmOTVkYS5wbmciLCJ3aWR0aCI6Ijw9ODkxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WlZ1FWYRfaSBPD5Rlh8QNOzMHOkzquDj3UTmSa5ev7k"
      })


      const CallServiceman = async () => {

            let result = await Linking.openURL(`tel: ${'6260041022'}`)
            console.log(" :::::::::CALL::::::::::::::::::", result)
      }

      const SendDeatilsinText = async () => {
            const isAvailable = await SMS.isAvailableAsync();
            if (isAvailable) {
                  const { result } = await SMS.sendSMSAsync(["6260041022"], "Hello ! I'm Suresh and my workdomain matches your requiremnts And I'm ready to owrkout your need. I'm accepting request and will contactyou in second")

                  console.log(result)
            } else {
                  Alert.alert("Could not Send message", "We didn't find messaging functionality on your device.Therefor you can not use this feature.Try call out")
            }

      }

      return (
            <ScrollView style={tw`pt-10 pb-20 h-full `}>
            <View>

                  <View style={tw` flex-row `}>
                        <View style={tw`w-36 h-36  m-2 border-2 border-indigo-600 rounded-full`}>
                              <Image
                                    style={tw`w-36 h-36  border-2  rounded-full`}
                                    source={{
                                          uri: selcetedSm.photo,
                                    }} />
                        </View>
                        <View style={tw` mb-4`} >
                              <Text style={tw` px-1  pt-3  tracking-wider text-2xl font-semibold`}>{selcetedSm.name}</Text>
                              <Text style={tw`px-1`}>Work Domains -
                                    {selcetedSm.specilisation?.map(i => (
                                          <ListItem.Subtitle>{` ${i}`}</ListItem.Subtitle>
                                    ))}</Text>
                              <Text style={tw`px-0`}> Member sinces- {selcetedSm.availseens}</Text>
                              <View style={tw` items-center mx-auto mt-4 mb-2 -ml-2 border-indigo-700 w-full border rounded`}></View>


                              <View style={tw`flex-row flex-1 pt-6 -mb-1`}>
                                    <TouchableOpacity onPress={() => CallServiceman()}>
                                          <Icon
                                                style={tw`h-12 p-2 m-4 mt-1 items-center justify-center w-14 rounded-full  border-0 flex-col justify-end   bg-green-500`}
                                                name='call'
                                                type='material-icons'
                                                color='#ffffff'
                                                size={35}
                                          />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => (console.log("hey"))}>
                                          <Icon
                                                style={tw` h-12 p-2 my-4 mt-1 mx-1 items-center justify-center w-14 rounded-full border-0 flex-col justify-end  bg-yellow-500`}

                                                name='chatbubbles-outline'
                                                type='ionicon'
                                                color='#ffffff'
                                                size={35}

                                          />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => SendDeatilsinText()}>
                                          <Icon
                                                style={tw`h-12 p-2 m-4 mt-1 items-center justify-center w-14 rounded-full  border-0 flex-col justify-end  bg-blue-500`}
                                                name='sc-telegram'
                                                type='evilicon'
                                                color='#ffffff'
                                                size={35}

                                          />
                                    </TouchableOpacity>


                              </View>
                        </View>
                  </View>


                  <Text style={tw`bg-green-300  text-gray-600 pl-1 `}>WE Recommend you to set the deal with Serveiceman via Phone</Text>

                  <View style={tw` bg-green-300 items-center mx-auto mb-12 mb-2 border-gray-600 w-full border rounded`}></View>

                  <View style={tw` mt-2`}>
                        <Text style={tw`  pt-1 pl-5   text-xl font-semibold`}>Know him</Text>
                        <Text style={tw`px-3 py-5 mb-4`}>{selcetedSm.description}</Text>

                  </View>

                  <View style={tw` items-center mx-auto mt-1 mb-2 border-gray-100 w-full border rounded`}></View>

                  <View style={tw` mt-4`}>
                        <Text style={tw`  pt-1 pl-5   text-xl font-semibold`}>Reviews</Text>
                        <View style={tw` items-center mx-auto mt-1 mb-1 border-gray-500 w-full border rounded`}></View>
                        {
                              selcetedSm.review?.map(item => (
                                    <View style={tw`mx-2 mt-3 py-2 px-2 border-gray-300 border rounded`}>
                                          <View style={tw`flex-row justify-between`}>
                                                <Text style={tw`px-2 text-lg font-medium`}>{item.by}</Text>
                                                <Rating
                                                      style={tw`py-2 px-8 bg-gray-100`}
                                                      ratingCount={5}
                                                      imageSize={17}
                                                      showRating={false}
                                                      defaultRating={item.rating}

                                                />
                                          </View>
                                          <Text style={tw`px-2 text-base font-normal`}>{item.comment}</Text>
                                          <Text style={tw`px-2 text-sm  text-gray-500 font-normal`}>Posted on- {item.date}</Text>

                                          {/* <View style={tw` px-2  items-center mx-auto mt-1 mb-1 border-gray-200 w-full border rounded`}></View> */}
                                    </View>

                              ))
                        }


                  </View>
                  <View style={tw` w-11/12 mx-auto mb-12 mt-12`}>

                        <Button
                              title="Setted Deal Proceeed Further"
                              buttonStyle={tw`w-10/12 bg-green-300 mx-auto`}

                              onPress={() => setcontacted(!contacted)}
                        />
                        {contacted ? <View>
                              <Input
                                    label="Deal price"
                                    labelStyle={[tw`mt-4 `, { color: "#8f00ff" }]}
                                    keyboardType="default"
                                    onChangeText={(text) => setprice(text)}

                                    value={price}
                              />

                              <Button
                                    title="Confirm Deal"
                                    buttonStyle={tw`w-10/12 bg-blue-400 mx-auto`}
                                    onPress={() => console.log("COnfirm", price)
                                          // dispatch()
                                    }
                              />

                        </View>

                              :
                              <Button
                                    title="Search another"
                                    buttonStyle={tw`w-10/12 bg-red-300 mx-auto`}
                                    //   containerStyle={{color:"#ff4d4d" ,backgroundColor:"#ff4d4d"}}
                                    onPress={() => navigation.navigate('AvailSm')}
                              />}
                  </View>
                  </View>

            </ScrollView>
      )
}

export default SmDetails

const styles = StyleSheet.create({})
