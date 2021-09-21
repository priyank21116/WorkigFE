import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { StyleSheet, View,ScrollView } from 'react-native'
// import SelectDropdown from 'react-native-select-dropdown'
import tw from 'tailwind-react-native-classnames';
import { TextArea, Center, Text,  Button } from "native-base"

const DomainScreen = ({navigation}) => {
      const [selected, setSelected] = useState(null)

      const domains = ["Electrician", "Plumber", "Carpenter", "Electronic", "Vegitable Vander", "Delivery Assitant", "WasteCollecter", "PhysicalWork"]
      return (
            <View style={[tw` w-full h-full `,{backgroundColor:"#8f00ff"}]}>
            <ScrollView style={tw`w-11/12 mx-auto mt-20 bg-white  rounded-t-3xl`}>
                  <Text style={tw`pt-8 px-8 italic font-semibold text-4xl text-indigo-600`}> Hello !! </Text>
                  <Text style={tw` px-8 pt-1 pb-2 text-lg font-normal`}> Glad to see you here.</Text>
                  <View style={tw` items-center mx-auto mt-1 mb-2 border-gray-400 w-full border rounded`}></View>

                  <Text style={tw`px-8 text-gray-500`}>Got some work to be done? Don't worry</Text>
                  <Text style={tw` px-8 -mb-10 text-gray-400`}>Just tell us what help you need below.</Text>
{/* 
                  <SelectDropdown

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
                        <Text style={tw`pb-3 text-black font-normal`}> Briefly Descibe Your Work below.</Text>
                        {/* <Stack space={8} w="100%" h="%100"> */}
                              <TextArea h={40} placeholder="Write here..." />
                        {/* </Stack> */}
                  </View>
                 
                  <Button
                  style={tw`mx-auto w-8/12 my-10 bg-green-300 h-12 border rounded-xl`}
                  color="#667eea"
                  onPress={() => navigation.navigate('MapScreenC')}
                  title="Serach Servicemans"
                  ><Text>Search Servicemans</Text></Button>
         
            </ScrollView>
            </View>
                  
            
      )
}

export default DomainScreen


