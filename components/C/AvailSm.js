import React,{useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native'
import { ListItem, Avatar, Rating, Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';

import { useDispatch } from 'react-redux';
import { getSuitableSmbydetails } from '../../slices/Cm/CmLivSerSlice';

import { addSuitableSmLocation } from '../../slices/Cm/CmLivSerSlice';

const AvailSm = ({ navigation }) => {
      const dispatch = useDispatch()
      // const [AvailSmss, setAvailSmss] = useState(null)



      
      const AvailSmss = [
            {
                  "livelocation": {
                      "lat": 23.18517262,
                      "lng": 79.9122236
                  },
                  "_id": "6150c3224e2db24fc47f1311",
                  "ServicemanIdentity": {
                      "residencial": {
                          "Rad1": "ZZZZZ",
                          "Rad2": "ZZZZ",
                          "Rlandmark": "ZZZZZZ",
                          "Rpin": "222222",
                          "Rcity": "ZZZZZZ",
                          "Rstate": "ZZZ"
                      },
                      "workplace": {
                          "ad1w": "ZZZZZ",
                          "landmarkw": "ZZZZ",
                          "pincodew": "123456"
                      },
                      "_id": "615089383be7e42e84cd85ca",
                      "phone": "9999999999",
                      "reviews": [],
                      "createdAt": "2021-09-26T14:52:40.362Z",
                      "updatedAt": "2021-09-26T14:55:00.628Z",
                      "__v": 0,
                      "about": "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
                      "adharNo": "34433444400",
                      "email": "ZZZZ@gmail.com",
                      "emergencyPhone": "1111111111",
                      "name": "ZZZ",
                      "password": "AAAAAAAA"
                  },
                  "Domain": "electrician",
                  "__v": 0
              },
            // {
            //       id: "11maw1",
            //       name: "Nobita",
            //       rating: 4.2,
            //       specilisation: ["Painting,Carpenter"],
            //       availseens: "12 Aug 2019",
            //       photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/21c77039-c68a-4ad9-b6e3-fa31d39a7c4e/d8vtcbc-9f0e08ff-1ab4-43c0-b1f6-9d9347bf95da.png/v1/fill/w_891,h_720,strp/doraemon__nobita_nobi_vector_by_jewel_chanxoxo_d8vtcbc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMjFjNzcwMzktYzY4YS00YWQ5LWI2ZTMtZmEzMWQzOWE3YzRlXC9kOHZ0Y2JjLTlmMGUwOGZmLTFhYjQtNDNjMC1iMWY2LTlkOTM0N2JmOTVkYS5wbmciLCJ3aWR0aCI6Ijw9ODkxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WlZ1FWYRfaSBPD5Rlh8QNOzMHOkzquDj3UTmSa5ev7k"
            // },
           

      ]

      // useEffect(() => {
      //      (async()=>{
      //              const res = await dispatch(getSuitableSmbydetails()) .then(()=>{
      //                    setAvailSmss(res)

      //              })
      //              .catch((err)=>{console.log("AVAIL SM Details NOT RECEIVED")})
                   
      //      })()
      // }, [])
      AvailSmss
 
      if(AvailSmss){
            let SuitableSm = []
            {AvailSmss.map((AvailSms)=>{
                  SuitableSm.push(AvailSms.livelocation)
            })}
            console.log("AVAILSERVIIICEMAN",SuitableSm)
            dispatch(addSuitableSmLocation(SuitableSm))
      }

     
      




      const renderLIstItem = ( item ) => {
            const photoo="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/21c77039-c68a-4ad9-b6e3-fa31d39a7c4e/d8vtcbc-9f0e08ff-1ab4-43c0-b1f6-9d9347bf95da.png/v1/fill/w_891,h_720,strp/doraemon__nobita_nobi_vector_by_jewel_chanxoxo_d8vtcbc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMjFjNzcwMzktYzY4YS00YWQ5LWI2ZTMtZmEzMWQzOWE3YzRlXC9kOHZ0Y2JjLTlmMGUwOGZmLTFhYjQtNDNjMC1iMWY2LTlkOTM0N2JmOTVkYS5wbmciLCJ3aWR0aCI6Ijw9ODkxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WlZ1FWYRfaSBPD5Rlh8QNOzMHOkzquDj3UTmSa5ev7k"
           const rating = 3.5
            return (
                  <View style={tw`border flex-1 rounded-xl mr-1 mt-3 w-full  flex-row bg-gray-100`}>
                        <View style={tw`border  w-24 h-24 ml-3 my-4 rounded-full overflow-hidden`}>
                              <Avatar style={tw`border  w-24 h-24 rounded-full `} source={{ uri: photoo }} />
                        </View>
                        <View style={tw`ml-3 my-4`}>
                              <Text style={tw`text-xl`}>{item.ServicemanIdentity.name}</Text>
                              {/* {item.specilisation?.map((i,index) =>key={index} */}
                                    <Text style={tw``} >#{item.Domain},</Text>
                              <View style={tw`flex-row mt-2 p-0`}>
                                    <Text style={tw`text-base`}>{`Rating -${rating} /5`}</Text>
                                   
                              </View>
                        </View>



                        <View style={tw`my-auto absolute right-4 top-7 overflow-hidden w-16 h-16  bg-blue-200 rounded-full items-center justify-center`}>
                              <TouchableOpacity style={tw``} onPress={() =>{ 
                                    // dispatch( (item._id))
                                    navigation.navigate('SmDetails')}}
                                    >
                                    
                                    <Icon
                                    style={tw`w-24 h-16 justify-center items-center`}
                                   
                                          name='albums-outline'
                                          type='ionicon'
                                          color='#517fa4'
                                    // size="60"
                                    />
                              </TouchableOpacity>
                              {/* <Text style={tw` ml-2  text-gray-400`}>{`Since-${item.availseens}`}</Text> */}
                        </View>

                  </View>
            );
      }


      return (

            <View style={tw`mt-10 rounded bg-white`}>


                  <View style={tw` items-center mx-auto -mt-6 mb-7 border-gray-300 w-16 border-2 rounded`}></View>
                  <View ><Text style={tw` -mt-3 text-2xl text-center  font-bold `}> Active Servicemans</Text></View>

                  <View style={tw` items-center mx-auto mt-4 mb-3 border-gray-500 w-96 border rounded`}></View>
               {AvailSmss===null ? <View style={tw`mt-2 mb-12`}> <ActivityIndicator size="large" color="#00ff00" /> </View> : null}
                  {(AvailSmss.length !== 0) ? (


                        <FlatList
                              data={AvailSmss}
                              keyExtractor={item => item._id}
                              renderItem={({item}) => renderLIstItem(item)}
                        />


                  ) : <Text style={tw`text-red-300 pt-28 text-base text-center tracking-wide font-bold subpixel-antialiased `}> Currently we found No Active ServicePerson in YOur region !!</Text>
                  }
            </View>

      )
      {/*    <ListItem key={Sm.id} bottomDivider style={tw`p-0 px-2 flex-auto  flex-col border-gray-400 border-2 rounded-2xl overflow-hidden`}>
                                    <Avatar style={tw`border-0 order-first w-14 h-14 rounded-full overflow-hidden`} source={{ uri: Sm.photo }} />
                                   <ListItem.Content>
                                          <ListItem.Title>{Sm.name}</ListItem.Title>
                                          {Sm.specilisation?.map(i => (
                                                <ListItem.Subtitle>{` # ${i}`}</ListItem.Subtitle>
                                          ))}
                  
                                          <View style={tw`flex-row mt-1 p-0`}>

                                          <Rating
                                                style={tw`py-2`}
                                                ratingCount={5}
                                                imageSize={17}
                                                showRating={false}
                                                defaultRating={Sm.rating}

                                          />
                                          <Text style={tw` py-1 mx-4 text-gray-400 text-base`}>{Sm.availseens}</Text>
                                          </View>


                                    </ListItem.Content> 
                                    <TouchableOpacity  onPress={() =>navigation.navigate('SmDetails')}>
                                    <Icon
                                          style={tw`flex-row order-last`}
                                          name='albums-outline'
                                          type='ionicon'
                                          color='#517fa4'
                                          size="40"
                                          color="#7f9cf5"
                                    />
                                    </TouchableOpacity>
                               </ListItem> */}

}

export default AvailSm
