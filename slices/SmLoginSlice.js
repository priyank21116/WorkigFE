import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosReq1 } from "./helpers/Axiosreq";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


const LoginSm = {
      token: "",
      loading: false,
      error: "",
      rememberMe: false,
}
// res.data.token

// export const ARTpostLoginNgrtToken=createAsyncThunk('/',)



export const SmLoginValidation = createAsyncThunk(
      'loginSM',
      async (body) => {



            console.log(" THEN 1", body)
            await axios({
                  method: "post",
                  url: "http://10.0.2.2:9000/sm/login",
                  data: body,
                  headers: {
                        "Content-Type": "application/json",
                        // "Authorization": await AsyncStorage.getItem('token')
                  },

            }).then(function (response) {
                  console.log("RESSPONSE CAME<<<<<<<<<", response.status)
                  return response.data
            })
                  .catch(function (error) {
                        if (error.response) {

                              console.log(error.response);
                              state.error = error
                              alert(error)
                        } else if (error.request) {

                              console.log(error.request);
                              state.error = error
                              alert(error)
                        } else {

                              console.log('Error', error.message);
                        
                        state.error = error
                        alert(error)}
                        console.log(error.config);

                  })

      })



export const addTokentostate = createAsyncThunk(
      'addtoken',
      async () => {
            const result = await AsyncStorage.getItem('token')
            return result

      }
)



const authReducerSm = createSlice({
      name: "SmLogin",
      initialState: LoginSm,
      reducers: {

            logout: (state, action) => {
                  state.token = null
                  AsyncStorage.removeItem('token')
            },
            RememberMeAction: (state, action) => {
                  state.rememberMe = action.payload
                  console.log("RMEM",state.rememberMe)
            }
      },
      extraReducers: {
            // [LoginS.fulfilled]: (state, { payload: { error, message } }) => {
            //       state.loading = false
            //       if (error) {
            //             state.error = error
            //             alert(error)
            //       } else {
            //             state.error = message
            //             alert(message)

            //       }
            // },
            // [LoginS.pending]: (state, action) => {
            //       state.loading = true
            // },
            [SmLoginValidation.pending]: (state, action) => {
                  state.loading = true
            },
            [SmLoginValidation.fulfilled]: (state, action) => {


                        //  state.loading = false
                 
                       
                        console.log("HERE THE BESTS>>>>>>>>..", action.payload)
                        // , " RMMRMRM", state.rememberMe
                        // if (state.rememberMe) {
                        //       AsyncStorage.setItem('token', token)
                        //       const token = AsyncStorage.getItem('token')
                        //       console.log(" LOCAL STORAGE TOKEN", token)
                        // }

                  
            },
            [addTokentostate.fulfilled]: (state, action) => {
                  state.token = action.payload
            }
      }

})

export const { logout, RememberMeAction } = authReducerSm.actions
export default authReducerSm.reducer