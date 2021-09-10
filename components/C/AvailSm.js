import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';
import { Input, Button, Icon } from 'react-native-elements';
import { Rating } from 'react-native-elements';

const AvailSmss = [
      {
            id: "11maw1",
            name: "Nobita",
            rating: 4.2,
            specilisation: ["Painting,Carpenter"],
            availseens: "12 Aug 2019",
            photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/21c77039-c68a-4ad9-b6e3-fa31d39a7c4e/d8vtcbc-9f0e08ff-1ab4-43c0-b1f6-9d9347bf95da.png/v1/fill/w_891,h_720,strp/doraemon__nobita_nobi_vector_by_jewel_chanxoxo_d8vtcbc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMjFjNzcwMzktYzY4YS00YWQ5LWI2ZTMtZmEzMWQzOWE3YzRlXC9kOHZ0Y2JjLTlmMGUwOGZmLTFhYjQtNDNjMC1iMWY2LTlkOTM0N2JmOTVkYS5wbmciLCJ3aWR0aCI6Ijw9ODkxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WlZ1FWYRfaSBPD5Rlh8QNOzMHOkzquDj3UTmSa5ev7k"
      },
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
      },
      {
            id: "11maw7",
            name: "Nobita",
            rating: 4.2,
            specilisation: ["Painting,Carpenter"],
            availseens: "12 Aug 2019",
            photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/21c77039-c68a-4ad9-b6e3-fa31d39a7c4e/d8vtcbc-9f0e08ff-1ab4-43c0-b1f6-9d9347bf95da.png/v1/fill/w_891,h_720,strp/doraemon__nobita_nobi_vector_by_jewel_chanxoxo_d8vtcbc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMjFjNzcwMzktYzY4YS00YWQ5LWI2ZTMtZmEzMWQzOWE3YzRlXC9kOHZ0Y2JjLTlmMGUwOGZmLTFhYjQtNDNjMC1iMWY2LTlkOTM0N2JmOTVkYS5wbmciLCJ3aWR0aCI6Ijw9ODkxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WlZ1FWYRfaSBPD5Rlh8QNOzMHOkzquDj3UTmSa5ev7k"
      },
      {
            id: "13maw8",
            name: "Sizuka",
            rating: 4.2,
            specilisation: ["Electrician,Carpenter"],
            availseens: "12 Aug 2021",
            photo: "https://w7.pngwing.com/pngs/83/67/png-transparent-doraemon-shizuka-minamoto-shizuka-minamoto-nobita-nobi-doraemon-2-nobita-no-toys-land-daibouken-sewashi-doraemon-child-face-hand-thumbnail.png"
      }
]



const AvailSm = () => {
      return (

            <View style={tw`mt-10 rounded`}>


                  <View style={tw` items-center mx-auto -mt-6 mb-7 border-gray-300 w-16 border-2 rounded`}></View>
                  <View ><Text style={tw` -mt-3 text-2xl text-center tracking-wide font-bold subpixel-antialiased leading-relaxed`}> Active Servicemans</Text></View>

                  <View style={tw` items-center mx-auto mt-4 mb-3 border-gray-500 w-96 border rounded`}></View>

                  {(AvailSmss.length !== 0) ? (
                        AvailSmss.map((Sm) => (
                              <ListItem key={Sm.id} bottomDivider style={tw`p-0 px-2 flex-auto  flex-col border-gray-400 border-2 rounded-2xl overflow-hidden`}>
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
                                    <TouchableOpacity  onPress={() =>{ 
                                                return(navigation.navigate('LoginS'))}}>
                                    <Icon
                                          style={tw`flex-row order-last`}
                                          name='albums-outline'
                                          type='ionicon'
                                          color='#517fa4'
                                          size="40"
                                          color="#7f9cf5"
                                    />
                                    </TouchableOpacity>
                              </ListItem>
                        ))
                  ) : <Text style={tw`text-red-300 pt-28 text-base text-center tracking-wide font-bold subpixel-antialiased `}> Currently we found No Active ServicePerson in YOur region !!</Text>
                  }
            </View>

      )
}

export default AvailSm
