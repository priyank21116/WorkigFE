import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosReq1 } from "./helpers/Axiosreq";
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginSm = {
      token: "",
      loading: false,
      error: "",
      rememberMe:false,
}

// export const ARTpostLoginNgrtToken=createAsyncThunk('/',)



export const LoginS = createAsyncThunk(
      'loginSM',
      async (body) => {
           
const res = await fetch(url + api,{
      method: "type",
      headers:{
            "Content-Type":"application/json",
            "Authorization": await AsyncStorage.getItem('token')
      },
     
 })
 return await res.json()

      })

export const RegisterS = createAsyncThunk(
      'registerSm',
      async (body) => {
            const result = await AxiosReq1('/register', body)
            return result

      }
)


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
            }
      },
      extraReducers: {
            [LoginS.fulfilled]: (state, { payload: { error, message } }) => {
                  state.loading = false
                  if (error) {
                        state.error = error
                        alert(error)
                  } else {
                        state.error = message
                        alert(message)

                  }
            },
            [LoginS.pending]: (state, action) => {
                  state.loading = true
            },
            [RegisterS.pending]: (state, action) => {
                  state.loading = true
            },
            [RegisterS.fulfilled]: (state, { payload: { error, token } }) => {
                  state.loading = false
                  if (error) {
                        state.error = error
                        alert(error)
                  } else {
                        state.token = token
                        AsyncStorage.setItem('token', token)
                  }
            },
            [addTokentostate.fulfilled]: (state, action) => {
                  state.token = action.payload
            }
      }

})

export const { logout } = authReducerSm.actions
export default authReducerSm.reducer