import React from 'react'
import '../CSS/Cost.css'
import { useSelector } from 'react-redux'

function Cost() {

  const cartSlice = useSelector((store) => store.cartSlice)
  const productCost = cartSlice.productCost
  const shippingCost = cartSlice.shippingCost
  const totalCost = cartSlice.totalCost

  return (
    <div>
      <div className='cost-box'>
        <div className='cost-div'>
          <p className='cost-typography' >Product cost :</p>
          <p className='cost-typography' >{productCost}$</p>
        </div>
        <div className='cost-div'>
          <p className='cost-typography' >Shipping cost :</p>
          <p className='cost-typography' >{shippingCost}$</p>
        </div>
        <div className='cost-div'>
          <p className='cost-typography' >Add a coupon :</p>
          <input placeholder='Optional' className='promo' />
        </div>
        <div className='horizontal-divider'>
        </div>
        <div className='cost-div'>
          <p className='cost-typography' >Total cost :</p>
          <p className='cost-typography' >{totalCost}$</p>
        </div>
      </div>
    </div>
  )
}

export default Cost