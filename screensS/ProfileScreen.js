import React,{useEffect} from 'react'
import { Image, StyleSheet,ScrollView, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-elements/dist/buttons/Button';

import { useDispatch,useSelector } from 'react-redux';
import { ARTgetMyDetail } from '../slices/Sm/SmPerSlice';

const ProDeatils = {
      "_id": "613c79051426453b08500958",
      "review": [],
      "phone": 8085879544,
      "about": "Elctrician",
      "adharNo": 123345321,
      "email": "priyank21116@gmail.com",
      "emergencyPhone": 1111111111,
      "name": "Priyank",
      "residencial": {
            "Rad1": "ashoka",
            "Rad2": "cedavdsv",
            "Rlandmark": "vfdsv",
            "Rpin": 893456,
            "Rcity": "jablpru", "Rstate": "mp"
      },
      "workplace": {
            "ad1w": "mcdsknvckd",
            "landmarkw": "cfdsvfdv",
            "pincodew": "122334"
      }
}

const {name,email,emergencyPhone,about,adharNo,phone,review,residencial,workplace}= ProDeatils;
const {Rad1,Rad2,Rcity,Rpin,Rlandmark,Rstate}=residencial;
const {ad1w,landmarkw,pincodew} =workplace

const ProfileScreen = ({navigation}) => {

      const dispatch = useDispatch()
      
      useEffect(() => {
       dispatch(ARTgetMyDetail())   
      }, [])
      
     const state = useSelector(state => state.SmPer.state)
     
      return (
            <View style={tw`w-full p-6 `}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={tw`pt-16 items-center pb-4 px-16 justify-center   m-2 `}>
                              <Image
                                    style={tw`w-52 h-48 pt-16 m-2 border-2  rounded-full`}
                                    source={{
                                          uri: "https://i.pinimg.com/originals/15/f5/6a/15f56a0eb0e2e138702d9ec3bbafadf3.png",
                                    }} />
                        </View>
                        <Text style={tw`border-b text-center text-3xl mx-auto justify-center w-11/12 items-center mx-auto`}>
                              {name}
                        </Text>
                        <Text style={tw`border-b pb-6 border-b text-center text-lg justify-center w-full items-center mx-auto`}>
                       
                              {about}
                        </Text>


                        <View style={tw`border-b h-14 w-full items-center px-4  mx-auto flex-row justify-between`}>
                              <Text style={tw` font-bold text-xl`}>Mobile no.</Text>
                              <Text style={tw`text-base font-semibold`}>{phone}</Text>
                        </View>
                        <View style={tw`border-b h-14 w-full items-center px-4  mx-auto flex-row justify-between`}>
                              <Text style={tw`font-bold text-xl`}>Email </Text>
                              <Text style={tw`text-base font-semibold`}>{email}</Text>
                        </View>
                        <View style={tw`border-b h-14 w-full items-center px-4  mx-auto flex-row justify-between`}>
                              <Text style={tw`font-bold text-xl`}>Argent Contact</Text>
                              <Text style={tw`text-base font-semibold`}>{emergencyPhone}</Text>
                        </View>

                        <View style={tw`border-b  w-full  px-4 pt-4 `}>
                              <Text style={tw`font-bold text-xl`} >Residencial Address</Text>
                              
                              <Text style={tw`text-base font-semibold mb-4 pb-4`}>{Rad1+", "+Rad2+", "+Rlandmark+", "+Rcity+", "+Rpin}</Text>
                        </View>
                        <View style={tw`border-b w-full  px-4 pb-28 pt-4`}>
                              <Text style={tw`font-bold text-xl`} >WOrkplace Address</Text>
                              <Text style={tw``}>{ad1w+", "+pincodew+", "+landmarkw}</Text>
                        </View>

                        <Button
                              style={tw`w-6/12  items-center justify-center  `}
                              buttonStyle={tw`w-60 bg-purple-600 mx-auto`}
                              onPress={ async () => {
                                    await dispatch(logout)
                                    navigation.navigate('HomeScreen')
                              }}
                              title="Contiune"
                        />

                  </ScrollView>

            </View>
      )
}

export default ProfileScreen

const styles = StyleSheet.create({})
