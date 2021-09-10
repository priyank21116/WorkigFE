import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames';
import * as yup from 'yup';
import { Formik } from 'formik';
import { ScrollView, ImageBackground, Dimensions, View } from 'react-native';
import { Input, Checkbox, Button, Icon, Text } from 'react-native-elements';

import { ListItem } from 'react-native-elements';


const loginValidationSchema = yup.object().shape({

      phone: yup.number().required('Mobile No is required').positive().integer().min(10).max(10),
      password: yup.string().min(8, ({ min }) => `Password must be atleast ${min} characters`).required('Password is required')
            .matches(
                  "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
                  "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),

});


const LoginC = () => {


      return (


            <Formik
                  initialValues={{ phone: '', password: '' }}
                  validateOnMount={true}
                  onSubmit={() => navigation.navigate('MapScreen')}
                  validationSchema={loginValidationSchema}
            >
                  {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => {

                        {/* top Starts */ }

                        <ScrollView
                              style={tw`bg-white flex-1 w-full `}
                              showsVerticalScrollIndicator={false}>
                              <View style={tw`bg-indigo-500 h-2/6`}>
                                    {/* <ImageBackground style={[{ height: Dimensions.get('window').height / 2.5 }, tw`bg-opacity-5 bg-cover bg-none bg-blue-100 backdrop-filter overflow-hidden z-0`]}  source={require('../images/HomeBackground.jpg')}>*/}
                                    <View style={tw`flex-1 justify-center items-center`} >
                                          {/* <Icon name="location-sharp" style={{ color: "#ffffff", fontSize: 100 }} /> */}
                                          <Text style={tw`text-4xl font-bold text-white uppercase`}>Workfig</Text>
                                    </View>
                                    {/* </ImageBackground> */}
                              </View>
                              <Text>Hello</Text>



                              {/* top ends */}

                              {/* bottomView */}
                              <View style={[tw`w-full  rounded-t-md`, { flex: 1.5 }]}>

                                    <View style={[tw`w-full  p-20`]}>
                                          <View style={tw`p-4`}>
                                                <Text style={tw`text-blue-700 text-2xl`}>Welcome </Text>
                                                <Text style={tw`text-gray-300 text-base`}>Don't have An Account ?
                                                      <Text style={tw`text-red-500 font-bold italic`}>{' '} Register now</Text></Text>
                                                {/* 
                                          </View>
                                    </View> */}




                                                <View style={tw`w-full p-20`}>
                                                      {/* input field */}
                                                      <View floatinglabel style={tw`bg-gray-100`}>

                                                            <Input
                                                                  // style={tw`w-9/12 h-12 p-3 mx-auto border-2 justify-center items-center rounded-md border-opacity-75 border-gray-700`}
                                                                  placeholder="Mobile Number"
                                                                  label="Mobile no."
                                                                  keyboardType="number-pad"
                                                                  onChangeText={handleChange('phone')}
                                                                  onBlur={handleBlur('phone')}
                                                                  value={values.phone}

                                                            />

                                                            <Icon
                                                                  raised
                                                                  name='done'
                                                                  type='material-icons'
                                                                  color='#f50'
                                                            />

                                                            {(errors.email && touched.email) &&
                                                                  <Text style={tw`text-sm text-red-500 mt-5 italic font-semibold`}>{errors.email}</Text>
                                                            }

                                                      </View>
                                                      <View floatinglabel style={tw`bg-gray-100 mt-10`}>


                                                            <Input
                                                                  // style={tw`w-9/12 h-12 mx-auto my-5  p-3 border-2 justify-center items-center rounded-md border-opacity-75 border-gray-700`}
                                                                  placeholder="Enter PPPpassword"
                                                                  label="Password"
                                                                  autoCompleteType="off"
                                                                  onChangeText={handleChange('password')}
                                                                  onBlur={handleBlur('password')}
                                                                  value={values.password}

                                                            />

                                                            <Icon
                                                                  name='visibility'
                                                                  type='material-icons'
                                                                  color='#517fa4'
                                                            />

                                                            {(errors.password && touched.password) &&
                                                                  <Text style={tw`text-sm text-red-500 mt-5 italic font-semibold`}>{errors.password}</Text>
                                                            }
                                                      </View>
                                                      {/* forgot password and remmember me
  */}
                                                      <View style={tw` h-4 mt-7 flex-row`}>
                                                            <View style={tw`flex-1 -ml-20`}>
                                                                  <ListItem noBorder >

                                                                        <Checkbox checked={true}
                                                                              uncheckedColor="4632A1"
                                                                              color="#4632A1"
                                                                              title={
                                                                                    <Text style={{ color: '#8F9195', alignSelf: 'flex-start' }}>  Remember Me
                                                                                    </Text>}
                                                                        />

                                                                  </ListItem>
                                                            </View>
                                                            <View style={tw`flex-1 -mr-20`}>
                                                                  <ListItem >

                                                                        <Text style={{ color: '#8F9195', alignSelf: 'flex-end' }}>
                                                                              ForgotPassword?
                                                                        </Text>

                                                                  </ListItem>
                                                            </View>
                                                      </View>


                                                      <View style={tw`h-6 justify-center items-center`}>

                                                            <Button rounded
                                                                  style={[tw`bg-indigo-500 self-center justify-center shadow-lg`, { shadowColor: '#00acee', width: Dimensions.get('window').width / 2 }]}
                                                                  color="#f194ff"
                                                                  onPress={handleSubmit}
                                                            ><Text style={tw`text-white`}>Login</Text></Button>

                                                      </View>
                                                </View>

                                          </View>

                                    </View>
                              </View>

                        </ScrollView>


                  }}
            </Formik>
      )
}



export default LoginC
