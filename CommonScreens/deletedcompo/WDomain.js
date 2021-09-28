import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { StyleSheet, View,ScrollView } from 'react-native'
// import SelectDropdown from 'react-native-select-dropdown'
import tw from 'tailwind-react-native-classnames';
import { TextArea, Center, Text,  Button } from "native-base"


const availSm=[
      {
            id: "12maw2",
            name: "Doremon",
            rating: 5,
            specilisation: ["Painting,Electrician"],
            availseens: "12 September 2019",
            photo: "https://e7.pngegg.com/pngimages/928/614/png-clipart-doraemon-illustration-nobita-nobi-doraemon-youtube-television-doraemon-cartoon-desktop-wallpaper.png"
      },

      {
            id: "13maw3",
            name: "Sizuka",
            rating: 4.2,
            specilisation: ["Electrician,Carpenter"],
            availseens: "12 Aug 2021",
            photo: "https://w7.pngwing.com/pngs/83/67/png-transparent-doraemon-shizuka-minamoto-shizuka-minamoto-nobita-nobi-doraemon-2-nobita-no-toys-land-daibouken-sewashi-doraemon-child-face-hand-thumbnail.png"
      },
      {
            id: "11maw4",
            name: "Nobita",
            rating: 4.2,
            specilisation: ["Painting,Carpenter"],
            availseens: "12 Aug 2019",
            photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/21c77039-c68a-4ad9-b6e3-fa31d39a7c4e/d8vtcbc-9f0e08ff-1ab4-43c0-b1f6-9d9347bf95da.png/v1/fill/w_891,h_720,strp/doraemon__nobita_nobi_vector_by_jewel_chanxoxo_d8vtcbc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMjFjNzcwMzktYzY4YS00YWQ5LWI2ZTMtZmEzMWQzOWE3YzRlXC9kOHZ0Y2JjLTlmMGUwOGZmLTFhYjQtNDNjMC1iMWY2LTlkOTM0N2JmOTVkYS5wbmciLCJ3aWR0aCI6Ijw9ODkxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WlZ1FWYRfaSBPD5Rlh8QNOzMHOkzquDj3UTmSa5ev7k"
      },
      {
            id: "13maw5",
            name: "Sizuka",
            rating: 4.2,
            specilisation: ["Electrician,Carpenter"],
            availseens: "12 Aug 2021",
            photo: "https://w7.pngwing.com/pngs/83/67/png-transparent-doraemon-shizuka-minamoto-shizuka-minamoto-nobita-nobi-doraemon-2-nobita-no-toys-land-daibouken-sewashi-doraemon-child-face-hand-thumbnail.png"
      },
      {
            id: "13maw6",
            name: "Sizuka",
            rating: 4.2,
            specilisation: ["Electrician,Carpenter"],
            availseens: "12 Aug 2021",
            photo: "https://w7.pngwing.com/pngs/83/67/png-transparent-doraemon-shizuka-minamoto-shizuka-minamoto-nobita-nobi-doraemon-2-nobita-no-toys-land-daibouken-sewashi-doraemon-child-face-hand-thumbnail.png"
      }
]
const WDomain = ({navigation}) => {
      const [selected, setSelected] = useState(null)

      const domains = ["Electrician", "Plumber", "Carpenter", "Electronic", "Vegitable Vander", "Delivery Assitant", "WasteCollecter", "PhysicalWork"]
      return (
            <ScrollView>
                  <Text style={tw`pt-8 px-8 italic font-semibold text-4xl text-indigo-600`}> Hello !! shizuka</Text>
                  <Text style={tw` px-8 pt-1 pb-2 text-lg font-normal`}> Glad to see you here.</Text>
                  <View style={tw` items-center mx-auto mt-1 mb-2 border-gray-400 w-full border rounded`}></View>

                  <Text style={tw`px-8 text-gray-500`}>Got some work to be done? Don't worry</Text>
                  <Text style={tw` px-8 -mb-10 text-gray-400`}>Just tell us what help you need below.</Text>
{/* 
                  <SelectDropdown

                        data={domains}
                        onSelect={(selectedItem, index) => {
                              setSelected(selectedItem)
                        }}
                        defaultButtonText="Which Domain best describe Your Work"

                        buttonTextAfterSelection={(selectedItem, index) => {
                              // text represented after item is selected
                              // if data array is an array of objects then return selectedItem.property to render after item is selected
                              return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                              // text represented for each item in dropdown
                              // if data array is an array of objects then return item.property to represent item in dropdown
                              return item
                        }}
                        buttonStyle={tw` w-11/12 mt-20 mb-8 mx-auto  rounded-md border`}
                        dropdownIconPosition='left'

                  >
                        {selected && <Text>{selected}</Text>}
                  </SelectDropdown> */}


                  <View style={tw`w-11/12 h-44 mx-auto`}>
                        <Text style={tw`pb-3 text-black font-normal`}> Briefly Descibe Your Work below.</Text>
                        {/* <Stack space={8} w="100%" h="%100"> */}
                              <TextArea h={40} placeholder="Write here..." />
                        {/* </Stack> */}
                  </View>
                 
                  <Button
                  style={tw`mx-auto w-8/12 my-10 bg-green-300 h-12 border rounded-xl`}
                  color="#667eea"
                  onPress={() => navigation.navigate('AvailSm')}
                  title="Serach Servicemans"
                  ><Text>Search Servicemans</Text></Button>
         
            </ScrollView>
                  
            
      )
}

export default WDomain

const styles = StyleSheet.create({})
