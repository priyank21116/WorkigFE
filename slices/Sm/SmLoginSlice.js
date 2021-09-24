import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


const LoginSm = {
      token: "",
      loading: false,
      error: "",
      rememberMe: true,
}
// res.data.token

// export const ARTpostLoginNgrtToken=createAsyncThunk('/',)



export const SmLoginValidation = createAsyncThunk(
      'loginSM',
      async (body) => {

            // console.log("4 LoginSlice",body)
            await axios({
                  method: "post",
                  url: "http://10.0.2.2:9000/sm/login",
                  data: body,
                  headers: {
                        "Content-Type": "application/json",
                        // "Authorization": await AsyncStorage.getItem('token')
                  },

            }).then(async (response)=> {
                  console.log("SmLoginValidation<<<<<<<<<", response.data.token)
                   AsyncStorage.setItem('Stoken', response.data.token)
                  return response
                  // return body
                  //  if(response.data.token){return response.data.token}
                  //  else{return false}
                   
                  // return response.data
                 
            }).catch(function (error) {
                  console.log("EREKEMNRM::::",error)
            })
                  // .catch(function (error) {
                  //       if (error.response) {

                  //             console.log(error.response);
                  //             state.error = error
                  //             alert(error)
                  //       } else if (error.request) {

                  //             console.log(error.request);
                  //             state.error = error
                  //             alert(error)
                  //       } else {

                  //             console.log('Error', error.message);
                        
                  //       state.error = error
                  //       alert(error)}
                  //       console.log(error.config);

                  // })

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
                  console.log("SM Rmemberme",state.rememberMe)
            }
      },
      extraReducers: {
            
            [SmLoginValidation.pending]: (state, action) => {
                  state.loading = true
            },
            [SmLoginValidation.fulfilled]: (state,actions) => {
                          console.log("ACTIONS LOGIN",actions)
                          console.log("::::::::::",state.rememberMe)
                        //   actions.meta.arg
                        // state.loading = false
                        // state.token=actions.payload
                       
                        //   if (state.rememberMe ===false) {
                        //             const token = AsyncStorage.removeItem('Stoken')
                        //             console.log("TOKENREMOVED FRORM ASYNC STORAGE",token)
                        //       }
                       
                       
            },
            [addTokentostate.fulfilled]: (state, action) => {
                  state.token = action.payload
            }
      }

})

export const { logout, SmRememberMeAction } = authReducerSm.actions
export default authReducerSm.reducer