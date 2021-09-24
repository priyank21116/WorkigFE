import { configureStore } from '@reduxjs/toolkit';
import CmPerSlice from './slices/Cm/CmPerSlice';
import SmPerSlice from './slices/Sm/SmPerSlice';
import GenralSlice from './slices/GenralSlice';
import SmLoginSlice from './slices/Sm/SmLoginSlice';
import CmLoginSlice from './slices/Cm/CmLoginSlice';
import CmLivSerSlice from './slices/Cm/CmLivSerSlice';
import SmLivSeSlice from './slices/Sm/SmLivSeSlice';


const store = configureStore({
  reducer: {
        CmPer: CmPerSlice,
        CmLogin: CmLoginSlice,
        CmLivSer:CmLivSerSlice,
        SmPer: SmPerSlice,
        SmLogin: SmLoginSlice,
        SmLivSe: SmLivSeSlice,
        Genral : GenralSlice,

  }
})

export default store;