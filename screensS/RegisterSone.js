import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native'
import * as yup from 'yup';
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';

import { useDispatch, useSelector } from 'react-redux';

import { SMaddRegisteroneDetails } from '../slices/Sm/SmPerSlice';
import { Icon } from 'react-native-elements/dist/icons/Icon';

import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions'

import { patchProfileImage,patchValidateImage } from '../slices/Sm/SmPerSlice';

const arr1 = {
      name: "",
      email: "",
      emergencyPhone: 0,
      about: "",
      ad1w: "",
      landmarkw: "",
      pincodew: 0,
      // image: "",

}

const RegisterValidationSchema = yup.object({

      email: yup.string().required('Email is required').email(),
      emergencyPhone: yup.number().required('Mobile No is required').positive().integer(),
      pincodew: yup.number().positive().required('This field is required'),
      name: yup.string().required('Enter Name'),
      ad1w: yup.string().required('This field is required'),
      landmarkw: yup.string().required('This field is required')

});



const RegisterSone = ({ navigation }) => {

      const dispatch = useDispatch();




      const pickFromGallery = async () => {
            console.log("jhrerdtfcghv:::::::::::;")
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status==="granted") {
                  let data = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                        allowsEditing: true,
                        aspect: [1, 1],
                        quality: 0.4
                  })
                  if(!data.cancelled){
                        let newfile = {uri:data.uri , 
                              type:`test/${data.uri.split(".")[1]}` ,
                              name:`test.${data.uri.split(".")[1]}`}
                        handleUpload(newfile)
                  }

                  console.log("Gallery",data)
                  const proimg=".....png"
                  dispatch(patchProfileImage(proimg))
            } else {
                  Alert.alert("Gallery access is neccesary to get your image")
            }
      }

      const photofromCamers = async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status ==='granted') {
                  let data = await ImagePicker.launchCameraAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                        allowsEditing: true,
                        aspect: [1, 1],
                        quality: 0.4
                  })

                  console.log("CAMERA",data)
                  if(!data.cancelled){
                        let newfile = {uri:data.uri , 
                              type:`test/${data.uri.split(".")[1]}` ,
                              name:`test.${data.uri.split(".")[1]}`}
                        handleUpload(newfile)
                  }
                  const valiImg=".....png"
                  
                  dispatch(patchValidateImage(valiImg))
            } else {
                  Alert.alert("Camera access is neccesary to get your image")
            }
      }


      const handleUpload =(image)=>{

      }



      const OnsubmitFormone = (values) => {
            
            // dispatch(SMaddRegisteroneDetails(values))
            // console.log("2222222222222222222",values)
            
            navigation.navigate('RegisterStwo')
      }

      return (
            <Formik
                  initialValues={arr1}
                  validateOnMount={true}
                  onSubmit={values => OnsubmitFormone(values)}
                  validationSchema={RegisterValidationSchema}
            >
                  {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (

                        <View style={tw`bg-indigo-400 w-full `}>

                              <ScrollView scrollsToTop showsVerticalScrollIndicator={false} style={tw`bg-gray-50 border rounded-t-xl  mt-20 mx-auto  w-11/12`}>
                                    <KeyboardAvoidingView

                                          keyboardVerticalOffset={50}
                                          behavior={'padding'}>
                                          <View style={tw` mt-16 px-6`}>


                                                <Input
                                          
                                                      label="Name"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('name')}
                                                      onBlur={handleBlur('name')}
                                                      value={values.name}
                                                />
                                                {(errors.name && touched.name) ? <Text style={tw`text-sm text-red-500 mt-1  italic font-semibold`}>{errors.name}</Text> : null}
                                                <Input
                                                      label="Email"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="email-address"
                                                      onChangeText={handleChange('email')}
                                                      onBlur={handleBlur('email')}
                                                      value={values.email}
                                                />
                                                {(errors.email && touched.email) ? <Text style={tw`text-sm text-red-500 mt-1 italic font-semibold`}>{errors.email}</Text> : null}

                                                <Input
                                                      label="Alternate mobile no."
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="number-pad"
                                                      onChangeText={handleChange('emergencyPhone')}
                                                      onBlur={handleBlur('emergencyPhone')}
                                                      value={values.emergencyPhone.toString()}
                                                />
                                                {(errors.emergencyPhone && touched.emergencyPhone) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.emergencyPhone}</Text> : null}

                                                <View style={tw` mb-12 w-full   flex-row py-4`}>
                                                      <View style={tw` mx-auto w-36    `}>
                                                            <TouchableOpacity onPress={()=>pickFromGallery()}>
                                                                  <View style={[tw`border-2 h-44  rounded-xl justify-center items-center  border-dashed border-gray-400 bg-gray-100`]}>


                                                                        <Icon
                                                                              // raised

                                                                              name='image-outline'
                                                                              type='ionicon'
                                                                              color='#A9A9A9'
                                                                              size={40}

                                                                        />


                                                                  </View>
                                                            </TouchableOpacity>
                                                            <Text style={tw`  text-xs italic font-light text-gray-600`}>- Choose any of your Image from Gallery </Text>
                                                            <Text style={tw`  text-xs italic font-light text-gray-600`}>- This photo will be shown in your public profile. That means this would be visilbe to everyone </Text>


                                                      </View>
                                                      <View style={tw` mx-auto w-36   `}>
                                                            <TouchableOpacity onPress={()=>photofromCamers()}>
                                                                  <View style={[tw` border-dashed border-2  rounded-xl h-44 justify-center items-center   border-gray-400  bg-gray-100`]}>

                                                                        <Icon
                                                                              // raised
                                                                              name='camera'
                                                                              type='ionicon'
                                                                              color='#A9A9A9'
                                                                              size={36}

                                                                        />

                                                                  </View>
                                                            </TouchableOpacity>
                                                            <Text style={tw`text-xs  italic font-light text-gray-600`}>- Click your currnt picture through camera </Text>
                                                            <Text style={tw` text-xs italic font-light text-gray-600`}>- This picture is just for validation purpose.This will not be shown or visible to anyone . </Text>


                                                      </View>
                                                </View>

                                                <Text style={tw`font-semibold text-gray-500 text-xl`}> Work Place Address</Text>
                                                <Text style={tw`font-normal text-base text-gray-300 pb-5 w-9/12 border-b border-gray-200 w-full mb-6`}>Write residential if dont have one</Text>
                                                <Input
                                                      label="Workplace address"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('ad1w')}
                                                      onBlur={handleBlur('ad1w')}
                                                      value={values.ad1w}
                                                />
                                                {(errors.ad1w && touched.ad1w) ? <Text style={tw`text-sm text-red-500   italic font-semibold`}>{errors.ad1w}</Text> : null}

                                                <Input
                                                      label="WP landmark"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('landmarkw')}
                                                      onBlur={handleBlur('landmarkw')}
                                                      value={values.landmarkw}
                                                />
                                                {(errors.landmarkw && touched.landmarkw) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.landmarkw}</Text> : null}

                                                <Input
                                                      label="WP Zip code"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="number-pad"
                                                      onChangeText={handleChange('pincodew')}
                                                      onBlur={handleBlur('pincodew')}
                                                      value={values.pincodew.toString()}
                                                />
                                                {(errors.pincodew && touched.pincodew) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.pincodew}</Text> : null}




                                                <TextInput

                                                      style={tw`border mt-6 text-base rounded-xl w-full h-24 py-4 px-4`}
                                                      onChangeText={handleChange('about')}
                                                      value={values.about}
                                                      placeholder="Briefly describe what you do best .."
                                                      keyboardType="default"
                                                      multiline={true}
                                                      textAlignVertical="top"
                                                />
                                          </View>



                                          <Button
                                                style={tw`w-6/12 `}
                                                buttonStyle={tw`w-8/12 bg-indigo-400 mx-auto mt-12 mb-16`}
                                                title="Nexttti"
                                                onPress={handleSubmit}

                                          />

                                    </KeyboardAvoidingView>

                              </ScrollView>
                        </View>
                  )}

            </Formik>
      )
}


export default RegisterSone


