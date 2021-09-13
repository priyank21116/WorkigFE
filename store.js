import { configureStore } from '@reduxjs/toolkit';
import CmPerSlice from './slices/CmPerSlice';
import SmPerSlice from './slices/SmPerSlice';
import GenralSlice from './slices/GenralSlice';

const store = configureStore({
  reducer: {
        Cm: CmPerSlice,
        Sm: SmPerSlice,
        Genral : GenralSlice
  },
})

export default store;