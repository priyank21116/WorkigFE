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
}

export const CmPostHelpSearch = createAsyncThunk(
      'CmPostHelpSearch',
      async (body) => {
            try {
                  let response = await axios({
                        method: "post",
                        url: " ",
                        data: body,
                        headers: {
                              "Content-Type": "application/json",
                              "Authorization": await AsyncStorage.getItem('token')

                        }

                  })

                  console.log("CmPostHelpSearch<<<<<", response)
                  return body
            } catch (error) {
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

export const {tempCmlive } = CmONHelpSearch.actions
export default CmONHelpSearch.reducer