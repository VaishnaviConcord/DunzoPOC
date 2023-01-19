import { createSlice } from '@reduxjs/toolkit'
const name = 'currentOrder'
const initialState= {
    pickUpAddress:"33A, K.k.nagar, citadel enclave society, pune",
    deliveryAddress:"swiftwin ",
    category:"Document"

  }
export const counterSlice = createSlice({
  name,
  initialState,
  reducers: {
    SET_PICKUP_ADDRESS: (state) => {
        state.pickUpAddress=action.pickUpAddress
    },
    SET_DELIVERY_ADDRESS: (state) => {
        state.deliveryAddress=action.deliveryAddress
    },
    SET_CATOGERY:(state) =>{
        state.catogery=action.catogery
    }
    
  },
})

// Action creators are generated for each case reducer function
export const {SET_PICKUP_ADDRESS, SET_DELIVERY_ADDRESS, SET_CATOGERY    } = counterSlice.actions

export default counterSlice.reducer