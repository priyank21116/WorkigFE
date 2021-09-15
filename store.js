import { configureStore } from '@reduxjs/toolkit';
import CmPerSlice from './slices/CmPerSlice';
import SmPerSlice from './slices/SmPerSlice';
import GenralSlice from './slices/GenralSlice';
import SmLoginSlice from './slices/SmLoginSlice';
import CmLoginSlice from './slices/CmLoginSlice';
import { composeWithDevTools } from 'remote-redux-devtools';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
        CmPer: CmPerSlice,
        CmLogin: CmLoginSlice,
        SmPer: SmPerSlice,
        SmLogin: SmLoginSlice,
        Genral : GenralSlice
  }
})

export default store;