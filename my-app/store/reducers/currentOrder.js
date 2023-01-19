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
    setPickupAddress: (state,action) => {
        state.pickUpAddress=action.payload
    },
    setDeliveryAddress: (state,action) => {
        state.deliveryAddress=action.payload
    },
    setCategory:(state,action) =>{
        state.category=action.payload
    }
    
  },
})

// Action creators are generated for each case reducer function
export const {setPickupAddress,setDeliveryAddress , setCategory } = counterSlice.actions

export default counterSlice.reducer