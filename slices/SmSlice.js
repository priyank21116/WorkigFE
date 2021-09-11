import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const SmPerState = {
      name: "",
      email: "",
      phone: Number,
      emergencyNo: Number,
      description: "",
      setpassword: "",
      confirmPass: "",
      Rad1: "",
      Rad2: "",
      Rlandmark: "",
      Rcity: "",
      Rpin: Number,
      Rstate: "",
      adharNo: Number,
      ad1w: "",
      landmarkw: "",
      pincodew: Number,
      // image: "",
       // adharPhoto: "",
}

export const ARTpostphone=createAsyncThunk('/',)

export const ARTpatchFullregister=createAsyncThunk('/',)

export const ARTpostLogin=createAsyncThunk('/',)

export const ARTgetMyDetail=createAsyncThunk('/',)



export const SmSlice = createSlice({
      name: 'Sm',
      SmPerState,
      reducers: {
          
      }
})


export const { } = SmSlice.actions

export default SmSlice.reducer