import { configureStore } from '@reduxjs/toolkit';
import { addressSlice } from '../Screens/Address/index';
import  currentOrder from './reducers/currentOrder';
import logger from 'redux-logger'

const store = configureStore({
  reducer: {
    currentOrder,
    addressSlice
  },
  middleware:[logger]
})

export default store;
