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

            
            await axios({
                  method: "post",
                  url: "http://10.0.2.2:9000/sm/login",
                  data: body,
                  headers: {
                        "Content-Type": "application/json",
                        // "Authorization": await AsyncStorage.getItem('token')
                  },

            }).then(async (response)=> {
                  console.log("RESSPONSE CAME<<<<<<<<<", response.data)
                   await AsyncStorage.setItem('token', response.data.token)
                  // return response.data
                 
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



 const addTokentostate = createAsyncThunk(
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
            SmRememberMeAction: (state, action) => {
                  state.rememberMe = action.payload
                  console.log("SM Rmemberme silce",state.rememberMe)
            }
      },
      extraReducers: {
            
            [SmLoginValidation.pending]: (state, action) => {
                  state.loading = true
            },
            [SmLoginValidation.fulfilled]: async (state,actions) => {

                  

                  const tokenn= await AsyncStorage.getItem('token')
                  // console.log("TOKENSET TO LOCAL STORAGE",tokenn)
                         state.loading = false
                        state.token= tokenn
                       
                          if (state.rememberMe ===false) {
                                    AsyncStorage.setItem('token', token)
                                    const token = AsyncStorage.removeItem('token')
                                   
                              }
                       
                        console.log("HERE THE BESTS>>>>>>>>..",state.token, " RMMRMRM", state.rememberMe)
                  

                  
            },
            [addTokentostate.fulfilled]: (state, action) => {
                  state.token = action.payload
            }
      }

})

export const { logout, SmRememberMeAction } = authReducerSm.actions
export default authReducerSm.reducer