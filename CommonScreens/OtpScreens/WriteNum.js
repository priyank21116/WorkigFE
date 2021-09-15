import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal, SafeAreaView, TouchableWithoutFeedback, FlatList, TextInput } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';


import { Countries } from './CountryCode';

import { useSelector,useDispatch } from 'react-redux';
import { CwritePhone } from '../../slices/CmPerSlice';
import { SmwritePhone } from '../../slices/SmPerSlice';

import { ARTpostphone } from '../../slices/SmPerSlice';


const WriteNum = ({ navigation }) => {

      const dispatch = useDispatch()
      const userType = useSelector(state => state.Genral.typeOUs)
      // const phoneSm = useSelector(state => state.Sm.phone)
      // const phoneCm = useSelector(state => state.Cm.phone)
      
      console.log("het")

      let textInput = useRef(null)
      const [phone, setphone] = useState(0)
      const [countrycode, setcountrycode] = useState(91)
      const [focusInput, setfocusInput] = useState(true)
      const [modalVisible, setModalVisible] = useState(false)
      const [dataCountries, setDataCountries] = useState(Countries)
      const [placeHolder, setplaceHolder] = useState("999 999 9999")

      const onShowhidehandle = () => {
            setModalVisible(!modalVisible)
      }

      // function handleSubmiiit() {
      //       if (phone) {
      //             console.log(phone)
      //             navigation.navigate('RegisterSone')
      //       }
      // }

      const onChangeFocus = () => {
            setfocusInput(true)
      }
      const onChangeBlur = () => {
            setfocusInput(false)
      }


      const filterCountries = (value) => {
            if (value) {
                  const countdata = dataCountries.filter((obj) => (obj.en.indexOf(value) > -1 || obj.dialCode.indexOf(value) > -1))
                  setDataCountries(countdata)
            }
            else {
                  setDataCountries(Countries)
            }
      }

      const onCountryChange = (item) => {
            setcountrycode(item.dialCode)
            setplaceHolder(item.mask)
            onShowhidehandle()
      }

      let renderModal = () => {
            return (
                  <Modal animationType="slide" transparent={false} visible={modalVisible}>
                        <SafeAreaView style={{ flex: 1 }}>
                              <View style={tw`pt-6 px-8 flex-1 bg-white`}>
                                    <View style={[tw`w-full flex-row `, { justifyContent: 'center', alignItems: 'center' }]}>
                                          <TextInput
                                                autoFocus
                                                onChangeText={filterCountries}
                                                placeholder={'Filter'}
                                                focusable
                                                style={[tw`flex-1 py-8 bg-white`, { color: "#424242" }]}
                                          />
                                    </View>

                                    <FlatList
                                          style={[tw` h-2/6`,{ flex: 1 }]}
                                          data={dataCountries}
                                          extraData={dataCountries}
                                          keyExtractor={(item, index) => index.toString()}
                                          renderItem={
                                                ({ item }) => (
                                                      <TouchableWithoutFeedback onPress={() => onCountryChange(item)}>
                                                            <View style={[tw`p-4 flex-row`], { flex: 1, borderColor: 'black', borderTopWidth: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                                                                  <View style={[tw`pl-2 flex-1 flex-row`, { flex: 1 }]}>
                                                                        <Text style={[tw`flex-1`]}>{item.en}</Text>
                                                                        <Text style={[tw``]}>{item.dialCode}</Text>
                                                                  </View>
                                                            </View>
                                                      </TouchableWithoutFeedback>

                                                )
                                          }
                                    />

                              </View>
                              <TouchableOpacity onPress={onShowhidehandle} style={tw`p-2 text-black font-bold`}>

                              </TouchableOpacity>
                        </SafeAreaView>
                  </Modal>
            )
      }


      useEffect(() => {
            textInput.focus()
      }, [])


      const OnSMlogin=(phone)=> {
            dispatch(ARTpostphone(phone))
            // console.log(useSelector(state => state.Sm.phone))
            navigation.navigate('RegisterSone')
            
      }

      const OnCmlogin=(phone)=>{
             dispatch(CwritePhone(phone))
            //  console.log(useSelector(state => state.Cm.phone))
            navigation.navigate('RegisterScreenC')
      }

      return (   
            <View style={tw`w-full h-full items-center bg-white border-4 border-purple-600`}>
                  <View style={tw`w-11/12 h-96 mt-32 leading-5  items-center justify-center  `}>
                        <Text style={tw`text-2xl pb-4  text-black`}>Please Enter mobile no </Text>
                        <Text style={tw`italic text-center text-gray-500 text-base font-normal`}> An OTP would be send on that mobile no for veification purpose.</Text>

                        <View style={tw`my-12 flex-row px-8 `}>
                              {/* constainer input */}
                              <TouchableOpacity onPress={onShowhidehandle}>
                                    <View style={tw`flex-row  items-center justify-center `}>
                                          <Text>{countrycode + "  |"}</Text>
                                    </View>
                              </TouchableOpacity>
                              {/* {renderModal()} */}

                              <Input
                                    ref={(input) => textInput = input}
                                    style={tw`mx-4 my-1 w-10/12`}
                                    placeholder={placeHolder}
                                    disabledInputStyle={{ border: 0 }}
                                    placeholderTextColor="#A8A8A8"
                                    keyboardType="number-pad"
                                    onChangeText={text => setphone(text)}
                                    value={phone.toString()}
                                    onFocus={onChangeFocus}
                                    onBlur={onChangeBlur}
                                    autoFocus={focusInput}
                              />
                        </View>

                        <Button
                              style={tw`w-6/12  items-center justify-center  `}
                              buttonStyle={tw`w-60 bg-purple-600 mx-auto`}
                              onPress={() => {
                                    if (phone) {
                                          console.log(phone)
                                          userType === "Serviceman" ?  OnSMlogin(phone) : OnCmlogin(phone)
                                    }
                              }}
                              title="Contiune"
                        />

                  </View>
            </View>
      )
}

export default WriteNum

const styles = StyleSheet.create({})
