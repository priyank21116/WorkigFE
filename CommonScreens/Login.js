import React, { useState, useEffect } from 'react'
import tw from 'tailwind-react-native-classnames';
import * as yup from 'yup';
import { Formik } from 'formik';
import { ScrollView, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';

import { useSelector, useDispatch } from 'react-redux';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';

import { SmLoginValidation } from '../slices/Sm/SmLoginSlice';
import { SmRememberMeAction } from '../slices/Sm/SmLoginSlice';
import { CmRememberMeAction } from '../slices/Cm/CmLoginSlice';
import { CmLoginValidation } from '../slices/Cm/CmLoginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';


const arr = {
      password: "",
      phone: 0
}



const loginValidationSchema = yup.object().shape({

      phone: yup.number().required('Mobile No is required').positive('MObile no Cant be negative').integer('MOble no has to be positive integer'),
      password: yup.string().required('Password is required')
     

});



const Login = ({ navigation }) => {

      const dispatch = useDispatch()
      const [userType, setuserType] = useState("")
      const getData = async () => {
            try {
                  const userTypee = await useSelector(state => state.Genral.typeOUs)
                  const value = await AsyncStorage.getItem('typeOfUser')
                  setuserType(userTypee)
                  // console.log("STAETE", userTypee, "ASYNC STORAGE", value)

            } catch (e) {
                  console.log("ERROR IN TYPE OF USER AS")
            }
      }

      getData()


      const [Showpass, setShowpass] = useState(true)
      const [RememberMe, setRememberMe] = useState(true)


      const SMlogin = async (values) => {
            // console.log(" 1 SMlOgin 1", values)
            dispatch(SmLoginValidation(values))
                  .unwrap()
                  .then(() => {
                        // console.log("RESP FROM SM LOGIN DISPATCH")
                        navigation.navigate('MapScreenS')
                  })
                  .catch((rejectedValueOrSerializedError) => {
                        console.log("ERROR in SSSSSM LOGIN",rejectedValueOrSerializedError)
                  })
      }

      // if (token) {
      //       navigation.navigate('MapScreenS')
      // } else {
      //       Alert.alert(
      //             "LoginFailed",
      //             "We didn't found your credentials Correct ,Check it again",
      //             [
      //                   {
      //                         text: "Cancel",
      //                         onPress: () => console.log("Cancel Pressed"),
      //                         style: "cancel"
      //                   }

      //             ]
      //       );
      // }

      const CMLogin = (values) => {
            console.log("Body Given::::",values)
            dispatch(CmLoginValidation(values))
                  .unwrap()
                  .then((res) => {
                        // console.log("RESP FROM CCCCM LOGIN DISPATCH", res)
                        navigation.navigate('DomainScreen')
                  })
                  .catch((rejectedValueOrSerializedError) => {
                        console.log("ERROR in CCCCM LOGIN",rejectedValueOrSerializedError)
                  })
                 
            }
      
      // if (token) {
      //       navigation.navigate('MapScreenC')
      // } else {
      //       Alert.alert(
      //             "LoginFailed",
      //             "We didn't found your credentials Correct ,Check it again",
      //             [
      //                   {
      //                         text: "Cancel",
      //                         onPress: () => console.log("Cancel Pressed"),
      //                         style: "cancel"
      //                   }

      //             ]
      //       );
      // }




      useEffect(() => {

            userType === "Serviceman" ?
                   dispatch(SmRememberMeAction(RememberMe)) : dispatch(CmRememberMeAction(RememberMe))

      }, [RememberMe,userType])

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
                        onSubmit={values => { userType === "Serviceman" ? SMlogin(values) : CMLogin(values) }}
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

                                                                        {/* <Icon
                                                                              
                                                                              name='done'
                                                                              type='material-icons'
                                                                              // name='checkmark-done-outline'
                                                                              // type='ionicon'
                                                                              color='#0096FF'
                                                                        /> */}
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
                                                                  <TouchableOpacity style={tw`mt-8 -ml-8`} onPress={() => setShowpass(!Showpass)}>
                                                                        {Showpass ?
                                                                              <Icon

                                                                                    name='eye-off-outline'
                                                                                    type='ionicon'
                                                                                    color='#0096FF'

                                                                              /> :
                                                                              <Icon

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
                                                                              style={tw`border-0`}
                                                                              uncheckedColor="#088F8F"
                                                                              color='#8F919'
                                                                              title=" Remember Me"
                                                                              onPress={() => setRememberMe(!RememberMe)}
                                                                        />
                                                                        {/* //       setRememberMe(!RememberMe)
                                                                              //      setTimeout(
                                                                              //       dispatch(RememberMeAction(RememberMe))
                                                                              //       ,1000)
                                                                                    
                                                                                    // Remember = RememberMe}
                                                                                    // }} */}




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
                                                                  onPress={handleSubmit}

                                                            // userType === "Serviceman" ? SMlogin(values) : CMLogin(values)


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



// SMlogin



//       // const pending = useSelector(state => state.SmLogin.loading)
//       // const error = useSelector(state => state.SmLogin.error)

//      if(error !==""){
//            Alert.alert("SMLOGIN ERROR",error,[{text:"Cancel",style:"cancel"}])
//      }
//       // const token = useSelector(state => state.SmLogin.token)
//       console.log("TOOOOKEENNN",token)