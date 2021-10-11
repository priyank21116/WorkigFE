import React, { useState } from 'react'
import { Alert,  StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native';

import * as SMS from 'expo-sms';
import * as Linking from 'expo-linking';

import tw from 'tailwind-react-native-classnames';

import NewworkCard from '../components/S/NewworkCard';

const NewWorkCame = () => {

      // const a = item.byid

      // const [acceptWork, setAcceptWork] = useState(false)
      // const [discussOnCall, setDiscussOnCall] = useState(false)
      // const [locattteOnmap, setlocattteOnmap] = useState(false)
      // const [getdetailONChat, setGetdetailONChat] = useState(false)
      // const [rejectWork, setRejectWork] = useState(false)

      // const SMid = "get SM id by dispatch"

      const acceptWork = () => {
            //      console.log(item.by)
            console.log("AAAHUUUUUREEEEEEE    CAALllled", acceptWork)
      }

      const discussOnCall = async () => {
           
           let result = await Linking.openURL(`tel:${'6260041765'}`)
           console.log(" :::::::::CALL::::::::::::::::::",result)
      }

      const locattteOnmap = () => {
            // console.log(item.by)
            console.log("AAAHUUUUUREEEEEEE    CAALllled", locattteOnmap)
      }

      const getdetailONChat =async () => {
            // console.log(item.by)
            const isAvailable = await SMS.isAvailableAsync();
            if (isAvailable) {
                  const { result } = await SMS.sendSMSAsync( ["62600487622"], "Hello ! I'm Suresh and my workdomain matches your requiremnts And I'm ready to owrkout your need. I'm accepting request and will contactyou in second")

                  console.log(result)
            } else {
              Alert.alert("Could not Send message","We didn't find messaging functionality on your device.Therefor you can not use this feature.Try call out")
            }


      }

      const rejectWork = () => {
            // console.log(item.by)
            console.log("AAAHUUUUUREEEEEEE    CAALllled", rejectWork)
      }

      const NewWork = [{
            byid: "1234",
            by: "YamaGuchi",
            location: { lat: 22.1, lng: 34.5 },
            address: "AAAAAA,BBBBB,VCCC nnnn VVVV" + 21029,
            WorkDomain: "Painter",
            Workdescription: " PAint 2 room and Grills",
            Clientrating: 3.5,
            photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/21c77039-c68a-4ad9-b6e3-fa31d39a7c4e/d8vtcbc-9f0e08ff-1ab4-43c0-b1f6-9d9347bf95da.png/v1/fill/w_891,h_720,strp/doraemon__nobita_nobi_vector_by_jewel_chanxoxo_d8vtcbc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMjFjNzcwMzktYzY4YS00YWQ5LWI2ZTMtZmEzMWQzOWE3YzRlXC9kOHZ0Y2JjLTlmMGUwOGZmLTFhYjQtNDNjMC1iMWY2LTlkOTM0N2JmOTVkYS5wbmciLCJ3aWR0aCI6Ijw9ODkxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WlZ1FWYRfaSBPD5Rlh8QNOzMHOkzquDj3UTmSa5ev7k"

      },
      {
            byid: "12",
            by: "YamaGuchi",
            location: { lat: 22.1, lng: 34.5 },
            address: "AAAAAA,BBBBB,VCCC nnnn VVVV" + 21029,
            WorkDomain: "Painter",
            Workdescription: " PAint 2 room and Grills",
            Clientrating: 3.5,
            photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/21c77039-c68a-4ad9-b6e3-fa31d39a7c4e/d8vtcbc-9f0e08ff-1ab4-43c0-b1f6-9d9347bf95da.png/v1/fill/w_891,h_720,strp/doraemon__nobita_nobi_vector_by_jewel_chanxoxo_d8vtcbc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMjFjNzcwMzktYzY4YS00YWQ5LWI2ZTMtZmEzMWQzOWE3YzRlXC9kOHZ0Y2JjLTlmMGUwOGZmLTFhYjQtNDNjMC1iMWY2LTlkOTM0N2JmOTVkYS5wbmciLCJ3aWR0aCI6Ijw9ODkxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WlZ1FWYRfaSBPD5Rlh8QNOzMHOkzquDj3UTmSa5ev7k"

      }]
      

      return (
            <View style={[tw`w-full h-full py-8`, { backgroundColor: "#8f00ff" }]}>
                  <ScrollView style={tw`w-11/12 h-5/6 mx-auto my-auto bg-gray-200 px-2  border border-gray-600 rounded-2xl `}>
                        {NewWork?.map(detail => (
                              <NewworkCard
                                    key={detail.byid}
                                    items={detail}
                                    rejectWork={rejectWork}
                                    getdetailONChat={getdetailONChat}
                                    locattteOnmap={locattteOnmap}
                                    discussOnCall={discussOnCall}
                                    acceptWork={acceptWork}
                              />
                        ))}
                  </ScrollView>

            </View>
      )
}

export default NewWorkCame

const styles = StyleSheet.create({})
