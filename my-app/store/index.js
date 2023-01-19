import { configureStore } from '@reduxjs/toolkit'
import  currentOrder from './reducers/currentOrder';
import logger from 'redux-logger'

export default configureStore({
  reducer: {
    currentOrder,
  },
  middleware:[logger]
})