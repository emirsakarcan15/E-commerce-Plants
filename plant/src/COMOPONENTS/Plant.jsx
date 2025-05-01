import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../CSS/Plant.css'
import { IconButton } from '@mui/material';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Divider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, handleItemCounter, handleIsCartEmpty, handleCostCalculator } from '../REDUX/SLICES/cart';
import { toast } from 'react-toastify';



function Plant({ plant }) {

    const dispatch = useDispatch()
    const [counter, setCounter] = React.useState(0)

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const handleMinus = () => {
        if(counter<1){
            setCounter(counter)
        }
        else{
            setCounter(counter - 1)
        }
    }

    const [added, setAdded] = React.useState(false)

    const handleRemoveFromCart = () => {
        setCounter(0)
        setAdded(false)
        dispatch(removeFromCart(plant))
        dispatch(handleItemCounter())
        dispatch(handleIsCartEmpty())
        dispatch(handleCostCalculator())
        toast.success("Removed From Cart");
    }


    const handleAddToCart = () => {
        if(counter>0){
            let plantWithCounter = { ...plant, counter: counter}
            setAdded(true)
            dispatch(addToCart(plantWithCounter))
            dispatch(handleItemCounter())
            dispatch(handleIsCartEmpty())
            dispatch(handleCostCalculator())
            toast.success("Added To Cart");
        }
        
    }

  return (
    <div className='plants-wrapper'>
        <Card className='flex-column' sx={{ width: 345 }}>
            <CardMedia
                component="img"
                alt="img"
                height="300"
                image={plant.image}
            />
            <CardContent className='flex-column' >
                <Typography gutterBottom variant="h5" sx={{fontWeight: "550", fontFamily:"Verdana, sans-serif"}} component="div">
                {plant.name}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontFamily:"Verdana, sans-serif"}}>
                {plant.description}
                </Typography>
            </CardContent>
            <Divider
  orientation="vertical"
  flexItem
  sx={{ backgroundColor: 'gray', height: '2px', width: '400px', marginBottom:"5px", marginTop:"7px" }}
/>
            <CardActions >
                <IconButton sx={{fontSize: "30px", color: "#253D2C"}} onClick={handleMinus}>
                    <FaMinus />
                </IconButton>
                <Typography sx={{fontSize: "30px", color: "#253D2C"}} >
                    {counter}
                </Typography>
                <IconButton sx={{fontSize: "30px", color: "#253D2C"}} onClick={handlePlus} >
                    <FaPlus />
                </IconButton>
            </CardActions>
            <div>
                {
                    added ? ( <div className='flex-row'> <Button onClick={handleAddToCart} sx={{width: "190px", backgroundColor: "#68BA7F", borderRadius: "0px", height: "50px", fontFamily:"Verdana, sans-serif", '&:hover': { backgroundColor:"#2E6F40", transition:"0.6s"}}} variant="contained">ADD TO CART</Button> <Button onClick={handleRemoveFromCart} sx={{width: "190px", borderRadius: "0px", backgroundColor: "#FF0000", height: "50px", fontFamily:"Verdana, sans-serif", '&:hover': { backgroundColor:"#CC0000", transition:"0.6s"}}} variant="contained">REMOVE FROM CART</Button> </div> ): <Button onClick={handleAddToCart} sx={{width: "400px", backgroundColor: "#68BA7F", height: "50px", fontFamily:"Verdana, sans-serif", '&:hover': { backgroundColor:"#2E6F40", transition:"0.6s"}}} variant="contained">ADD TO CART</Button>
                }
            </div>
        </Card>
    </div>
  )
}

export default Plant