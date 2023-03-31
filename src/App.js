import React from 'react'
import {AppBar, Button,Tab, Tabs, Toolbar, Typography} from '@mui/material';
import Shop2Icon from '@mui/icons-material/Shop2';
import StoreIcon from '@mui/icons-material/Store';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ContactsIcon from '@mui/icons-material/Contacts';
const Header = () => {
  return (
   <div>
        <AppBar sx={{background:'orange'}}>
            <Toolbar>
                <Shop2Icon/>
                <Typography>MySHOP</Typography>
                <Tabs>
                   <StoreIcon sx={{marginTop:'7px',left:'5px'}}/> 
                    <Tab label="our selling products"/>
                    <ThumbUpIcon sx={{marginTop:'7px'}}/>
                    <Tab label="best rated products"/>
                    <ContactsIcon sx={{marginTop:'7px'}}/>
                    <Tab  label="Contact"/>
           
                </Tabs>
                <Button  variant="OutLined" sx={{marginLeft:'auto'}}> LogIn</Button>
                <Button  variant="contained" sx={{marginLeft:'12px'}}> signUp</Button>
            </Toolbar>
        </AppBar>
        
    </div>
  )
}

export default Header;