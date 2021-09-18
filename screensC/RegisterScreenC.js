import React, { useState, useEffect } from 'react'
import {  View, Text, SafeAreaView } from 'react-native'
import { Icon } from 'react-native-elements'

import tw from 'tailwind-react-native-classnames';
import * as yup from 'yup';
import { Formik } from 'formik';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';


import { CMARTpatchFullregister } from '../slices/CmPerSlice';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';

import { useSelector, useDispatch } from 'react-redux';

const registerC = {
      Name: "",
      email: "",
      emergencyNo: 0,
      password: "",
      confirmPassword: "",
      ad1: "",
      ad2: "",
      landmark: "",
      city: "",
      pin: 0,
      sstate: "",
}
   
const RegisterValidationSchema = yup.object().shape({
      Name: yup.string().required('Name is required'),
      emergencyNo: yup.number().required('MObile  number is required required ').positive().integer().min(10).min(12),
      password: yup.string().min(8, ({ min }) => `Password must be atleast ${min} characters`).required('Password is required'),
            // .matches(
            //       "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
            //       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            // ),
      confirmPassword: yup.string().required('Confirm your password'),
      ad1: yup.string().required('This field is required'),
      email: yup.string().required('Email is required').email("Enter valid email"),
      ad2: yup.string().required('This field is required'),
      landmark: yup.string().required('This field is required'),
      city: yup.string().required('This field is required'),
      sstate: yup.string().required('This field is required'),
      pin: yup.number().positive().required('This field is required').min(6),

});


const RegisterScreenC = ({navigation}) => {

      const dispatch = useDispatch()
      const phonee = useSelector(state => state.CmPer.phone)

      const OnsubmitClregister = (values) => {
      
      dispatch(CMARTpatchFullregister({...values,phone :phonee}))
            
            console.log(values)
            console.log("DISSSPPPPPATCH  DDDONEEEEEEEEEE")
            navigation.navigate('Login')

      }





      // const { Name, email, emergencyNo, password, confirmPassword, ad1, ad2, landmark, city, pin, sstate } = registerC



      return (




            <Formik
                  initialValues={registerC}
                  onSubmit={values =>OnsubmitClregister(values)}
                  validateOnMount={true}
                  validationSchema={RegisterValidationSchema}
            >
                  {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
                        <View style={tw`bg-indigo-400 w-full h-full`}>

                              <ScrollView style={tw`bg-gray-50 border rounded-t-xl   mt-20 mx-auto  w-11/12 h-full`}>
                                    <KeyboardAvoidingView

                                          keyboardVerticalOffset={50}
                                          behavior={'padding'}>
                                          <View style={tw` my-20 px-6`}>
                                              


                                                <Input
                                                      label="Enter name"
                                                      labelStyle={[tw`mt-4`, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('Name')}
                                                      onBlur={handleBlur('Name')}
                                                      value={values.Name}
                                                />
                                                {(errors.Name && touched.Name) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.Name}</Text> : null}

                                                <Input
                                                      label="Email"
                                                      labelStyle={[tw`mt-4`, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('email')}
                                                      onBlur={handleBlur('email')}
                                                      value={values.email}
                                                />
                                                {(errors.email && touched.email) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.email}</Text> : null}

                                                <Input
                                                      label="Another mobile no"
                                                      labelStyle={[tw`mt-4`, { color: "#8f00ff" }]}
                                                      keyboardType="numeric"
                                                      onChangeText={handleChange('emergencyNo')}
                                                      onBlur={handleBlur('emergencyNo')}
                                                      value={values.emergencyNo.toString()}
                                                />
                                                {(errors.emergencyNo && touched.emergencyNo)  ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.emergencyNo}</Text> : null}

                                                <Input
                                                      label="Enter password"
                                                      labelStyle={[tw`mt-4`, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('password')}
                                                      onBlur={handleBlur('password')}
                                                      value={values.password}
                                                />
                                                {(errors.password && touched.password) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.password}</Text> : null}

                                                <Input
                                                      label="ConfirmPassword"
                                                      labelStyle={[tw`mt-4`, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('confirmPassword')}
                                                      onBlur={handleBlur('confirmPassword')}
                                                      value={values.confirmPassword}
                                                />
                                                {(errors.confirmPassword && touched.confirmPassword) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.confirmPassword}</Text> : null}
                                                  {/* {touched.confirmPassword !== values.password ?  <Text style={tw`text-sm text-red-500  italic font-semibold`}> {console.log("THis")} Passwords do not match</Text> : null} */}
                                                  
                                                <Input
                                                      label="Address line 1"
                                                      labelStyle={[tw`mt-4`, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('ad1')}
                                                      onBlur={handleBlur('ad1')}
                                                      value={values.ad1}
                                                />
                                                {(errors.ad1 && touched.ad1) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.ad1}</Text> : null}

                                                <Input
                                                      label="Address line 2"
                                                      labelStyle={[tw`mt-4`, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('ad2')}
                                                      onBlur={handleBlur('ad2')}
                                                      value={values.ad2}
                                                />
                                                {(errors.ad2 && touched.ad2) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.ad2}</Text> : null}

                                                <Input
                                                      label="Landmark"
                                                      labelStyle={[tw`mt-4`, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('landmark')}
                                                      onBlur={handleBlur('landmark')}
                                                      value={values.landmark}
                                                />
                                                {(errors.landmark && touched.landmark) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.landmark}</Text> : null}

                                                <Input
                                                      label="City"
                                                      labelStyle={[tw`mt-4`, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('city')}
                                                      onBlur={handleBlur('city')}
                                                      value={values.city}
                                                />
                                                {(errors.city && touched.city) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.city}</Text> : null}

                                                <Input
                                                      label="Zip code"
                                                      labelStyle={[tw`mt-4`, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('pin')}
                                                      onBlur={handleBlur('pin')}
                                                      value={values.pin.toString()}
                                                />
                                                {(errors.pin && touched.pin) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.pin}</Text> : null}

                                                <Input
                                                      label="State"
                                                      labelStyle={[tw`mt-4`, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('sstate')}
                                                      onBlur={handleBlur('sstate')}
                                                      value={values.sstate}
                                                />
                                                {(errors.sstate && touched.sstate) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.sstate}</Text> : null}







                                          </View>
                                   

                                    <Button
                                                style={tw`w-6/12 `}
                                                buttonStyle={tw`w-8/12 bg-indigo-400 mx-auto`}
                                                title="Register"
                                                onPress={handleSubmit}

                                          />
                                           </KeyboardAvoidingView>
                              </ScrollView>
                        </View>
                  )}
            </Formik>

      )
}

export default RegisterScreenC
