import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import data from '../db.js'
import { Avatar, Checkbox } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SingleContact from './SingleContact.js';

export default function ContactList(props) {
  
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {console.log(props.func)}
      <List>
        {
          data.map((element, index)=>{
            return (
              <ListItem disablePadding className="ab" key={element.id}>
                <ListItemButton onClick={()=>props.func(true)}>
                  <Box className="noDisplay" sx={{width:'42px', height:'42px'}}>
                    <Avatar>{element.name.charAt(0)}</Avatar>
                  </Box>
                  
                  <Box className="display" sx={{width:'42px', height:'42px'}}>
                    <Checkbox />
                  </Box>
                  
                  <span style={{margin:'8px'}}></span>
                  <ListItemText primary={element.name}/>
                  <Box className="display">
                    <StarBorderIcon sx={{color:"#919090"}}/>
                    <span style={{margin:'8px'}}></span>
                    <CreateOutlinedIcon sx={{color:"#919090"}}/>
                    <span style={{margin:'8px'}}></span>
                    <MoreVertOutlinedIcon sx={{color:"#919090"}}/>
                  </Box>
                </ListItemButton>
              </ListItem>
            )
          })
        }
          
        
      </List>
    </Box>
  );
}