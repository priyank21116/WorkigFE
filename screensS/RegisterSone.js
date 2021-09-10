import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as yup from 'yup';
import tw from 'tailwind-react-native-classnames';

import { Formik } from 'formik';
import { ScrollView, ImageBackground, Dimensions } from 'react-native';
// import SelectDropdown from 'react-native-select-dropdown'
import { TextInput } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';


const arr = {
      Name: "",
      email: "",
      phone: Number,
      emergencyNo: Number,
      description: "",
      image: ""

}

const RegisterValidationSchema = yup.object().shape({

      phone: yup.number().required('Mobile No is required').positive().integer().min(10).max(10),
      email: yup.string().required('Email is required'),
      emergencyNo: yup.number().required('Mobile No is required').positive().integer().min(10).max(10),


});

const handleOnSubimtt = () => {
      console.log(phone, password)
      navigation.navigate('RegisterStwo')
}



const RegisterSone = () => (

      <Formik
            initialValues={{ phone: '', password: '' }}
            validateOnMount={true}
            onSubmit={handleOnSubimtt}
            validationSchema={RegisterValidationSchema}
      >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <View style={tw`bg-indigo-400 w-full h-full`}>

                        <View style={tw`bg-gray-200 border rounded-t-xl   mt-20 mx-auto  w-11/12 h-full`}>
                              <View style={tw`h-20 w-11/12 mx-auto  mt-10 mb-8 `}>
                                    <Text style={tw`mb-1 ml-3 text-base font-medium italic`}> Mobile no.</Text>
                                  
                                    <Input
                                          label="Mobile no."
                                          labelStyle={[tw``, { color: "#8f00ff" }]}
                                          keyboardType="number-pad"
                                          onChangeText={handleChange('phone')}
                                          onBlur={handleBlur('phone')}
                                          value={values.phone}
                                    />
                                    <Input
                                          label="Mobile no."
                                          labelStyle={[tw``, { color: "#8f00ff" }]}
                                          keyboardType="number-pad"
                                          onChangeText={handleChange('phone')}
                                          onBlur={handleBlur('phone')}
                                          value={values.phone}
                                    />
                                    <Input
                                          label="Mobile no."
                                          labelStyle={[tw``, { color: "#8f00ff" }]}
                                          keyboardType="number-pad"
                                          onChangeText={handleChange('phone')}
                                          onBlur={handleBlur('phone')}
                                          value={values.phone}
                                    />
                                    <Input
                                          label="Mobile no."
                                          labelStyle={[tw``, { color: "#8f00ff" }]}
                                          keyboardType="number-pad"
                                          onChangeText={handleChange('phone')}
                                          onBlur={handleBlur('phone')}
                                          value={values.phone}
                                    />
                              </View>



                              <Button
                                    style={tw`w-6/12 `}
                                    buttonStyle={tw`w-8/12 bg-indigo-400 mx-auto`}
                                    onPress={handleSubmit}
                                    title="Next"

                              />





                        </View>
                  </View>
            )}

      </Formik>
);


export default RegisterSone


