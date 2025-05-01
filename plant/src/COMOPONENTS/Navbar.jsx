import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '@mui/material';
import { MenuItem} from '@mui/material';
import { Tooltip } from '@mui/material';
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';

function Navbar() {

    const cartSlice = useSelector((store) => store.cartSlice)
    const itemsInCart = cartSlice.itemsInCart

    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCLickHome = () => {
        setAnchorElNav(null);
        navigate("/")   
    };

    const handleCLickProducts = () => {
        setAnchorElNav(null);
        navigate("/productlist")   
    };

    const handleBasketButton = () => {
        navigate("/basket")
    }

    const handleClickHeader = () => {
        navigate("/")
    }

  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar sx={{backgroundColor:"#68BA7F", color:"white"}} position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={handleOpenNavMenu}
            >
                <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block' } }}
            >
                <MenuItem onClick={handleCLickHome}>
                    <FaHome /> <Typography sx={{marginLeft:"5px"}} >Home</Typography>
                </MenuItem>
                <MenuItem onClick={handleCLickProducts}>
                    <RiPlantFill /> <Typography sx={{marginLeft:"5px"}} >Products</Typography>
                </MenuItem>
            </Menu>
            <Typography
            onClick={handleClickHeader}
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, fontFamily: "Verdana", '&:hover': { cursor:"pointer"}, display: { xs: 'none', sm: 'block' }}}
            >
                Paradise Nursery
            </Typography>
            <Tooltip title="View Cart" >
                <IconButton onClick={handleBasketButton} sx={{color:"white"}} >
                    <Badge badgeContent={itemsInCart} color="primary">
                        <FaCartShopping />
                    </Badge>
                </IconButton>
            </Tooltip>
            </Toolbar>
         </AppBar>
        </Box>

    </div>
  )
}

export default Navbar