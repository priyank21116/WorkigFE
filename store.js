import { configureStore } from '@reduxjs/toolkit'
// import  CmSlice from './slices/CmSlice'
// import  SmSlice from './slices/SmSlice'
import GenralSlice from './slices/GenralSlice'

const store = configureStore({
  reducer: {
        // Cm: CmSlice,
        // Sm: SmSlice,
        Genral : GenralSlice
  },
})

export default store;