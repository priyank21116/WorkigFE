import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosReq1 } from "./helpers/Axiosreq";
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";

const LoginCm = {
      token: "",
      loading: false,
      error: "",
      rememberMe:false,
}

// export const ARTpostLoginNgrtToken=createAsyncThunk('/',)





export const CmLoginValidation = createAsyncThunk(
      'loginCM',
      async (body) => {
 
            await axios({
                  method: "post",
                  url: "http://10.0.2.2:9000/client/login",
                  data: body,
                  headers: {
                        "Content-Type": "application/json",
                        
                  },

            }).then(async (response)=> {
                  console.log("RESSPONSE CAME<<<<<<<<<", response.json())
                  //  await AsyncStorage.setItem('token', response.data.token)
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





const authReducerCm = createSlice({
      name: "CmLogindetails",
      initialState: LoginCm,
      reducers: {

            logout: (state, action) => {
                  state.token = null
                  AsyncStorage.removeItem('token')
            },
            CmRememberMeAction: (state, action) => {
                  state.rememberMe = action.payload
                  console.log("CM Rmemberme silce",state.rememberMe)
            }
      },
      extraReducers: {
           
            [CmLoginValidation.fulfilled]:(state,actions)=>{
              console.log( "   reducer CAME" ,actions)
              console.log("STATE:::::::",state)

            }
         
      }

})

export const { logout,CmRememberMeAction } = authReducerCm.actions
export default authReducerCm.reducer