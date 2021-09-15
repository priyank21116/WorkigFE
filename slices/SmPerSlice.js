import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const SmPerState = {
      name: "",
      email: "",
      phone: "",
      emergencyPhone: "",
      about: "",
      password: "",
      confirmPass: "",
      Rad1: "",
      Rad2: "",
      Rlandmark: "",
      Rcity: "",
      Rpin: "",
      Rstate: "",
      adharNo: 0,
      ad1w: "",
      landmarkw: "",
      pincodew: 0,
      // Newreviews: {
      //       givenbyid: "",
      //       givenbyname: "",
      //       rating: 0,
      //       comment: "",
      // }
      // image: "",
      // adharPhoto: "",
}

export const ARTpostphone = createAsyncThunk('SmpostPhone',
      async (body) => {
            // const url = "http://192.168.29.199:9000/sm/registerone"
            try {
                  console.log("1")
                  // const res= await axios.post('url',{phone:body})
                  let res = await axios(
                        {
                              // baseURL: "http://localhost:9000/sm",
                              method: 'post',
                              url: "http://10.0.2.2:9000/sm/registerone",
                              data: {
                                    phone: body
                              },
                              headers: {
                                    "Content-Type": "application/json"
                              }

                        })
                  // console.log("2")
                  console.log("Phone RESPONSE CAME>>>>>>>>>>>>>>", res.data)
                  return body
                  // return res
            } catch (error) {
                  console.log("3")
                  console.log("THISSS URLLLLLL>>>>>>>", error)
            }
      }
)

export const ARTpatchFullregister = createAsyncThunk('RegisterSmDeatils',
      async (body) => {
            try {
                  let res = await axios(
                        {

                              method: 'patch',
                              url: "http://10.0.2.2:9000/sm/registertwo",
                              data: {
                                    SmPer: body
                              },
                              headers: {
                                    "Content-Type": "application/json"
                              }

                        })
                  // console.log("2")
                  console.log("Phone RESPONSE CAME>>>>>>>>>>>>>>", res)

            } catch (error) {
                  console.log("THISSS REGISTER>>>>>>>", error)
            }
      }
)

//  http://localhost:9000/sm/registertwo

// export const ARTgetMyDetail=createAsyncThunk('/',)

// export const Post new Review=createAsyncThunk('/',)




const SmSlice = createSlice({
      name: 'Sm',
      initialState: SmPerState,
      reducers: {
            SmwritePhone: (state, actions) => {
                  state.phone = actions.payload
            },
            SMaddRegisteroneDetails: (state, actions) => {
                  state.name = actions.payload.name
                  state.email = actions.payload.email
                  state.emergencyPhone = actions.payload.emergencyPhone
                  state.about = actions.payload.about
                  state.ad1w = actions.payload.ad1w
                  state.landmarkw = actions.payload.landmarkw
                  state.pincodew = actions.payload.pincodew

            },
            SMaddRegistertwoDetails: (state, actions) => {
                  state.password = actions.payload.password
                  state.confirmPass = actions.payload.confirmPass
                  state.Rad1 = actions.payload.Rad1
                  state.Rad2 = actions.payload.Rad2
                  state.Rlandmark = actions.payload.Rlandmark
                  state.Rcity = actions.payload.Rcity
                  state.Rpin = actions.payload.Rpin
                  state.Rstate = actions.payload.Rstate
                  state.adharNo = actions.payload.adharNo
            },
            // addSmReview: (state, actions) => {
            //       const { givenbyid, givenbyname, rating, comment } = actions.payload
            //       state.Newreviews.givenbyid = givenbyid
            //       state.Newreviews.givenbyname = givenbyname
            //       state.Newreviews.rating = rating
            //       state.Newreviews.comment = comment
            // }

      },
      extraReducers: {

            //set phoneinstate
            [ARTpostphone.fulfilled]: (state, actions) => {
                  state.phone = actions.payload
            }
            // set full state in successful login

      }

})


export const { SmwritePhone, SMaddRegisteroneDetails, SMaddRegistertwoDetails } = SmSlice.actions

export default SmSlice.reducer