import { createSlice } from "@reduxjs/toolkit";

const GinitialState = {
      typeOUs: ""
}

export const GenralSlice = createSlice({
      name: 'Cm',
      initialState: GinitialState,
      reducers: {
            TypeofUSer: (state, action) => {
                  state.typeOUs = action.payload
            }
      }
})


export const { TypeofUSer } = GenralSlice.actions

export default GenralSlice.reducer