import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const CPerinitialState = {
      Name: "",
      phone: 0,
      emergencyNo: 0,
      email: "",
      ad1: "",
      ad2: "",
      landmark: "",
      pin: 0,
      city: "",
      sstate: "",
      password: "",
      photo: " "
      // helpDomain: "",
      // SpecifyHelp: "",
      // NewreviewsC: {
      //       givenbyid: "",
      //       givenbyName: "",
      //       rating: 0,
      //       comment: "",
      // }
}

export const CMARTpostphone = createAsyncThunk('CmpostPhone',
      async (body) => {

            try {
                  // console.log(" CmpostPhone 1")

                  let res = await axios(
                        {
                              // baseURL: "http://localhost:9000/sm",
                              method: 'post',
                              url: "http://10.0.2.2:9000/client/registerone",
                              data: {
                                    phone: body
                              },
                              headers: {
                                    "Content-Type": "application/json"
                              }

                        })
                  // console.log("2")
                  // console.log("Phone RESPONSE CAME>>>>>>>>>>>>>>", res.data)
                  return body
                  // return res
            } catch (error) {
                  console.log("3")
                  console.log("THISSS URLLLLLL>>>>>>>", error)
            }
      }
)




export const CMARTpatchFullregister = createAsyncThunk('RegisterCmDeatils',
      async (body) => {
            // console.log("RECEIVED VALUE IN SLICE:::::::", body)
            try {
                  let res = await axios(
                        {

                              method: 'patch',

                              url: "http://10.0.2.2:9000/client/registertwo",
                              data: {
                                    CmPer: body
                              },
                              headers: {
                                    "Content-Type": "application/json"
                              }

                        })

                  // console.log("CM RESPONSE CAME>>>>>>>>>>>>>>", res)
                  return body

            } catch (error) {
                  console.log("THISSS REGISTER>>>>>>>", error)
            }
      }
)



const Cmlice = createSlice({
      name: 'Cmpersonal',
      initialState: CPerinitialState,
      reducers: {

            patchPhoto: (state, actions) => {
                  state.photo = actions.payload
            }

            // SMaddRegisteroneDetails: (state, actions) => {
            //       const { Name, email, emergencyNo, password, ad1, ad2, landmark, city, pin, sstate } = actions.payload

            //       state.name = Name
            //       state.email = email
            //       state.emergencyNo = emergencyNo
            //       state.password = password
            //       state.address.ad1 = ad1
            //       state.address.ad2 = ad2
            //       state.address.landmark = landmark
            //       state.address.city = city
            //       state.address.pin = pin
            //       state.address.sstate = sstate

            // },




      },
      extraReducers: {
            [CMARTpostphone.fulfilled]: (state, actions) => {
                  // console.log(" BEST here", actions.payload)
                  state.phone = actions.payload
            },
            [CMARTpatchFullregister.fulfilled]: (state, actions) => {

                  // console.log("4>>>>>>>>>>>>>>>>>>>", actions.payload)
                  const { Name, email, emergencyNo, password, ad1, ad2, landmark, city, pin, sstate } = actions.payload
                  // console.log("5")
                  state.Name = Name
                  state.email = email
                  state.emergencyNo = emergencyNo
                  state.password = password
                  state.ad1 = ad1
                  state.ad2 = ad2
                  state.landmark = landmark
                  state.city = city
                  state.pin = pin
                  state.sstate = sstate
                  // console.log("6")

                  // console.log("Staateeee::", state)

            }
      }
})


export const { CwritePhone, patchPhoto } = Cmlice.actions

export default Cmlice.reducer