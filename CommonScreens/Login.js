import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames';
import * as yup from 'yup';
import { Formik } from 'formik';
import { ScrollView, Dimensions, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';

import { useSelector, useDispatch } from 'react-redux';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';


const arr = {
      phone: 0,
      password: "",
}

const loginValidationSchema = yup.object().shape({

      phone: yup.number().required('Mobile No is required').positive('MObile no Cant be negative').integer('MOble no has to be positive integer'),
      password: yup.string().required('Password is required')
            .min(8, ({ min }) => `Password must be atleast ${min} characters`)
      // .matches(
      //       "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      //       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      // ),

});



const Login = ({ navigation }) => {

      const dispatch = useDispatch()

      const userType = useSelector(state => state.Genral.typeOUs)



      const [Showpass, setShowpass] = useState(true)
      const [RememberMe, setRememberMe] = useState(false)

      // console.log("UUSUERRR TYPWEE<<<" ,user)

      const SMlogin = (values) => {

            dispatch(SmLoginValidation(values))
            console.log("SMlOgin", values)
            
            const token = useSelector(state => state.SmLogin.token)
            console.log(token)
            // if(token){
            //       navigation.navigate('MapScreenS')      
            // }else{
            //       Alert.alert(
            //             "LoginFailed",
            //             "We didn't found your credentials Correct ,Check it again",
            //             [
            //               {
            //                 text: "Cancel",
            //                 onPress: () => console.log("Cancel Pressed"),
            //                 style: "cancel"
            //               }
                         
            //             ]
            //           );
            // }
      }
      const CMLogin = (values) => {
            dispatch(CmLoginValidation(values))
            console.log("CMlOgin", values)
            const token = useSelector(state => state.CmLogin.token)
            console.log(token)
            // if(token){
            // navigation.navigate('MapScreenC')      
            // }else{
            //       Alert.alert(
            //             "LoginFailed",
            //             "We didn't found your credentials Correct ,Check it again",
            //             [
            //               {
            //                 text: "Cancel",
            //                 onPress: () => console.log("Cancel Pressed"),
            //                 style: "cancel"
            //               }
                         
            //             ]
            //           );
            // }
            
      }

      return (

            <View
                  style={tw` flex-1 w-full `}
                  showsVerticalScrollIndicator={false}>
                  <View style={[tw` h-2/6`, { backgroundColor: "#8f00ff" }]}>
                        {/* <ImageBackground style={[{ height: Dimensions.get('window').height / 2.5 }, tw`bg-opacity-5 bg-cover bg-none bg-blue-100 backdrop-filter overflow-hidden z-0`]}  source={require('../images/HomeBackground.jpg')}>*/}
                        <View style={tw`flex-1 justify-center items-center`} >
                              {/* <Icon name="location-sharp" style={{ color: "", fontSize: 5 }} /> */}
                              <Text style={tw`text-4xl font-bold text-white uppercase`}>Workfig</Text>
                        </View>
                        {/* </ImageBackground> */}
                  </View>


                  <Formik
                        initialValues={arr}
                        validateOnMount={true}
                        onSubmit={values => CMLogin(values)}
                        //  userType === "Serviceman" ? SMlogin(values) :
                        validationSchema={loginValidationSchema}
                  >

                        {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => {

                              return (

                                    <ScrollView style={[tw` h-4/6 w-full bg-white rounded-t-3xl`]}>
                                          {/* { flex: 1.5 } */}
                                          <View style={[tw`w-full px-12`]}>
                                                <View style={tw`mt-8`}>
                                                      <View style={tw` pb-8`}>
                                                            <Text style={[tw`text-blue-700 text-2xl`, { color: "#8f00ff" }]}>Welcome </Text>
                                                            <Text style={tw`text-gray-500 text-base`}>Don't have An Account ?
                                                                  <Text onPress={() => navigation.navigate('WriteNum')} style={tw`text-red-500 font-semibold italic`}>{' '} Register now</Text>
                                                            </Text>
                                                      </View>




                                                      <View style={tw`w-full px-2  flex`}>
                                                            {/* input field */}
                                                            <View floatinglabel style={tw` flex-row `}>

                                                                  <Input

                                                                        label="Mobile no."
                                                                        labelStyle={[tw``, { color: "#8f00ff" }]}
                                                                        keyboardType="number-pad"
                                                                        onChangeText={handleChange('phone')}
                                                                        onBlur={handleBlur('phone')}

                                                                        value={values.phone.toString()}

                                                                  />
                                                                  <TouchableOpacity>

                                                                        <Icon
                                                                              raised
                                                                              name='done'
                                                                              type='material-icons'
                                                                              // name='checkmark-done-outline'
                                                                              // type='ionicon'
                                                                              color='#0096FF'
                                                                        />
                                                                  </TouchableOpacity>

                                                                  {(errors.phone && touched.phone) &&
                                                                        <Text style={tw`text-sm text-red-500 mt-1 italic font-semibold`}>{errors.phone}</Text>
                                                                  }

                                                            </View>
                                                            <View floatinglabel style={tw` mt-10 justify-between flex-row`}>


                                                                  <Input


                                                                        label="Enter Password"
                                                                        secureTextEntry={Showpass}
                                                                        autoCompleteType="off"
                                                                        labelStyle={[tw``, { color: "#8f00ff" }]}
                                                                        onChangeText={handleChange('password')}
                                                                        keyboardType="ascii-capable"
                                                                        onBlur={handleBlur('password')}
                                                                        value={values.password}

                                                                  />
                                                                  <TouchableOpacity onPress={() => setShowpass(!Showpass)}>
                                                                        {Showpass ?
                                                                              <Icon
                                                                                    raised
                                                                                    name='eye-off-outline'
                                                                                    type='ionicon'
                                                                                    color='#0096FF'

                                                                              /> :
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
                                                                              uncheckedColor="#4632A1"
                                                                              color='#8F9195'
                                                                              title=" Remember Me"
                                                                              onPress={() => setRememberMe(!RememberMe)}

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





                                                            <Button
                                                                  style={[tw`w-6/12 shadow-lg`, { shadowColor: '#00ACEE' }]}
                                                                  buttonStyle={tw`w-8/12 bg-indigo-400 mx-auto`}
                                                                  title="Login"
                                                                  onPress={() => {
                                                                        userType === "Serviceman" ? SMlogin(values) : CMLogin(values)
                                                                  }}

                                                            />
                                                            {/* userType === "Serviceman" ? SMlogin(values) : */}
                                                            {/* <TouchableOpacity onPress={handleSubmit}>
                                                                  <View style={[tw`w-5/12 px-4 py-3 mt-20 my-8 mx-auto h-auto border rounded-xl`, { backgroundColor: "#8f00ff" }]}>
                                                                        <Text style={tw`text-2xl tracking-normal font-bold text-white`} >Login</Text>
                                                                  </View>
                                                            </TouchableOpacity> */}



                                                      </View>

                                                </View>

                                          </View>
                                    </ScrollView>
                              )
                        }}
                  </Formik>

            </View>
      )


}



export default Login