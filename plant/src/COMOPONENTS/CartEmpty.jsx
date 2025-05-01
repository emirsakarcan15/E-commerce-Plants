import * as React from 'react';
import "../CSS/CartEmpty.css"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function CartEmpty() {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/productlist")
  }

  return (
    <div className='flex-row'>
        <div className='cart-empty-wrapper'>
          <div>
            Your cart is empty.
          </div>
          <div>
            <Button variant="contained" onClick={handleClick} sx={{backgroundColor: "#2E6F40", width:"200px", marginTop:"20px" }} >START SHOPPING</Button>
          </div>
        </div>

        
    </div>
  )
}

export default CartEmpty