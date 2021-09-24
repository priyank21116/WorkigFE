import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const GinitialState = {
      typeOUs: ""
}

export const GenralSlice = createSlice({
      name: 'Genraltypeof',
      initialState: GinitialState,
      reducers: {
            TypeofUSer: (state, actions) => {
                 
                  state.typeOUs = actions.payload
                  // console.log(" 1 ACTIon:::::TypeofUSer::",actions)
                  try {
                        AsyncStorage.setItem('typeOfUser', actions.payload)
                  } catch (e) {
                        console.log("Type of user not saved in AsyncStorage",e)
                  }
            }

      }
})


export const { TypeofUSer } = GenralSlice.actions

export default GenralSlice.reducer