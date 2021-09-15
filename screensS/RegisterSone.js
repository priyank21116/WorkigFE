import React from 'react'
import { View, TextInput, Text } from 'react-native'
import * as yup from 'yup';
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';

import { useDispatch ,useSelector } from 'react-redux';

import { SMaddRegisteroneDetails } from '../slices/SmPerSlice';

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
      emergencyNo: yup.number().required('Mobile No is required').positive().integer(),
      pincodew: yup.number().positive().required('This field is required'),
      name: yup.string().required('Enter Name'),
      ad1w: yup.string().required('This field is required'),
      landmarkw: yup.string().required('This field is required')

});



const RegisterSone = ({ navigation }) => {

      const dispatch = useDispatch();

      const OnsubmitFormone = (values) => {
            dispatch(SMaddRegisteroneDetails(values))
            console.log(values)
            console.log("DISSSPPPPPATCH RegisterSone DDDONEEEEEEEEEE")
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

                        <View style={tw`bg-indigo-400 w-full h-full`}>

                              <ScrollView style={tw`bg-gray-200 border rounded-t-xl   mt-20 mx-auto  w-11/12 h-full`}>
                                    <KeyboardAvoidingView

                                          keyboardVerticalOffset={50}
                                          behavior={'padding'}>
                                          <View style={tw` mt-20 px-6`}>


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
                                                      onChangeText={handleChange('emergencyNo')}
                                                      onBlur={handleBlur('emergencyNo')}
                                                      value={values.emergencyNo.toString()}
                                                />
                                                {(errors.emergencyNo && touched.emergencyNo) ? <Text style={tw`text-sm text-red-500  italic font-semibold`}>{errors.emergencyNo}</Text> : null}

                                                <Text style={tw`font-semibold text-xl`}> Work Place Address</Text>
                                                <Text style={tw`font-normal text-base pb-6 border-b w-full mb-6`}>Write residential if dont have one</Text>
                                                <Input
                                                      label="Workplace address"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('ad1w')}
                                                      onBlur={handleBlur('ad1w')}
                                                      value={values.ad1w}
                                                />
                                                {(errors.ad1w && touched.ad1w) ? <Text style={tw`text-sm text-red-500  mt-1 italic font-semibold`}>{errors.ad1w}</Text> : null}

                                                <Input
                                                      label="WP landmark"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="default"
                                                      onChangeText={handleChange('landmarkw')}
                                                      onBlur={handleBlur('landmarkw')}
                                                      value={values.landmarkw}
                                                />
                                                {(errors.landmarkw && touched.landmarkw) ? <Text style={tw`text-sm text-red-500 mt-1 italic font-semibold`}>{errors.landmarkw}</Text> : null}

                                                <Input
                                                      label="WP Zip code"
                                                      labelStyle={[tw``, { color: "#8f00ff" }]}
                                                      keyboardType="number-pad"
                                                      onChangeText={handleChange('pincodew')}
                                                      onBlur={handleBlur('pincodew')}
                                                      value={values.pincodew.toString()}
                                                />
                                                {(errors.pincodew && touched.pincodew) ? <Text style={tw`text-sm text-red-500 mt-1 italic font-semibold`}>{errors.pincodew}</Text> : null}




                                                <TextInput

                                                      style={tw`border mt-6 text-base rounded-xl w-full h-20 py-3 px-4`}
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
                                                buttonStyle={tw`w-8/12 bg-indigo-400 mx-auto`}
                                                title="Next"
                                                onPress={handleSubmit}

                                          />

                                    </KeyboardAvoidingView>

                              </ScrollView>
                        </View>
                  )}

            </Formik >
      )
}


export default RegisterSone


