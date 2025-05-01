import * as React from 'react';
import '../CSS/GetStarted.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom'

function GetStartedCard() {

  const navigate = useNavigate()

  const handleGetStartedButton = ()=> {
    navigate("/productlist")
  }

  return (
    <div className='get-started'>
        <Card sx={{ maxWidth: 400, maxHeight: 900 }}>
        <CardMedia
        className='card-image' sx={{ height: 378 }} />
        <CardContent className='card-content'>
          <Typography  sx={{fontFamily:"Verdana, sans-serif", fontWeight: 'bold', fontSize: '20px'}} >
            Welcome to Paradise Nursery
          </Typography>
          <Divider
  orientation="vertical"
  flexItem
  sx={{ backgroundColor: '#2E5F40', height: '2px', width: '180px', marginLeft:"80px", marginBottom:"5px", marginTop:"7px" }}
/>
          <Typography sx={{fontFamily:"Verdana, sans-serif", fontSize: '15px'}}>
          Where green meets serenity
            </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleGetStartedButton} className='get-started-button' sx={{ width:"480px", backgroundColor:"#2E5F40", color:"white", '&:hover': { backgroundColor:"#253D2C", transition: "0.6s"}}} >Get Started</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default GetStartedCard