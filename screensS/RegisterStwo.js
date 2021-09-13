import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import * as yup from 'yup';
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';

import { useSelector, useDispatch } from 'react-redux';
import { SMaddRegistertwoDetails } from '../slices/SmPerSlice';
const arr2 = {
      setpassword: "",
      confirmPass: "",
      Rad1: "",
      Rad2: "",
      Rlandmark: "",
      Rcity: "",
      Rpin: Number,
      Rstate: "",
      adharNo: Number,
      // adharPhoto: String,

}

const RegisterValidationSchema = yup.object({

      adharNo: yup.number().required('Aadhar details are required ').positive().integer(),
      setpassword: yup.string().min(8, ({ min }) => `Password must be atleast ${min} characters`).required('Password is required'),
            // .matches(
            //       "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
            //       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            // ),
      confirmPass: yup.string().required('Confirm your password'),
      Rad1: yup.string().required('This field is required'),
      Rad2: yup.string().required('This field is required'),
      Rlandmark: yup.string().required('This field is required'),
      Rcity: yup.string().required('This field is required'),
      Rstate: yup.string().required('This field is required'),
      Rpin: yup.number().positive().required('This field is required'),

});




const RegisterStwo = ({ navigation }) => {

      const dispatch = useDispatch()

      const helloname = useSelector(state => state.Sm.name)

      const OnsubmitFormtwo = (values) => {
            dispatch(SMaddRegistertwoDetails(values))
            console.log(values)
            console.log("DISSSPPPPPATCH  DDDONEEEEEEEEEE")
            navigation.navigate('Login')

      }
      return (

            <Formik
                  initialValues={arr2}
                  onSubmit={values => OnsubmitFormtwo(values)}
                  validateOnMount={true}
                  validationSchema={RegisterValidationSchema}
            >
                  {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
                        <View style={tw`bg-indigo-400 w-full h-full`}>

                              <ScrollView style={tw`bg-gray-200 border rounded-t-xl   mt-20 mx-auto  w-11/12 h-full`}>
                                    <KeyboardAvoidingView

                                          keyboardVerticalOffset={50}
                                          behavior={'padding'}>
                                          <View style={tw` my-20 px-6`}>
                                                <Text style={tw`mb-1 mt-4 ml-4 text-xl font-bold italic`}> {`Hello ${helloname} !`}</Text>
                                                <Text style={tw`mb-4 ml-4  text-base italic border-b pb-4 w-full border-gray-600`}>Some more details are required before we register you. Fill them below</Text>


                                                <Input
                                                      label=" Enter Adhar no."
                                                      labelStyle={[tw`mt-4`, { color: "#8f00ff" }]}
                                                      keyboardType="number-pad"
                                                      onChangeText={handleChange('adharNo')}
                                                      onBlur={handleBlur('adharNo')}
                                                      value={values.adharNo}
                                                />
                                                {(errors.adharNo && touched.adharNo) ? <Text style={tw`text-sm text-red-500 mt-1 italic font-semibold`}>{errors.adharNo}</Text> : null}


                                                <Input
                                                      label="Enter password"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('setpassword')}
                                                      onBlur={handleBlur('setpassword')}
                                                      value={values.setpassword}
                                                />
                                                {(errors.setpassword && touched.setpassword) ? <Text style={tw`text-sm text-red-500 mt-1 italic font-semibold`}>{errors.setpassword}</Text> : null}

                                                <Input
                                                      label="Confirm Password"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('confirmPass')}
                                                      onBlur={handleBlur('confirmPass')}
                                                      value={values.confirmPass}

                                                />
                                                {(errors.confirmPass && touched.confirmPass) ? <Text style={tw`text-sm text-red-500 mt-1 italic font-semibold`}>{errors.confirmPass}</Text> : null}


                                                <Text style={tw`font-semibold text-xl mt-8 pb-8`}> Residencial Address</Text>

                                                <Input
                                                      label="Address line 1"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('Rad1')}
                                                      onBlur={handleBlur('Rad1')}
                                                      value={values.Rad1}
                                                />
                                                {(errors.Rad1 && touched.Rad1) ? <Text style={tw`text-sm text-red-500 mt-1 italic font-semibold`}>{errors.Rad1}</Text> : null}

                                                <Input
                                                      label="Address line 2"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('Rad2')}
                                                      onBlur={handleBlur('Rad2')}
                                                      value={values.Rad2}
                                                />
                                                {(errors.Rad2 && touched.Rad2) ? <Text style={tw`text-sm text-red-500 mt-1 italic font-semibold`}>{errors.Rad2}</Text> : null}


                                                <Input
                                                      label="Landmark"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('Rlandmark')}
                                                      onBlur={handleBlur('Rlandmark')}
                                                      value={values.Rlandmark}
                                                />
                                                {(errors.Rlandmark && touched.Rlandmark) ? <Text style={tw`text-sm text-red-500 mt-1 italic font-semibold`}>{errors.Rlandmark}</Text> : null}

                                                <Input
                                                      label="City"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('Rcity')}
                                                      onBlur={handleBlur('Rcity')}
                                                      value={values.Rcity}
                                                />
                                                {(errors.Rcity && touched.Rcity) ? <Text style={tw`text-sm text-red-500 mt-1 italic font-semibold`}>{errors.Rcity}</Text> : null}

                                                <Input
                                                      label="Zip Code"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="numeric"
                                                      onChangeText={handleChange('Rpin')}
                                                      onBlur={handleBlur('Rpin')}
                                                      value={values.Rpin}
                                                />
                                                {(errors.Rpin && touched.Rpin) ? <Text style={tw`text-sm text-red-500 mt-1 italic font-semibold`}>{errors.Rpin}</Text> : null}

                                                <Input
                                                      label="State"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('Rstate')}
                                                      onBlur={handleBlur('Rstate')}
                                                      value={values.Rstate}
                                                />
                                                {(errors.Rstate && touched.Rstate) ? <Text style={tw`text-sm text-red-500 mt-1 italic font-semibold`}>{errors.Rstate}</Text> : null}



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
};

export default RegisterStwo