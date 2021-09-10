import React, { useState,useEffect } from 'react'
import { Platform } from 'react-native';
import { TextInput, View, Text, Button, SafeAreaView } from 'react-native'
import { Icon } from 'react-native-elements'
import { Input } from 'react-native-elements/dist/input/Input';
import tw from 'tailwind-react-native-classnames';

const RegisterScreenC = () => {
      const [registerC, setregisterC] = useState({
            Name: String,
            email: String,
            phone: Number,
            emergencyNo: Number,
            password: String,
            confirmPassword: String,
            ad1: String,
            ad2: String,
            landmark: String,
            city: String,
            pin: Number,
            state: String,
      })
      const [userCurrlocation, setuserCurrlocation] = useState({ lat: 0, lng: 0 })



      function handleInput(e) {
            const key = e.target.name
            const value = e.target.value
            setRegister({
                  ...Register1,
                  [key]: value
            }
            )
      }
      useEffect(() => {
         const  {Name,email,phone,emergencyNo,password,confirmPassword,ad1,ad2,landmark,city,pin,state} = registerC
      }, [registerC])


      return (
           
                  <View style={tw`w-11/12 m-auto h-4/6 justify-center border-2 justify-center items-center rounded-lg border-opacity-75 border-gray-200 bg-gray-50`}>
                        <Text style={tw`m-6 justify-center items-center font-semibold font-serif italic text-4xl`}>Register</Text>
                        <View>
                              <Text style={tw`w-4/12 h-10`}>Name :</Text>
                              <TextInput
                                    style={tw`w-8/12 h-10 p-3 mx-auto border-2 justify-center items-center rounded-md border-opacity-75 border-gray-600`}

                                    value={Name}
                                    keyboardType="default"

                              />
                        </View>
                        <View>
                              <Text style={tw`w-4/12 h-10`}>Email :</Text>
                              <TextInput
                                    style={tw`w-8/12 h-10 p-3 mx-auto border-2 justify-center items-center rounded-md border-opacity-75 border-gray-600`}

                                    value={email}
                                    keyboardType="email-address"

                              />
                        </View>
                        <View>
                              <Text style={tw`w-4/12 h-10`}>Phone :</Text>
                              <TextInput
                                    style={tw`w-8/12 h-10 p-3 mx-auto border-2 justify-center items-center rounded-md border-opacity-75 border-gray-600`}

                                    value={phone}
                                    keyboardType="number-pad"

                              />
                        </View>
                        <View>
                              <Text style={tw`w-4/12 h-10`}>Another no :</Text>
                              <TextInput
                                    style={tw`w-8/12 h-10 p-3 mx-auto border-2 justify-center items-center rounded-md border-opacity-75 border-gray-600`}

                                    value={emergencyNo}
                                    keyboardType="number-pad"

                              />
                        </View>
                        <View>
                              <Text style={tw`w-4/12 h-10`}>Password :</Text>
                              <TextInput
                                    style={tw`w-8/12 h-10 p-3 mx-auto border-2 justify-center items-center rounded-md border-opacity-75 border-gray-600`}
                                    onChangeText={text=> setregisterC({...registerC,name :value})}
                                    value={password}
                                    name={password}
                                    keyboardType="visible-password"

                              />
                        </View>
                        <View>
                              <Text style={tw`w-4/12 h-10`}>confirmPassword :</Text>
                              <TextInput
                                    style={tw`w-8/12 h-10 p-3 mx-auto border-2 justify-center items-center rounded-md border-opacity-75 border-gray-600`}
                                    onChangeText={text=> setregisterC({...registerC,name :value})}
                                    value={confirmPassword}
                                    name={confirmPassword}
                                    keyboardType="visible-password"

                              />
                        </View>
                        <Text>Address Details</Text>
                        <View>
                              
                              <TextInput
                                    style={tw`w-10/12 h-10 p-3 mx-auto border-2 justify-center items-center rounded-md border-opacity-75 border-gray-600`}
                                    onChangeText={text=> setregisterC({...registerC,name :value})}
                                    value={ad1}
                                    placeholder="House No./Street/Building"
                                    name={ad1}
                                    keyboardType="default"

                              />
                        </View>
                        <View>
                              
                              <TextInput
                                    style={tw`w-10/12 h-10 p-3 mx-auto border-2 justify-center items-center rounded-md border-opacity-75 border-gray-600`}
                                    onChangeText={text=> setregisterC({...registerC,name :value})}
                                    value={ad2}
                                    placeholder="location/Area"
                                    name={ad2}
                                    keyboardType="default"

                              />
                        </View>
                        <View>
                              
                              <TextInput
                                    style={tw`w-5/12 h-10 p-3 mx-auto border-2 justify-center items-center rounded-md border-opacity-75 border-gray-600`}
                                    onChangeText={text=> setregisterC({...registerC,name :value})}
                                    value={landmark}
                                    placeholder="landmaark"
                                    name={landmark}
                                    keyboardType="default"

                              />
                        </View>
                        <View>
                              
                              <TextInput
                                    style={tw`w-5/12 h-10 p-3 mx-auto border-2 justify-center items-center rounded-md border-opacity-75 border-gray-600`}
                                    onChangeText={text=> setregisterC({...registerC,name :value})}
                                    value={city}
                                    placeholder="House No./Street/Building"
                                    name={city}
                                    keyboardType="default"

                              />
                        </View>
                        <View>
                              
                              <TextInput
                                    style={tw`w-5/12 h-10 p-3 mx-auto border-2 justify-center items-center rounded-md border-opacity-75 border-gray-600`}
                                    onChangeText={text=> setregisterC({...registerC,name :value})}
                                    value={pin}
                                    placeholder="House No./Street/Building"
                                    name={pin}
                                    keyboardType="default"

                              />
                        </View>
                        <View>
                              
                              <TextInput
                                    style={tw`w-5/12 h-10 p-3 mx-auto border-2 justify-center items-center rounded-md border-opacity-75 border-gray-600`}
                                    onChangeText={text=> setregisterC({...registerC,name :value})}
                                    value={state}
                                    placeholder="House No./Street/Building"
                                    name={state}
                                    keyboardType="default"

                              />
                        </View>
                      
                      <Button 
                            title="Create Account"
                            onPress={()=>console.log("Account created")}
                      />
                        



                  </View>
      )    
}

export default RegisterScreenC
