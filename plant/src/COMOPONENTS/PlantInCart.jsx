import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import '../CSS/PlantInCart.css'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, handleItemCounter, handleIsCartEmpty, handleCostCalculator } from '../REDUX/SLICES/cart';
import Button from '@mui/material/Button';
import { RiDeleteBin5Line } from "react-icons/ri";
import Tooltip from '@mui/material/Tooltip';
import { toast } from 'react-toastify';

function PlantInCart( { plant } ) {
  const [counterInBasket, setCounterInBasket] = React.useState(plant.counter)

  const [isCartChanged, setIsCartChanged] = React.useState(false)


  const cartSlice = useSelector((store) => store.cartSlice)
  const plants = cartSlice.plants

  const dispatch = useDispatch()

  const handleMinus = () => {
    if(counterInBasket>0){
      setCounterInBasket(counterInBasket-1)
      setIsCartChanged(true)
    }
  }

  const handlePlus = () => {
    setCounterInBasket(counterInBasket+1)
    setIsCartChanged(true)
  }

  const handleUpdateCart = () => {
    setIsCartChanged(false)
    if (counterInBasket!=0){
      const newPlant = {
        cost : plant.cost,
        counter : counterInBasket,
        description : plant.description,
        image : plant.image,
        name : plant.name
      }
      dispatch(addToCart(newPlant))
      dispatch(handleItemCounter())
      dispatch(handleIsCartEmpty())
      dispatch(handleCostCalculator())
    }
    else{
      const newPlant = {
        cost : plant.cost,
        counter : counterInBasket,
        description : plant.description,
        image : plant.image,
        name : plant.name
      }
      dispatch(removeFromCart(newPlant))
      dispatch(handleItemCounter())
      dispatch(handleIsCartEmpty())
      dispatch(handleCostCalculator())
    }
    toast.success("Cart Updated");
  }

  const handleDeleteButton = () => {
    const newPlant = {
      cost : plant.cost,
      counter : counterInBasket,
      description : plant.description,
      image : plant.image,
      name : plant.name
    }

    dispatch(removeFromCart(newPlant))
    dispatch(handleItemCounter())
    dispatch(handleIsCartEmpty())
    dispatch(handleCostCalculator())
  }

  const theme = useTheme();

  return (
    <div className='flex-row'>
      <div className='flex-column' >
          <Card sx={{ display: 'flex', width:"500px", marginTop:"30px", height:"200px" }}>
          <CardMedia
            component="img"
            sx={{ maxWidth: "200px", height:"170px" }}
            image={plant.image}
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography sx={{fontFamily: "Verdana, sans-serif;"}} component="div" variant="h5">
                {plant.name}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: 'text.secondary', fontFamily: "Verdana, sans-serif;" }}
              >
                {plant.description}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent:"space-between", alignItems: 'center', pl: 1, pb: 1 }}>
              <div>
                <IconButton onClick={handleMinus} sx={{color: "#253D2C"}} aria-label="previous">
                  <FaMinus />
                </IconButton>
                <IconButton sx={{color: "#253D2C", fontFamily: "Verdana, sans-serif;"}} aria-label="play/pause">
                  {counterInBasket}
                </IconButton>
                <IconButton onClick={handlePlus} sx={{color: "#253D2C"}} aria-label="next">
                  <FaPlus />
                </IconButton>
              </div>
              <Tooltip title="Delete From Cart">
                <IconButton onClick={handleDeleteButton} sx={{color:"#253D2C",marginRight:"4px", }} >
                  <RiDeleteBin5Line />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Card>
        {
          isCartChanged ? <Button sx={{ width:"500px", backgroundColor:"#2E6F40"}} onClick={handleUpdateCart} variant="contained">UPDATE CART</Button> : <p></p>
        }
        
      </div>
      
      
      
    </div>
  )
}

export default PlantInCart