import React, { useState, useEffect, useRef } from 'react'
import { Alert } from 'react-native'
import {  View, ScrollView,  ActivityIndicator } from 'react-native'
import * as Location from 'expo-location';
import tw from 'tailwind-react-native-classnames';
import { TextArea, Text, Button } from "native-base"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

import { useDispatch,useSelector } from 'react-redux';
import { tempCmlive } from '../slices/Cm/CmLivSerSlice';
import { CmPostHelpSearch } from '../slices/Cm/CmLivSerSlice';
import { getSuitableSmbydetails } from '../slices/Cm/CmLivSerSlice';


const DomainScreen = ({ navigation }) => {

      const dispatch = useDispatch()
      const pickerRef = useRef();
      const [moveahead, setmoveahead] = useState(false)
      // const [location, setLocation] = useState(null);
      const [errorMsg, setErrorMsg] = useState(null);
      const [selectedLanguage, setSelectedLanguage] = useState();


const Clientname = useSelector(state => state.CmPer.Name)

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

      const domains = ["Electrician", "Housekeeping", "Security Guard", "Tailor/ Cutting Master", "IT Support", "Plumber", "Legal", "Maid", "Carpenter", "Electronic support", "Home tuitor", "Vegitable Vander", "Nurse", "Cook/ Chef/ Baker", "Driver", "Delivery Assitant", "WasteCollecter", "PhysicalWork"]

      function open() {
            pickerRef.current.focus();
      }

      function close() {
            pickerRef.current.blur();
      }


      return (
            <View style={[tw` w-full h-full `, { backgroundColor: "#8f00ff" }]}>
                  <ScrollView style={tw`w-11/12 mx-auto mt-20 bg-white  rounded-t-3xl`}>
                        <View style={tw`my-12`}>
                              <Text style={tw`pt-8 px-8 italic font-semibold text-4xl text-indigo-600`}>{`Hello  ${Clientname}!!` }</Text>
                              <Text style={tw` px-8 pt-1 pb-2 text-lg font-normal`}> Glad to see you here.</Text>
                              <View style={tw` items-center mx-auto mt-1 mb-2 border-gray-400 w-full border rounded`}></View>

                              <Text style={tw`px-8 text-gray-500`}>Got some work to be done? Don't worry</Text>
                              <Text style={tw` px-8 -mb-10 text-gray-400`}>Just tell us what help you need below.</Text>
                        </View>
                        <View style={tw`w-11/12 h-44  mx-auto my-2`}>
                             
                              <View style={tw`border rounded my-8 `}>
                                    <Picker

                                          itemStyle={tw`border-2`}
                                          ref={pickerRef} 
                                          selectedValue={HelpDetails.helpDomain.toString()}
                                          onValueChange={(e) => setHelpDetails({ ...HelpDetails, helpDomain: e.toString() })}
                                          style={tw`w-full border-2 h-12`}
                                    >

                                          <Picker.Item style={tw`border-b-2 pl-8 ml-4`} label="Select Domain" value="Select Domain" />
                                          <Picker.Item style={tw`border-b-2 rounded pl-8 ml-4`} label="Electrician" value="Electrician" />
                                          <Picker.Item style={tw`border-b-2 rounded pl-8 ml-4`} label="Housekeeping" value="Housekeeping" />
                                          <Picker.Item style={tw`border-b-2 rounded pl-8 ml-4`} label="Security Guard" value="Security Guard" />
                                          <Picker.Item style={tw`border-b-2 rounded pl-8 ml-4`} label="Tailor/ Cutting Master" value="Tailor/ Cutting Master" />
                                          <Picker.Item style={tw`border-b-2 pl-8 ml-4`} label="IT Support" value="IT Support" />
                                          <Picker.Item style={tw`border-b-2 pl-8 ml-4`} label="Plumber" value="Plumber" />
                                          <Picker.Item style={tw`border-b-2 pl-8 ml-4`} label="Legal" value="Legal" />
                                          <Picker.Item style={tw`border-b-2 pl-8 ml-4`} label="Maid" value="Maid" />
                                          <Picker.Item style={tw`border-b-2 pl-8 ml-4`} label="Carpenter" value="Carpenter" />
                                          <Picker.Item style={tw`border-b-2 pl-8 ml-4`} label="Electronic support" value="Electronic support" />
                                          <Picker.Item style={tw`border-b-2 pl-8 ml-4`} label="Home tuitor" value="Home tuitor" />
                                          <Picker.Item style={tw`border-b-2 pl-8 ml-4`} label="Vegitable Vander" value="Vegitable Vander" />
                                          <Picker.Item style={tw`border-b-2 pl-8 ml-4`} label="Nurse" value="Nurse" />
                                          <Picker.Item style={tw`border-b-2 pl-8 ml-4`} label="Cook/ Chef/ Baker" value="Cook/ Chef/ Baker" />
                                          <Picker.Item style={tw`border-b-2 pl-8 ml-4`} label="Driver" value="Driver" />
                                          <Picker.Item style={tw`border-b-2 pl-8 ml-4`} label="Delivery Assitant" value="Delivery Assitant" />
                                          <Picker.Item style={tw`border-b-2 pl-8 ml-4`} label="WasteCollecter" value="WasteCollecter" />
                                          <Picker.Item style={tw`border-b-2 pl-8 ml-4`} label="PhysicalWork" value="PhysicalWork" />

                                    </Picker>

                              </View>

                              <Text style={tw`pb-3 text-black font-normal`}> Briefly Descibe Your Work below.</Text>

                              <TextArea
                                    h={32}
                                   totalLines={3}
                                   fontSize={22}
                                    placeholder="Write here..."
                                    onChangeText={(e) => {
                                          setHelpDetails({ ...HelpDetails, SpecifyHelp: e })
                                    }} />

                        </View>
                        <View style={tw`mt-36 `}>
                              {moveahead ? <Text style={tw`mt-2 mb-0 mx-auto`}> <ActivityIndicator size={70} color="#00ff00" /> </Text> : null}
                              <Button
                                    style={tw`mx-auto w-8/12 mt-20 my-10  h-12 border rounded-xl`}
                                    color="#8f00ff"
                                    onPress={() => {
                                          console.log(HelpDetails)
                                          setmoveahead(true)
                                          
                                          // dispatch(tempCmlive(HelpDetails))
                                          // navigation.navigate('MapScreenC')
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


