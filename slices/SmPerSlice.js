import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
      Newreviews: {
            givenbyid: "",
            givenbyname: "",
            rating: Number,
            comment: "",
      }
      // image: "",
      // adharPhoto: "",
}

// export const ARTpostphone=createAsyncThunk('/',)

// export const ARTpatchFullregister=createAsyncThunk('/',)

// export const ARTpostLoginNgrtToken=createAsyncThunk('/',)

// export const ARTgetMyDetail=createAsyncThunk('/',)

// export const Post new Review=createAsyncThunk('/',)




export const SmSlice = createSlice({
      name: 'Sm',
      initialState: SmPerState,
      reducers: {
            SmwritePhone: (state, actions) => {
                  state.phone = actions.payload
            },
            SMaddRegisteroneDetails: (state, actions) => {
                  state.name = actions.payload.name
                  state.email = actions.payload.email
                  state.emergencyNo = actions.payload.emergencyNo
                  state.description = actions.payload.description
                  state.ad1w = actions.payload.ad1w
                  state.landmarkw = actions.payload.landmarkw
                  state.pincodew = actions.payload.pincodew

            },
            SMaddRegistertwoDetails: (state, actions) => {
                  state.setpassword = actions.payload.setpassword
                  state.confirmPass = actions.payload.confirmPass
                  state.Rad1 = actions.payload.Rad1
                  state.Rad2 = actions.payload.Rad2
                  state.Rlandmark = actions.payload.Rlandmark
                  state.Rcity = actions.payload.Rcity
                  state.Rpin = actions.payload.Rpin
                  state.Rstate = actions.payload.Rstate
                  state.adharNo = actions.payload.adharNo
            },
            addSmReview: (state, actions) => {
                 const  {givenbyid,givenbyname,rating,comment} = actions.payload
                  state.Newreviews.givenbyid= givenbyid
                  state.Newreviews.givenbyname=givenbyname
                  state.Newreviews.rating =rating
                  state.Newreviews.comment =comment
            }

      },
      extraReducers: {
            // set token
            //set phone in state

            // set full state in successful login

      }

})


export const { SmwritePhone, SMaddRegisteroneDetails, SMaddRegistertwoDetails } = SmSlice.actions

export default SmSlice.reducer