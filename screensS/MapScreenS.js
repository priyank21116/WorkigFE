import React, { useState } from 'react'
import {Text, View, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Button, Icon } from 'react-native-elements'
// import SelectDropdown from 'react-native-select-dropdown'
import { TextArea } from "native-base"



const MapScreenS = ({ navigation }) => {
      
      const domains = ["Electrician", "Plumber", "Carpenter", "Electronic", "Vegitable Vander", "Delivery Assitant", "WasteCollecter", "PhysicalWork"]
      const [selected, setSelected] = useState("Electrician")

      return (
              
            <View style={tw` h-screen bg-indigo-500 w-full`}>

                  <View style={[tw`h-2/6 items-center justify-center  w-full`, { backgroundColor: "#8f00ff" }]}>


                        <View style={tw`h-12 w-12 border rounded-full absolute items-center overflow-hidden bg-red-400 justify-center left-6 top-6`}>
                              <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} >

                                    <Icon
                                          style={tw`h-24 w-24 -mt-10 p-2  items-center justify-items-center  rounded-full order-last border-0 flex-col justify-end  bg-violet-300`}
                                          name='person-circle-outline'
                                          type='ionicon'
                                          color='#ffffff'
                                          size={35}

                                    />
                              </TouchableOpacity>
                        </View>
                        <Text style={tw`text-blue-600 `}> MAP HERE</Text>
                        {/* <MapC /> */}
                  </View>

                  <View style={tw`h-4/6 bg-gray-100 w-full border-t-8 border-indigo-500 rounded-t-3xl   z-0`}>
                        <View>
                              <Text style={[tw`pt-8 px-8 italic font-semibold text-4xl text-indigo-600`, { color: "#8f00ff" }]}> Hello !! shizuka</Text>
                              <Text style={tw` px-8 pt-1 pb-2 text-lg font-normal`}> Glad to see you here.</Text>
                              <View style={tw` items-center mx-auto mt-1 mb-2 border-gray-400 w-full border rounded`}></View>

                              <Text style={tw`px-8 text-gray-500`}>Want us to start hunting work for you !</Text>
                              <Text style={tw` px-8 -mb-10 text-gray-400`}>Selct the domain and activate yourself</Text>

                              {/* <SelectDropdown

                                    data={domains}
                                    onSelect={(selectedItem, index) => {
                                          setSelected(selectedItem)
                                    }}
                                    defaultButtonText="Which Domain best describe Your Work"

                                    buttonTextAfterSelection={(selectedItem, index) => {
                                          // text represented after item is selected
                                          // if data array is an array of objects then return selectedItem.property to render after item is selected
                                          return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                          // text represented for each item in dropdown
                                          // if data array is an array of objects then return item.property to represent item in dropdown
                                          return item
                                    }}
                                    buttonStyle={tw` w-11/12 mt-20 mb-8 mx-auto  rounded-md border`}
                                    dropdownIconPosition='left'

                              >
                                    {selected && <Text>{selected}</Text>}
                              </SelectDropdown> */}


                              <View style={tw`w-11/12 h-44 mx-auto`}>
                                    <Text style={tw`pb-3 text-md text-black font-normal`}> Briefly describe of what you want to do.</Text>
                                    {/* <Stack space={8} w="100%" h="%100"> */}
                                          <TextArea h={40} placeholder="Write here..." />
                                    {/* </Stack>  */}
                              </View>

                              <Button
                                    style={tw`mx-auto w-8/12 my-10 bg-green-300 h-12 border rounded-xl`}
                                    color="#667eea"
                                    onPress={() => navigation.navigate('NewWorkCame')}
                                    title="Serach Servicemans"
                              ><Text>Activate myself for Work</Text></Button>

                        </View>



                  </View>
            </View>
      )
}

export default MapScreenS


