import { Avatar, Box, Card, CardContent, Divider, IconButton } from '@mui/material'
import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CallIcon from '@mui/icons-material/Call';
import data from '../db'
export default function SingleContact(props) {

    const [contact, setContact] = useState(data.filter((element)=>element.id == props.id)[0])
  return (
    <div>
        {/* {console.log( data.filter((element)=>element.id == props.id)[0] )} */}
        {console.log(contact)}
        <Box>
            <IconButton onClick={()=>props.func(false)}>
                <ArrowBackIcon />
            </IconButton>
            <IconButton>
                <StarBorderIcon />
            </IconButton>
            <IconButton>
                <MoreVertOutlinedIcon />
            </IconButton>
        </Box>
        <Box sx={{display:"flex", justifyContent:"center", paddingBottom:"16px"}}>
            {/* <span>{contact.pic}</span> */}
            <Avatar sx={{width:128, height:128}}> 
                <span style={{fontSize:"64px"}}>{contact.name.charAt(0)}</span> 
            </Avatar>
        </Box>
        <Divider />
        <Box sx={{padding:'16px'}}>
           
            {/* <span>{contact.contacts}</span> */}

            <Card sx={{ maxWidth: 275 }}>
                <CardContent>
                    <Box className="row">
                        <Box className="iconbox">
                            <ContactPageIcon/>
                        </Box>
                        <Box>{contact.name}</Box>
                    </Box>
                    <Box className="row">
                        <Box className="iconbox">
                            <AlternateEmailIcon/> 
                        </Box>
                        <Box>{contact.email}</Box>
                    </Box>
                    <Box className="row">
                        <Box className="iconbox">
                            <CalendarMonthIcon />
                        </Box>
                        <Box>{contact.dob}</Box>
                    </Box>
                    <Box className="row">
                        <Box className="iconbox"><CallIcon /></Box>
                        <Box>
                            {
                                contact.contacts.map((item, index)=>{
                                    return(
                                        <Box key={index}>{item}</Box>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                </CardContent>
            </Card>

        </Box>
    </div>
  )
}
