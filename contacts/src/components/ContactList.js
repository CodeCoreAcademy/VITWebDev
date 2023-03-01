import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import data from '../db.js'
import { Avatar, Checkbox, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SingleContact from './SingleContact.js';

export default function ContactList(props) {
  
  const handleClick = (id)=>{
    props.select(id)
    props.func(true)
  }
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {/* {console.log(props)} */}
      <List>
        {
          data.map((element, index)=>{
            return (
              <ListItem className="ab" key={element.id}>
                {/* <ListItemButton onClick={()=>handleClick(element.id)}> */}
                  <Box className="noDisplay" sx={{width:'42px', height:'42px'}}>
                    <Avatar>{element.name.charAt(0)}</Avatar>
                  </Box>
                  
                  <Box className="display" sx={{width:'42px', height:'42px'}}>
                    <Checkbox />
                  </Box>
                  
                  <span style={{margin:'8px'}}></span>
                  <Box sx={{flexGrow:1, cursor:'pointer'}} onClick={()=>handleClick(element.id)}>
                    <ListItemText primary={element.name}/>
                  </Box>
                  <Box className="display">
                    <IconButton>
                      <StarBorderIcon sx={{color:"#919090"}}/>
                    </IconButton>
                    
                    <span style={{margin:'8px'}}></span>
                    <IconButton>
                      <CreateOutlinedIcon sx={{color:"#919090"}}/>
                    </IconButton>
                    
                    <span style={{margin:'8px'}}></span>
                    <IconButton>
                      <MoreVertOutlinedIcon sx={{color:"#919090"}}/>
                    </IconButton>
                  </Box>
                {/* </ListItemButton> */}
              </ListItem>
            )
          })
        }
          
        
      </List>
    </Box>
  );
}