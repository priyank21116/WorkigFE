import React, { useState } from 'react';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from 'tailwind-react-native-classnames';
import { flex } from 'styled-system';


export default function MapCurrLoc({ navigation }) {
      const [pin, setpin] = useState({
            latitude: 37.78825,
            longitude: -122.4324,
      })
      const [region, setregion] = useState({
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
      })
      return (
            <View style={{ marginTop: 20, flex: 1 }}>
                  


                        <GooglePlacesAutocomplete

                              placeholder='Search'
                              fetchDetails={true}
                              GooglePlacesSearchQuery={{
                                    rankby: "distance"
                              }}
                              onPress={(data, details = null) => {
                                    // 'details' is provided when fetchDetails = true
                                    console.log(data, details);
                                    setregion({
                                          latitude: details.geometry.location.lat.toString,
                                          longitude: details.geometry.location.lng,
                                          latitudeDelta: 0.0922,
                                          longitudeDelta: 0.0421,
                                    })
                              }}
                              query={{
                                    key: 'AIzaSyD2oqIHk_IQpkXaPRD5KoVITz9Z6k-Db80',
                                    language: 'en',
                                    // components: "country:us",
                                    // types: "establishment",
                                    // radius: 30000,
                                    // location: `${region.latitude},${region.longitude}`
                              }}
                              styles={
                                    {
                                          container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
                                          listView: { backgroundColor: "pink" }

                                    }
                              }
                        />
                  
                  <MapView
                        style={styles.map}
                        initialRegion={{
                              latitude: 37.78825,
                              longitude: -122.4324,
                              latitudeDelta: 0.0922,
                              longitudeDelta: 0.0421,
                        }}
                        provider="google"
                  >
                  <Marker coordinate={{latitude:region.latitude ,longitude:region.longitude}} ></Marker>
                        <Marker coordinate={pin}
                              pinColor="black"
                              draggable
                              onDragStart={(e) => { console.log("DRAG START", e.nativeEvent) }}
                              onDragEnd={(e) => {
                                    console.log("DRAG END", e.nativeEvent)
                                    setpin({
                                          latitude: e.nativeEvent.coordinate.latitude,
                                          longitude: e.nativeEvent.coordinate.longitude,
                                    })
                              }}
                        >
                              <Callout>
                                    <Text>TutU HERE</Text>
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
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
      },
});