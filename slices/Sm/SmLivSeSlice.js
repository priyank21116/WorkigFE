import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const SmlivService = {

      livelocation: {
            lat: 0,
            lng: 0
      },
      Domain: "",
}


export const SmPostWOrkSearch = createAsyncThunk(
      'SmPostWOrkSearch',
      async (body) => {
            // console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::;",body)
            try {
                  // console.log("1")
                  let response = await axios({
                        method: "post",
                        url: "http://10.0.2.2:9000/Smser/ActivateSm",
                        data: body,
                        headers: {
                              "Content-Type": "application/json",
                              "Authorization": await AsyncStorage.getItem('Stoken')
                        }

                  })
                  // console.log("2")

                  console.log("SmPostWOrkSearch<<<<<", response.data)
                  return body
            } catch (error) {
                  console.log(" ERROR<<SmPostWOrkSearc", error)
            }
      })



const SmONWorkSearch = createSlice({
      name: "SmONWorkSearch",
      initialState: SmlivService,
      reducers: {
            tempSmlive: (state, actions) => {
                  const { latitude, longitude, Domain } = actions.payload
                  state.livelocation.lat = latitude
                  state.livelocation.lng = longitude
                  state.Domain = Domain

            }

      },
      extraReducers: {
            [SmPostWOrkSearch.fulfilled]: (state, actions) => {
                  const { latitude, longitude, Domain } = actions.payload
                  state.livelocation.lat = latitude
                  state.livelocation.lng = longitude
                  state.Domain = Domain
                  // console.log("SmPostWOrkSearch state",state)
            }
      }
})

export const { tempSmlive } = SmONWorkSearch.actions
export default SmONWorkSearch.reducer