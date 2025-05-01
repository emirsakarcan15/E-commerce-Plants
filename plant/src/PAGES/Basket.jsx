import React, { useState } from 'react'
import Navbar from '../COMOPONENTS/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import PlantInCart from '../COMOPONENTS/PlantInCart'
import CartEmpty from '../COMOPONENTS/CartEmpty'
import { handleIsCartEmpty } from '../REDUX/SLICES/cart'
import Cost from '../COMOPONENTS/Cost'
import '../CSS/Basket.css'

function Basket() {

  const cartSlice = useSelector((store) => store.cartSlice )
  const plants = cartSlice.plants
  const dispatch = useDispatch()
  dispatch(handleIsCartEmpty())
  const isCartEmpty = cartSlice.isCartEmpty

  console.log(plants)

  return (
    <div>
      <Navbar />
      {
        isCartEmpty 
        
        ?

        <CartEmpty />

        :
        
        (<div className='cart-wrapper' >

          <div>
            {plants && plants.map((plant, index) => (
              <PlantInCart key={index} plant={plant} />
            ))}
          </div>

          <Cost />

        </div>)

        

        

      }
    </div>
  )
}

export default Basket