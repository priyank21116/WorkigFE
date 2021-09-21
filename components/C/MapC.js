import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';


const MapC = () => {
      const origin = 120
      // useSelector(selectOrigin);
      const destination = 120
      // useSelector(selectDestination)
      const mapRef = useRef(null)
      const dispatch = useDispatch()

      useEffect(() => {
        if(!origin || !destination) return

      //   Zoom &fir to markers
      mapRef.current.fitToSuppliedMarkers(["origin","destination"],{
            edgePadding:{ top:50, right:50,bottom:50,left:50},
      })

      }, [origin,destination])


      useEffect(() => {
        if(!origin || !destination) return

           const getTravelTime = async()=>{
                 fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
                 .then((res)=> res.json())
                 .then((data)=>{
                       console.log("MAPS __DIATANCE MATRIXA DATA",data)
                       dispatch(setTravelTimeInformation(data.rowa[0].elements[0]));
                 })

           }

           getTravelTime();
      }, [origin,destination,GOOGLE_MAPS_APIKEY])

      return (
            <MapView
            ref={mapRef}
                  style={tw`flex-1 h-1/6`}
                  mapType="mutedStandard"
                  initialRegion={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                  }}
            >


            {origin && destination &&(
                  <MapViewDirections 
                        origin={origin.description}
                        destination={destination.description}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeColor="black"
                        strokeWidth={3}
                  />
            )}

                  {origin?.location && (
                        <Marker
                              coordinate={{
                                    latitude: origin.location.lat,
                                    longitude: origin.location.lng,
                              }}
                              title="Origin"
                              description={origin.description}
                              identifier="origin"
                        />
                  )}

                  {destination?.location && (
                        <Marker
                              coordinate={{
                                    latitude: destination.location.lat,
                                    longitude: destination.location.lng,
                              }}
                              title="Destination"
                              description={destination.description}
                              identifier="destination"
                        />
                  )}
            </MapView>
      )
}

export default MapC

const styles = StyleSheet.create({})