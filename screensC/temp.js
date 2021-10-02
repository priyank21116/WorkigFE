import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, PanResponder, Animated } from 'react-native'
import tw from 'tailwind-react-native-classnames';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';

import MapCurrLoc from '../components/C/MapCurrLoc';
import MapC from '../components/C/MapC';
import SmDetails from '../components/C/SmDetails';
import AvailSm from '../components/C/AvailSm';
import { ScrollView } from 'native-base';
import { timing } from 'react-native-reanimated';

const position = new Animated.Value(0)
const Temp = ({ navigation }) => {
      
      const dispatch = useDispatch()
      const Stack = createNativeStackNavigator();
      const [pageup, setpageup] = useState(false)
      const [changeY, setchangeY] = useState(null)


    
      const pan = PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: 
            Animated.event([
                  null,
                  { dy: position }
            ], { useNativeDriver: false }),
            onPanResponderRelease:(e,c) => {
                  setchangeY(c.dy)
                 
                  Animated.spring(position, {
                        toValue: 0,
                        speed:0,
                        // tension: 150,
                        timing: 2000,
                        useNativeDriver: true,
                        bounciness:1,
                        overshootClamping:true,
                  }).start()
            },
// console.log("::::::::::;",parseInt(position))
            }
            
      )
console.log("ppppppppppppppp",(changeY))
     
      useEffect(() => {
            changeY >= 100 && setpageup(false)
            changeY <= -150 && setpageup(true)
      
            console.log("position::::::::;", pageup)
      }, [changeY])




      return (
            <View style={tw` w-full bg-blue-200`}>

                  <View style={[tw` bg-gray-300  w-full `, { height:(pageup) ? 5 : 330,elevation: 1, zIndex:1 }]}>
                        {/* position:"absolute",top:0,left:0,right:0 , */}
                        {/* <Text style={tw`text-blue-600 `}> MAPppp HERE</Text> */}   
                        {/* <MapCurrLoc /> */}
                  </View>

                  <Animated.View {...pan.panHandlers} style={[tw`h-full border-2 border-b-0 bg-gray-50  w-full rounded-t-3xl  overflow-hidden items-center justify-center  z-50`, { transform: [{ translateY: position }], elevation: 3, zIndex: 3, marginTop: (!pageup) ? 0 : 60 ,paddingTop :(!pageup) ? 0 :15}]}>
                        {/* <ScrollView style={tw``}> */}
                             <AvailSm />
                        {/* </ScrollView> */}

                  </Animated.View>
            </View>
      )
}

export default Temp

const styles = StyleSheet.create({})