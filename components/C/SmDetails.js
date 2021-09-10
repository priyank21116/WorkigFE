import { useAccessibleColors } from 'native-base'
import React, { useState } from 'react'
import { Image } from 'react-native';
import { ScrollView,StyleSheet, Text, View } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';
import { Rating } from 'react-native-elements';


const SmDetails = () => {
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

      return (
            <ScrollView style={tw`pt-10`}>

                  <View style={tw` h-48 flex-row `}>
                        <View style={tw`w-36 h-36  m-2 border-2 border-indigo-600 rounded-full`}>
                              <Image
                                    style={tw`w-36 h-36  border-2 border-indigo-600 rounded-full`}
                                    source={{
                                          uri: selcetedSm.photo,
                                    }} />
                        </View>
                        <View style={tw`h-auto mb-4`} >
                              <Text style={tw` px-1  pt-3  leading-loose tracking-wider text-2xl font-semibold`}>{selcetedSm.name}</Text>
                              <Text style={tw`px-1`}>Work Domains -
                                    {selcetedSm.specilisation?.map(i => (
                                          <ListItem.Subtitle>{` ${i}`}</ListItem.Subtitle>
                                    ))}</Text>
                              <Text style={tw`px-0`}> Member sinces- {selcetedSm.availseens}</Text>
                              <View style={tw` items-center mx-auto mt-4 mb-2 -ml-2 border-indigo-700 w-full border rounded`}></View>


                              <View style={tw`flex-row flex-1  h-auto`}>
                                    <Icon
                                          style={tw`h-12 p-2 m-4 mt-1 items-center justify-items-center w-14 rounded-full order-first border-0 flex-col justify-end   bg-green-500`}
                                          name='call'
                                          type='material-icons'
                                          color='#ffffff'
                                          size={35}
                                    />
                                    <Icon
                                          style={tw` h-12 p-2 my-4 mt-1 mx-1 items-center justify-items-center w-14 rounded-full border-0 flex-col justify-end  bg-yellow-500`}

                                          name='chatbubbles-outline'
                                          type='ionicon'
                                          color='#ffffff'
                                          size={35}

                                    />

                                    <Icon
                                          style={tw`h-12 p-2 m-4 mt-1 items-center justify-items-center w-14 rounded-full order-last border-0 flex-col justify-end  bg-blue-500`}
                                          name='sc-telegram'
                                          type='evilicon'
                                          color='#ffffff'
                                          size={35}

                                    />



                              </View>
                        </View>
                  </View>

                  <View style={tw` bg-green-300 items-center mx-auto -mt-2 mb-2 border-gray-400 w-full border rounded`}></View>

                  <View style={tw`h-auto mt-2`}>
                        <Text style={tw`  pt-1 pl-5   text-xl font-semibold`}>Know him</Text>
                        <Text style={tw`px-3 py-5 mb-4`}>{selcetedSm.description}</Text>

                  </View>

                  <View style={tw` items-center mx-auto mt-1 mb-2 border-gray-00 w-full border rounded`}></View>

                  <View style={tw``}>
                        <Text style={tw`  pt-1 pl-5   text-xl font-semibold`}>Reviews</Text>
                        <View style={tw` items-center mx-auto mt-1 mb-1 border-gray-200 w-full border rounded`}></View>
                        {
                              selcetedSm.review?.map(item => (
                                    <View style={tw`mx-2 border-gray-300 border rounded`}>
                                          <View style={tw`flex-row`}>
                                                <Text style={tw`px-2 text-lg font-medium`}>{item.by}</Text>
                                                <Rating
                                                      style={tw`py-2 px-8 bg-grey-100`}
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
                  <Button
                        title="Search other"
                        onPress={() => console.log('New page')}
                  />
            </ScrollView>
      )
}

export default SmDetails

const styles = StyleSheet.create({})
