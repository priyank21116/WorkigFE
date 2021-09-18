import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const NewworkCard = ({ items, acceptWork, discussOnCall, locattteOnmap, getdetailONChat, rejectWork }) => {


      const {  by, location, address, WorkDomain, Workdescription, Clientrating,photo } = items;

    
      return (
            <View style={tw`w-full border-2  mx-auto bg-white my-8 rounded-xl flex-col justify-between  py-6 overflow-hidden`}>
                  {/* top */}
                  
                        <View style={tw` h-48 flex-row `}>
                              <View style={tw`w-28 h-28  m-2 border-2 border-indigo-600 rounded-full`}>
                                    <Image
                                          style={tw`w-28 h-28  border-2 border-indigo-600 rounded-full`}
                                          source={{
                                                uri:photo,
                                          }} />
                              </View>
                              <View style={tw` mb-4`} >
                                    <Text style={tw` px-1  pt-3  tracking-wider text-2xl font-semibold`}>{by}</Text>
                                    <Text style={tw`px-1`}>{`Workdomain--- ${WorkDomain}`} </Text>
                                    <Text style={tw`px-0`}> {`Time Posted --- ${"now"}`}</Text>
                                    <Text style={tw`px-0`}> {`Rating --- ${Clientrating} /5`}</Text>

                                    <View style={tw` items-center mx-auto mt-4 mb-2 -ml-2 border-indigo-700 w-full border rounded`}></View>


                                    <View style={tw`flex-row flex-1  `}>
                                    <TouchableOpacity  onPress={()=>discussOnCall()}>
                                          <Icon
                                                style={tw`h-12 p-2 m-3 mt-1 items-center  w-12 rounded-full  border-0 flex-col justify-end   bg-green-500`}
                                                name='call'
                                                type='material-icons'
                                                color='#ffffff'
                                                size={35}
                                          />
                                          </TouchableOpacity>
                                          <TouchableOpacity onPress={()=>getdetailONChat()}>
                                          <Icon
                                                style={tw` h-12 p-2 my-4 mt-1 mx-1 items-center justify-center w-12 rounded-full border-0 flex-col justify-end  bg-yellow-500`}

                                                name='chatbubbles-outline'
                                                type='ionicon'
                                                color='#ffffff'
                                                size={35}

                                          />
                                          </TouchableOpacity>
                                          <TouchableOpacity onPress={()=>locattteOnmap()} >
                                         
                                          <Icon
                                                style={tw`h-12 p-2 m-4 mt-1 items-center justify-center w-12 rounded-full  border-0 flex-col justify-end  bg-blue-500`}
                                                name='location-outline'
                                                type='ionicon'
                                                color='#ffffff'
                                                size={35}

                                          />
                                           </TouchableOpacity>

                                           


                                    </View>
                                    

                             
                        </View>

                  </View>
                  <View style={tw` items-center mx-auto mt-4 mb-2 -ml-2 border-indigo-700 w-full border rounded`}></View>
                  <Text style={tw` px-1  pt-3 mx-6 tracking-wider text-xl font-semibold`}>Address -</Text>
                  <Text style={tw` px-1  pt-1 mx-6 tracking-wider text-base font-semibold`}>{address}</Text>

                  <View style={tw` items-center mx-auto mt-3 mb-2 -ml-2 border-indigo-700 w-full border rounded`}></View>

                  <Text style={tw` px-1  pt-3 mx-6 tracking-wider text-xl font-semibold`}>Work Description -</Text>
                  <Text style={tw` px-1  pt-1 mx-6 tracking-wider text-base font-semibold`}>{Workdescription}</Text>

                  <View style={tw` items-center mx-auto mt-4 mb-2 -ml-2 border-indigo-700 w-full border rounded`}></View>
                  
                  <View>

                  </View>
                  {/* bottom */}
                  <View style={tw` flex-row border-r border-gray-400`}>
                        <TouchableOpacity onPress={() => acceptWork()} style={tw`w-1/2 h-16 -mb-8 -mt-2  bg-green-500 justify-center text-white items-center border-r border-black`}>
                              <Text> Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => rejectWork()} style={tw`w-1/2 h-16 -mb-8 -mt-2 text-red-500 justify-center items-center`}>
                              <Text> Reject</Text>
                        </TouchableOpacity>
                  </View>

            </View>
      )
}

export default NewworkCard

const styles = StyleSheet.create({})
