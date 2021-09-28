import React, { useState, useEffect } from 'react'
import { Alert, TextInput } from 'react-native'
import { StyleSheet, View, ScrollView, Platform, ActivityIndicator } from 'react-native'
import * as Location from 'expo-location';
// import SelectDropdown from 'react-native-select-dropdown'
import tw from 'tailwind-react-native-classnames';
import { TextArea, Center, Text, Button } from "native-base"

import { useDispatch } from 'react-redux';
import { Input } from 'react-native-elements/dist/input/Input';
import { tempCmlive } from '../slices/Cm/CmLivSerSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useSelector } from 'react-redux';
import { CmPostHelpSearch } from '../slices/Cm/CmLivSerSlice';
import { getSuitableSmbydetails } from '../slices/Cm/CmLivSerSlice';

const DomainScreen = ({ navigation }) => {

      const dispatch = useDispatch()

      const [moveahead, setmoveahead] = useState(false)
      // const [location, setLocation] = useState(null);
      const [errorMsg, setErrorMsg] = useState(null);
      const [HelpDetails, setHelpDetails] = useState({
            lat: Number,
            lng: Number,
            helpDomain: String,
            SpecifyHelp: String,
      })

      const getTokenASYNC = async () => {
            try {

                  const value = await AsyncStorage.getItem('Ctoken')
                  console.log("getTokenASYNC", value)
            } catch (e) {
                  console.log("getTokenASYNC", e)
            }
      }
      getTokenASYNC()


      // tempCmlive

      useEffect(() => {
            (async () => {

                  let { status } = await Location.requestForegroundPermissionsAsync();
                 
                  if (status !== 'granted') {
                        setErrorMsg('Permission to access location was denied');
                        Alert.alert("Allow location access ,its neccesary to proceed further")
                        return;
                  }

                  let location = await Location.getLastKnownPositionAsync({});
                  console.log(":::::::MY LOCATION::::::::::", location)
                  // setLocationn(location);
                  setHelpDetails({ ...HelpDetails, lat: location.coords.latitude, lng: location.coords.longitude })

            })();
      }, []);

      // let text = 'Waiting..';
      // if (errorMsg) {
      //       text = errorMsg;
      // } else if (location) {
      //       text = JSON.stringify(location);
      // }

      const domains = ["Electrician", "Plumber", "Carpenter", "Electronic", "Vegitable Vander", "Delivery Assitant", "WasteCollecter", "PhysicalWork"]

      // const OntextChange = (e) => {
      //       console.log("Event", e)
      //       let key = e.target.value
      //       let value = e.target.value
      //       setHelpDetails({ ...HelpDetails, [key]: value })
      // }


      return (
            <View style={[tw` w-full h-full `, { backgroundColor: "#8f00ff" }]}>
                  <ScrollView style={tw`w-11/12 mx-auto mt-20 bg-white  rounded-t-3xl`}>
                        <View style={tw`my-12`}>
                              <Text style={tw`pt-8 px-8 italic font-semibold text-4xl text-indigo-600`}> Hello !! </Text>
                              <Text style={tw` px-8 pt-1 pb-2 text-lg font-normal`}> Glad to see you here.</Text>
                              <View style={tw` items-center mx-auto mt-1 mb-2 border-gray-400 w-full border rounded`}></View>

                              <Text style={tw`px-8 text-gray-500`}>Got some work to be done? Don't worry</Text>
                              <Text style={tw` px-8 -mb-10 text-gray-400`}>Just tell us what help you need below.</Text>
                        </View>
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
                        

                              <View style={tw`w-11/12 h-44 mx-auto my-2`}>
                                    <Input
                                          label="Write Help Domain"
                                          keyboardType="default"
                                          onChangeText={(e) => setHelpDetails({ ...HelpDetails, helpDomain: e.toString() })}
                                          name="helpDomain"
                                    // value={HelpDetails.helpDomain.toString() }
                                    />
                                    <Text style={tw`pb-3 text-black font-normal`}> Briefly Descibe Your Work below.</Text>
                                    {/* <Stack space={8} w="100%" h="%100"> */}
                                    <TextArea h={40} placeholder="Write here..." onChangeText={(e) => {
                                          setHelpDetails({ ...HelpDetails, SpecifyHelp: e })
                                    }} />
                                    {/* </Stack> */}
                              </View>
                              <View style={tw`mt-24 `}>
                                    {moveahead ?<Text style={tw`mt-2 mb-12`}> <ActivityIndicator size="large" color="#00ff00" /> </Text>: null}
                                    <Button
                                          style={tw`mx-auto w-8/12 mt-20 my-10  h-12 border rounded-xl`}
                                          color="#8f00ff"
                                          onPress={() => {
                                                setmoveahead(true)
                                                dispatch(CmPostHelpSearch(HelpDetails))
                                                      .unwrap()
                                                      .then(() => {
                                                          
                                                            navigation.navigate('MapScreenC')
                                                      })
                                                      .catch((rejectedValueOrSerializedError) => {
                                                            console.log("ERROR in CCCCM Domain SET", rejectedValueOrSerializedError)
                                                      })

                                          }}

                                    ><Text style=" font-bold text-2xl">{!moveahead ? "Serach Servicemans" : "Searching Write around you"} </Text></Button>
                              </View>
                        </ScrollView>

            </View>


      )
}

export default DomainScreen


