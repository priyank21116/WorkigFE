import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames';
import * as yup from 'yup';
import { Formik } from 'formik';
import { ScrollView, ImageBackground, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import { Input, TextInput, Button, Icon } from 'react-native-elements';

import { ListItem } from 'react-native-elements';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';

const loginValidationSchema = yup.object().shape({

      phone: yup.number().required('Mobile No is required').positive().integer().min(10).max(10),
      password: yup.string().required('Password is required')

});


const handleOnSubimtt=()=>{
      console.log(phone, password)
      navigation.navigate('MapScreenS')
}


const LoginS = ({ navigation }) => {
       
      const [Showpass, setShowpass] = useState(true)
      const [RememberMe, setRememberMe] = useState(false)

      return (


            <Formik
                  initialValues={{ phone: '', password: '' }}
                  validateOnMount={true}
                  onSubmit={handleOnSubimtt}
                  validationSchema={loginValidationSchema}
            >
                  {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => {

                        {/* top Starts */ }
                        return (

                              <View
                                    style={tw` flex-1 w-full `}
                                    showsVerticalScrollIndicator={false}>
                                    <View style={[tw` h-2/6`,{backgroundColor:"#8f00ff"}]}>
                                          {/* <ImageBackground style={[{ height: Dimensions.get('window').height / 2.5 }, tw`bg-opacity-5 bg-cover bg-none bg-blue-100 backdrop-filter overflow-hidden z-0`]}  source={require('../images/HomeBackground.jpg')}>*/}
                                          <View style={tw`flex-1 justify-center items-center`} >
                                                {/* <Icon name="location-sharp" style={{ color: "", fontSize: 5 }} /> */}
                                                <Text style={tw`text-4xl font-bold text-white uppercase`}>Workfig</Text>
                                          </View>
                                          {/* </ImageBackground> */}
                                    </View>


                                    {/* top ends */}

                                    {/* bottomView */}
                                    <View style={[tw`w-full bg-white rounded-t-3xl`]}>
                                          {/* { flex: 1.5 } */}
                                          <View style={[tw`w-full px-12`]}>
                                                <View style={tw`mt-8`}>
                                                      <View style={tw` pb-8`}>
                                                            <Text style={[tw`text-blue-700 text-2xl`,{color:"#8f00ff"}]}>Welcome </Text>
                                                            <Text style={tw`text-gray-500 text-base`}>Don't have An Account ?
                                                                  <Text onPress={() => navigation.navigate('RegisterSone')} style={tw`text-red-500 font-semibold italic`}>{' '} Register now</Text>
                                                            </Text>
                                                      </View>




                                                      <View style={tw`w-full px-2  flex`}>
                                                            {/* input field */}
                                                            <View floatinglabel style={tw` flex-row `}>

                                                                  <Input
                                                                     

                                                                        label="Mobile no."
                                                                        labelStyle={[tw``,{color:"#8f00ff"}]}
                                                                        keyboardType="number-pad"
                                                                        onChangeText={handleChange('phone')}
                                                                        onBlur={handleBlur('phone')}
                                                                        value={values.phone}



                                                                  />
                                                                  <TouchableOpacity>
                                                                 
                                                                  <Icon
                                                                        raised
                                                                        name='checkmark-done-outline'
                                                                        type='ionicon'
                                                                        color='#0096FF'
                                                                  />
                                                                  </TouchableOpacity>

                                                                  {(errors.email && touched.email) &&
                                                                        <Text style={tw`text-sm text-red-500 mt-5 italic font-semibold`}>{errors.email}</Text>
                                                                  }

                                                            </View>
                                                            <View floatinglabel style={tw` mt-10 justify-space-between flex-row`}>


                                                                  <Input
                                                                      

                                                                        label="Enter Password"
                                                                        secureTextEntry={Showpass}
                                                                        autoCompleteType="off"
                                                                        labelStyle={[tw``,{color:"#8f00ff"}]}
                                                                        onChangeText={handleChange('password')}
                                                                        keyboardType="ascii-capable"
                                                                        onBlur={handleBlur('password')}
                                                                        value={values.password}

                                                                  />
                                                                  <TouchableOpacity onPress={()=>setShowpass(!Showpass)}>
                                                                  {Showpass ?
                                                                  <Icon 
                                                                  raised
                                                                        name='eye-off-outline'
                                                                        type='ionicon'
                                                                        color='#0096FF'
                                                                        
                                                                  />:
                                                                    <Icon 
                                                                  raised
                                                                        name='eye-outline'
                                                                        type='ionicon'
                                                                        color='#686868'
                                                                        
                                                                  />}
                                                                  </TouchableOpacity>


                                                                  {(errors.password && touched.password) &&
                                                                        <Text style={tw`text-sm text-red-500 mt-5 italic font-semibold`}>{errors.password}</Text>
                                                                  }
                                                            </View>
                                                         
                                                            <View style={tw` h-3 mx-20 my-8 flex-row `}>
                                                                  <View style={tw`flex-1 -ml-20`}>
                                                                         

                                                                        <CheckBox 
                                                                               checked={RememberMe}
                                                                            style={tw`border-none bg-white`}
                                                                              uncheckedColor="4632A1"
                                                                              color= '#8F9195'
                                                                              title=" Remember Me"
                                                                              onPress={()=>setRememberMe(!RememberMe)}
                                                                      
                                                                        />

                                                                  
                                                                  </View>
                                                                  <View style={tw`flex-1 -mr-20`}>
                                                                        <TouchableOpacity>
                                                                        <Text style={{ color: '#8F9195', alignSelf: 'flex-end' }}>
                                                                              ForgotPassword?
                                                                        </Text>
                                                                        </TouchableOpacity>

                                                                
                                                                  </View>
                                                            </View>


                                                            {/* <View style={tw`h-auto justify-center items-center`}> */}

                                                            <Button rounded
                                                                  style={[tw`bg-black self-center justify-center shadow-lg`, { shadowColor: '#00acee', width: Dimensions.get('window').width / 2 }]}
                                                                  color="#f194ff"
                                                                  onPress={() => navigation.navigate('NewWorkCame')}
                                                            ><Text style={tw`text-white`}>Login</Text></Button>

                                                            {/* </View> */}
                                                      </View>

                                                </View>

                                          </View>
                                    </View>

                              </View>
                        )


                  }}
            </Formik>
      )
}



export default LoginS