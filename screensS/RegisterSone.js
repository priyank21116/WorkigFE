import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import * as yup from 'yup';
import tw from 'tailwind-react-native-classnames';

import { Formik } from 'formik';
import { ScrollView, Dimensions } from 'react-native';


import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';

import { KeyboardAvoidingView } from 'react-native';

const arr = {
      name: "",
      email: "",
      phone: Number,
      emergencyNo: Number,
      description: "",
      // image: "",
      setpassword: String,
      confirmPass: String,
      Rad1: String,
      Rad2: String,
      Rlandmark: String,
      Rcity: String,
      Rpin: Number,
      Rstate: String,
      adharNo: Number,
      // adharPhoto: String,
      ad1w: String,
      landmarkw: String,
      pincodew: Number

}

const RegisterValidationSchema = yup.object().shape({

      phone: yup.number().required('Mobile No is required').positive().integer().min(10).max(10),
      email: yup.string().required('Email is required'),
      emergencyNo: yup.number().required('Mobile No is required').positive().integer().min(10).max(10),


});

const handleSubmit = () => {
      console.log(arr)
      navigation.navigate('LoginS')
}



const RegisterSone = ({ navigation }) => (

      <Formik
            initialValues={arr}
            validateOnMount={true}
            onSubmit={handleSubmit}
            validationSchema={RegisterValidationSchema}
      >
            {({ handleChange, handleBlur, values }) => (
                  <View style={tw`bg-indigo-400 w-full h-full`}>

                        <ScrollView style={tw`bg-gray-200 border rounded-t-xl   mt-20 mx-auto  w-11/12 h-full`}>
                              <KeyboardAvoidingView

                                    keyboardVerticalOffset={50}
                                    behavior={'padding'}>
                                    <View style={tw` my-20 px-6`}>
                                          {/* <Text style={tw`mb-1 ml-3 text-base font-medium italic`}> Mobile no.</Text> */}

                                          <Input
                                                label="Name"
                                                labelStyle={[tw``, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={handleChange('name')}
                                                onBlur={handleBlur('name')}
                                                value={values.name}
                                          />
                                          <Input
                                                label="Email"
                                                labelStyle={[tw``, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                value={values.email}
                                          />
                                          <Input
                                                label="Alternate mobile no."
                                                labelStyle={[tw``, { color: "#8f00ff" }]}
                                                keyboardType="number-pad"
                                                onChangeText={handleChange('emergencyNo')}
                                                onBlur={handleBlur('emergencyNo')}
                                                value={values.emergencyNo}
                                          />
                                          <Input
                                                label="Enter password"
                                                labelStyle={[tw``, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={handleChange('setpassword')}
                                                onBlur={handleBlur('setpassword')}
                                                value={values.setpassword}
                                          />
                                          <Input
                                                label="Confirm Password"
                                                labelStyle={[tw``, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={handleChange('confirmPass')}
                                                onBlur={handleBlur('confirmPass')}
                                                value={values.confirmPass}
                                          />
                                          <Input
                                                label="Address line 1"
                                                labelStyle={[tw``, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={handleChange('ad1')}
                                                onBlur={handleBlur('ad1')}
                                                value={values.ad1}
                                          />
                                          <Input
                                                label="Address line 2"
                                                labelStyle={[tw``, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={handleChange('ad2')}
                                                onBlur={handleBlur('ad2')}
                                                value={values.ad2}
                                          />

                                          <Input
                                                label="Landmark"
                                                labelStyle={[tw``, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={handleChange('landmark')}
                                                onBlur={handleBlur('landmark')}
                                                value={values.landmark}
                                          />
                                          <Input
                                                label="City"
                                                labelStyle={[tw``, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={handleChange('city')}
                                                onBlur={handleBlur('city')}
                                                value={values.city}
                                          />
                                          <Input
                                                label="Zip Code"
                                                labelStyle={[tw``, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={handleChange('pin')}
                                                onBlur={handleBlur('pin')}
                                                value={values.pin}
                                          />
                                          <Input
                                                label="State"
                                                labelStyle={[tw``, { color: "#8f00ff" }]}
                                                keyboardType="default"
                                                onChangeText={handleChange('state')}
                                                onBlur={handleBlur('state')}
                                                value={values.state}
                                          />
                                          <Input
                                                label=" Enter Adhar no."
                                                labelStyle={[tw``, { color: "#8f00ff" }]}
                                                keyboardType="number-pad"
                                                onChangeText={handleChange('adharNo')}
                                                onBlur={handleBlur('adharNo')}
                                                value={values.adharNo}
                                          />
                                          <Input
                                                label="Workplace address"
                                                labelStyle={[tw``, { color: "#8f00ff" }]}
                                                keyboardType="number-pad"
                                                onChangeText={handleChange('ad1w')}
                                                onBlur={handleBlur('ad1w')}
                                                value={values.ad1w}
                                          />
                                          <Input
                                                label="WP landmark"
                                                labelStyle={[tw``, { color: "#8f00ff" }]}
                                                keyboardType="number-pad"
                                                onChangeText={handleChange('landmarkw')}
                                                onBlur={handleBlur('landmarkw')}
                                                value={values.landmarkw}
                                          />
                                          <Input
                                                label="WP Zip code"
                                                labelStyle={[tw``, { color: "#8f00ff" }]}
                                                keyboardType="number-pad"
                                                onChangeText={handleChange('pincodew')}
                                                onBlur={handleBlur('pincodew')}
                                                value={values.pincodew}
                                          />



                                          <TextInput
                                                style={tw`border mt-6 text-base rounded-xl w-full h-20 py-3 px-4`}
                                                onChangeText={handleChange('description')}
                                                value={values.description}
                                                placeholder="Briefly describe what you do best .."
                                                keyboardType="default"
                                                multiline={true}
                                                textAlignVertical="top"
                                          />
                                    </View>



                                    <Button
                                          style={tw`w-6/12 `}
                                          buttonStyle={tw`w-8/12 bg-indigo-400 mx-auto`}
                                          title="Next"
                                          onPress={handleSubmit}

                                    />

                              </KeyboardAvoidingView>

                        </ScrollView>
                  </View>
            )}

      </Formik>
);


export default RegisterSone


