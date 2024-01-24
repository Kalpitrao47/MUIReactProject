import React from 'react'
import{AppBar, Box, Toolbar, Typography} from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
        <Box>
        <AppBar component={"nav"} sx={{bgcolor:"black"}}>
        <Toolbar>
        
        <Typography>
        <RestaurantIcon/>
            Resto_Bar
        </Typography>

        <Box sx={{
            display:{xs:'none' , sm:'block'  }
        }}>
            <ul className='navigation-menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            </ul>
        </Box>

        </Toolbar>
        </AppBar>
        </Box>
    </div>
  )
}

export default Header
