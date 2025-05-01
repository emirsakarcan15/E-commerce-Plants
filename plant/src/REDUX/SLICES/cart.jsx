import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plants: [],
  itemsInCart: 0,
  isCartEmpty: true,
  productCost: 0,
  shippingCost: 0,
  totalCost: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart : (state, action) => {
      const existingPlant = state.plants.find(
        (plant) => plant.name === action.payload.name
      );
      if (existingPlant) {
        existingPlant.counter = action.payload.counter;
      } else {
        state.plants.push(action.payload);
      }
      console.log("Cart:", JSON.parse(JSON.stringify(state.plants)));
  },

    removeFromCart : (state, action) => {
      const newPlants = state.plants.filter(plant => action.payload.name != plant.name)
      state.plants = newPlants
      console.log(state.plants)
    },

    handleItemCounter : (state) => {
      let sum = 0;

      if(state.plants.length>0){
        state.plants.map((plant) => {
          sum += plant.counter
          state.itemsInCart = sum
        })
      }else {
        state.itemsInCart = 0
      }
      console.log(state.itemsInCart)
    },

    handleIsCartEmpty : (state) => {
      if(state.itemsInCart>0){
        state.isCartEmpty = false
      }else {
        state.isCartEmpty = true
      }
      console.log(state.isCartEmpty)
    },

    handleCostCalculator : (state) => {
      let singleProductCost = 0;
      let totalProductCost = 0;

      state.plants.map((plant) => {
        singleProductCost = parseFloat(plant.counter) * parseFloat(plant.cost)
        totalProductCost = totalProductCost + singleProductCost;
      })

      state.productCost = totalProductCost;
      state.shippingCost = 0;
      state.totalCost = state.shippingCost + state.productCost
    }
  }  
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, handleItemCounter, handleIsCartEmpty, handleCostCalculator } = cartSlice.actions

export default cartSlice.reducer