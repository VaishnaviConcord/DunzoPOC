import { configureStore } from '@reduxjs/toolkit'
import  currentOrder from './reducers/currentOrder';

export default configureStore({
  reducer: {
    currentOrder,
  },
})