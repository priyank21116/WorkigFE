import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const CmlivService = {

      livelocation: {
            lat: 0,
            lng: 0
      },
      helpDomain: "",
      SpecifyHelp: "",
      AvailSMSLocation :[]
}

export const CmPostHelpSearch = createAsyncThunk(
      'CmPostHelpSearch',
      async (body) => {
            // console.log("DTATRECIVED",body)
            try {
                  let response = await axios({
                        method: "post",
                        url: "http://10.0.2.2:9000/ctcurrent/ActivateCtforSERACH",
                        body: body,
                        headers: {
                              "Content-Type": "application/json",
                              "Authorization": await AsyncStorage.getItem('Ctoken')
                        }
                  })
                  // console.log("CmPostHelpSearch<<<<<", response)
                  return response
            } catch (error) {
                  console.log(" ERROR<<CmPostHelpSearc", error)
            }
      })



export const getSuitableSmbydetails = createAsyncThunk(
      'getSuitableSmbydetails',
      async (body) => {
            console.log("Search SM for deatils", body)
            try {
                  let response = await axios({
                        method: "get",
                        url: "http://10.0.2.2:9000/ctcurrent/getsuitableSm",

                        headers: {
                              "Content-Type": "application/json",
                              "Authorization": await AsyncStorage.getItem('Ctoken')
                        }
                  })
                  console.log("getSuitableSmbydetails<<<<<", response)
                  return response

            } catch (err) {
                  console.log(" ERROR<<CmPostHelpSearc", error)
            }
      })



const CmONHelpSearch = createSlice({
      name: "CmONHelpSearch",
      initialState: CmlivService,
      reducers: {
            tempCmlive: (state, actions) => {
                  const { lat, lng, helpDomain, SpecifyHelp } = actions.payload
                  state.livelocation.lat = lat
                  state.livelocation.lng = lng
                  state.helpDomain = helpDomain
                  state.SpecifyHelp = SpecifyHelp
            },
            addSuitableSmLocation:(state,actions)=>{
                 state.AvailSMSLocation = [...state.AvailSMSLocation,actions.payload[0]]
                 console.log("STATE ALL LOCATION",state.AvailSMSLocation)
            },
            removeSutableFromList :(state,actions)=>{
                  state.AvailSMSLocation = []
             }

      },
      extraReducers: {
            [CmPostHelpSearch.fulfilled]: (state, actions) => {
                  const { lat, lng, helpDomain, SpecifyHelp } = actions.payload
                  state.livelocation.lat = lat
                  state.livelocation.lng = lng
                  state.helpDomain = helpDomain
                  state.SpecifyHelp = SpecifyHelp
            }
      }
})

export const { tempCmlive, addSuitableSmLocation, removeSutableFromList } = CmONHelpSearch.actions
export default CmONHelpSearch.reducer