import React, { useState, useEffect ,useRef } from 'react'
import { Text, View, TouchableOpacity, Platform,ScrollView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Button, Icon } from 'react-native-elements'
// import SelectDropdown from 'react-native-select-dropdown'
import { TextArea } from "native-base"
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useDispatch, useSelector } from 'react-redux';
import { tempSmlive } from '../slices/Sm/SmLivSeSlice';
import { SmPostWOrkSearch } from '../slices/Sm/SmLivSeSlice';

const MapScreenS = ({ navigation }) => {

      // const result = AsyncStorage.getItem('token')

      // console.log(" 5  Async storage::::::::::;",result)

      const dispatch = useDispatch()
      const mapRef = useRef(null)

      const [selected, setSelected] = useState("")

      // const [pin, setpin] = useState({
      //       latitude: 37.78825,
      //       longitude: -122.4324,
      // })
 
      let [locationDetails,setlocationDetails]=useState({
            latitude: 37.78825,
            longitude: -122.4324,
      })
      const [domain, setdomain] = useState({
            Domain: ""
      })
      useEffect(() => {
            RenderMap()

      }, [locationDetails])



      useEffect(() => {
            (async () => {
                  let { status } = await Location.requestForegroundPermissionsAsync();
                  if (status !== 'granted') {
                        setErrorMsg('Permission to access location was denied');
                        Alert.alert("Allow location access ,its neccesary to proceed further")
                        return;
                  }
 
                  let location = await Location.getLastKnownPositionAsync({});
                  console.log("11:::::::SM LOCATION::::::::::", location)

                  // setLocation(location);
                  setlocationDetails({ latitude: location.coords.latitude, longitude: location.coords.longitude })
                  console.log("22:::::::SM LOCATION::::::::::", location)
            })();
      }, []);



      const domains = ["Electrician", "Plumber", "Carpenter", "Electronic", "Vegitable Vander", "Delivery Assitant", "WasteCollecter", "PhysicalWork"]




const RenderMap=()=>{
      return(
            <MapView
            style={tw`w-full h-full`}
            ref={mapRef}
            initialRegion={{
                 ... locationDetails,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
            }}
            provider="google"
      >
            <Marker

                  coordinate={
                       locationDetails
                  }
                  pinColor="black"


            >
                  <Callout>
                        <View style={tw`w-20 h-16 bg-indigo-200`}>
                              <Text>TutU HERE</Text>
                        </View>
                  </Callout>
            </Marker>
      </MapView>
      )
}







      return (

            <View style={tw`h-full  bg-indigo-500 w-full`}>

                  <View style={[tw`h-3/6 items-center justify-center  w-full`, { backgroundColor: "#8f00ff" }]}>


                        <View style={tw`h-12 w-12 border rounded-full absolute items-center overflow-hidden bg-red-400 justify-center left-6 top-6`}>
                              <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} >

                                    <Icon
                                          style={tw`h-24 w-24 -mt-10 p-2  items-center justify-center  rounded-full  border-0 flex-col justify-end  bg-indigo-300`}
                                          name='person-circle-outline'
                                          type='ionicon'
                                          color='#ffffff'
                                          size={35}

                                    />
                              </TouchableOpacity>
                        </View>
                        {/* {console.log("HERE>>>>",locationDetails)} */}
                     
<RenderMap />
                  </View>

                  <ScrollView style={tw`h-3/6 bg-gray-100 w-full border-t-8 border-indigo-500 rounded-t-3xl   z-0`}>
                        <View>
                              <View>


                                    <Text style={[tw`pt-8 px-8 italic font-semibold text-4xl text-indigo-600`, { color: "#8f00ff" }]}> Hello !! shizuka</Text>
                                    <Text style={tw` px-8 pt-1 pb-2 text-lg font-normal`}> Glad to see you here.</Text>
                                    <View style={tw` items-center mx-auto mt-1 mb-2 border-gray-400 w-full border rounded`}></View>

                                    <Text style={tw`px-8 text-gray-500`}>Want us to start hunting work for you !</Text>
                                    <Text style={tw` px-8 -mb-10 text-gray-400`}>Selct the domain and activate yourself</Text>
                              </View>
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
                                    <Text style={tw`pb-3 text-lg text-black font-normal`}> Briefly describe of what you want to do.</Text>
                                    {/* <Stack space={8} w="100%" h="%100"> */}
                                    <TextArea h={40} placeholder="Write here..." onChangeText={(e) => {setdomain({ Domain :e})}}
                                    />
                                    {/* </Stack>  */}
                              </View>
                              <View style={tw`my-12`}>

                              <Button
                                    style={tw`mx-auto w-8/12 my-10 bg-green-300 h-12 border rounded-xl`}
                                    color="#667eea"
                                    onPress={() => {
                                          // console.log("SM FINAL WORK DETAILS:::::::::::::::::", {...locationDetails,...domain})
                                          dispatch(SmPostWOrkSearch({...locationDetails,...domain}))
                                          navigation.navigate('NewWorkCame')
                                    }}
                                    title="Serach Servicemans"
                              ><Text>Activate myself for Work</Text></Button>
                        </View>
                  </View>



            </ScrollView>
            </View >
      )
}

export default MapScreenS


