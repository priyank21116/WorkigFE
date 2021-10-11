import React, { useState, useEffect } from 'react';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from 'tailwind-react-native-classnames';
import { flex } from 'styled-system';
import { MarkerUnits } from 'react-native-svg';

import { useSelector, useDispatch } from 'react-redux';

export default function MapCurrLoc({ navigation }) {

      const dispatch = useDispatch()

      let pin = {
            // "lat": 23.18517262,
            // "lng": 79.9122236,
            latitude: 23.18517262,
            longitude: 79.9122236,
      }

      // console.log("1")
      // const getloc = async () => {
      //       // console.log("2")
      //       const loc = useSelector((state) => state.CmLivSer.livelocation)
      //       pin = { latitude: loc.lat, longitude: loc.lng }
      //       console.log("INMAP>>>>>", loc)
      // }
      // getloc()

     
      const markers = useSelector((state) => state.CmLivSer.AvailSMSLocation)

   


      return (
            <View style={{ marginTop: 5, flex: 1 }}>

                  <MapView
                        style={tw`w-full h-full`}

                        initialRegion={{
                              ...pin,
                              latitudeDelta: 0.0922,
                              longitudeDelta: 0.0421,
                        }}
                        provider="google"
                  >
                        {/* {markers?.map((marker, index) => (<Marker key={index} coordinate={{latitude: marker.latitude, longitude: marker.longitude}}  ></Marker>))} */}
                        {/* title={marker.title} description={marker.description} */}
                        {/* <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} ></Marker> */}
                        <Marker
                              // draggable
                              coordinate={pin}
                              pinColor="black"

                        // onDragStart={(e) => { console.log("DRAG START", e.nativeEvent) }}
                        // onDragEnd={(e) => {
                        //       console.log("DRAG END", e.nativeEvent)
                        //       setpin({
                        //             latitude: e.nativeEvent.coordinate.latitude,
                        //             longitude: e.nativeEvent.coordinate.longitude,
                        //       })
                        // }}
                        >
                              <Callout>
                                    {/* <View style={tw`w-20 h-16 bg-indigo-200`}> */}
                                    <Text>TutU HERE</Text>
                                    {/* </View> */}
                              </Callout>
                        </Marker>
                        {/* <Circle center={pin}
                              radius={1000}
                        /> */}
                  </MapView>
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
      },
      map: {
            // width: Dimensions.get('window').width,
            // height: Dimensions.get('window').height,
      },
});