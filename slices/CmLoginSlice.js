import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosReq1 } from "./helpers/Axiosreq";
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginCm = {
      token: "",
      loading: false,
      error: "",
      rememberMe:false,
}

// export const ARTpostLoginNgrtToken=createAsyncThunk('/',)

export const LoginC = createAsyncThunk(
      'loginSM',
      async (body) => {
            const result = await AxiosReq1('/login', body)
            return result

      })

export const RegisterC = createAsyncThunk(
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



const authReducerCm = createSlice({
      name: "CmLogin",
      initialState: LoginCm,
      reducers: {

            logout: (state, action) => {
                  state.token = null
                  AsyncStorage.removeItem('token')
            }
      },
      extraReducers: {
            [LoginC.fulfilled]: (state, { payload: { error, message } }) => {
                  state.loading = false
                  if (error) {
                        state.error = error
                        alert(error)
                  } else {
                        state.error = message
                        alert(message)

                  }
            },
            [LoginC.pending]: (state, action) => {
                  state.loading = true
            },
            [RegisterC.pending]: (state, action) => {
                  state.loading = true
            },
            [RegisterC.fulfilled]: (state, { payload: { error, token } }) => {
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

export const { logout } = authReducerCm.actions
export default authReducerCm.reducer