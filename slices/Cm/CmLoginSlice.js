import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";

const LoginCm = {
      token: "",
      loading: false,
      error: "",
      rememberMe: true,
}

// export const ARTpostLoginNgrtToken=createAsyncThunk('/',)





export const CmLoginValidation = createAsyncThunk(
      'loginCM',
      async (body) => {
            //   console.log("BODY RECEIVED:::",body)
            await axios({
                  method: "post",
                  url: "http://10.0.2.2:9000/client/login",
                  data: body,
                  headers: {
                        "Content-Type": "application/json",

                  },

            }).then((response) => {
                  // console.log("2.1 CmLoginValidation   RESSPONSE <<<<<<<<<", response)
                  AsyncStorage.setItem('Ctoken', response.data.token)
                  return body

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
                              alert(error)
                        }
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
                  console.log("CM Rmemberme silce", state.rememberMe)
            }
      },
      extraReducers: {

            [CmLoginValidation.fulfilled]: (state, actions) => {
                    console.log( " EXTRA REDUCER  reducer CAME" ,actions)
                  //   console.log("EXTRA REDUCER STATE:::::::",state)
                  // const tokk = AsyncStorage.getItem('Ctoken')
                  // state.token = tokk
                  // if (state.rememberMe === false) {

                  //       AsyncStorage.removeItem('Ctoken')
                  //       console.log("TOKENREMOVED FRORM ASYNC STORAGE")
                  // }

            }

      }

})

export const { logout, CmRememberMeAction } = authReducerCm.actions
export default authReducerCm.reducer