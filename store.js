import { configureStore } from '@reduxjs/toolkit'
import  CmSlice from './slices/CmSlice'
import  SmSlice from './slices/SmSlice'


export const store = configureStore({
  reducer: {
        // Cm: CmSlice,
        Sm: SmSlice,
  },
})