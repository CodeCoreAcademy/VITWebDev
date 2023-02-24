import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ContactList from './components/ContactList';
import SingleContact from './components/SingleContact';

export default function App() {
    const [showSingleContact, setShowSingleContact] = useState(false)
  return (
    <div>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>

                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        {
            showSingleContact == true
            ? <SingleContact func = {setShowSingleContact} />
            : <ContactList func = {setShowSingleContact}/>
        }
        
    </div>
  )
}
