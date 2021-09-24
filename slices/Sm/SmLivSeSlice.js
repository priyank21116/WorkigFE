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
            console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::;",body)
            try {
                  console.log("1")
                  let response = await axios({
                        method: "post",
                        url: "http://localhost:9000/Smser/ActivateSm",
                        data: body,
                        headers: {
                              "Content-Type": "application/json",
                              "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTQ1Nzc4MjEwZTUwZTBjNmM2NzdjNTMiLCJpYXQiOjE2MzE5NDI4ODh9.8M0MrmUXgIFxajRf0mFO2Jvhcx9C8YA5Q0buohKb1lE"
                              // await AsyncStorage.getItem('token')

                        }

                  })
                  console.log("2")

                  console.log("SmPostWOrkSearch<<<<<", response)
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
            }
      }
})

export const { tempSmlive } = SmONWorkSearch.actions
export default SmONWorkSearch.reducer