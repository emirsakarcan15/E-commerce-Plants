import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './SLICES/cart'

export const store = configureStore({
  reducer: {
    cartSlice : cartReducer
  },
})