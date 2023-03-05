import { Box, Button, Divider, IconButton, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React, { useState } from 'react'

export default function EditForm(props) {

    const [phoneNumbers, setPhoneNumbers] = useState([
        {
            code:'',
            phone:'',
            label:''
        }
    ])
    
    const newNumber = ()=>{
        setPhoneNumbers((prev)=>[
            ...prev,
            {
                code:'',
                phone:'',
                label:''
            }
        ])
    }

    const removeNumber = (index)=>{
        setPhoneNumbers((prev)=>prev.filter((ele, ind)=> ind!=index))
    }
  return (
    <Box>
        <Box>
            <Box sx={{
                display:'flex', 
                flexFlow:'row', 
                alignItems:'center', 
                height:'64px',
                paddingX:'16px'
            }}>
                <IconButton onClick={()=>props.setShowEditForm(false)}>
                    <CloseIcon />
                </IconButton>
                <Typography component="span">Edit Contact</Typography>
                <span style={{flexGrow:1}}></span>
                <Button variant="contained">Save</Button>
            </Box>
            <Divider />
            <form>
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <IconButton component="label" sx={{
                        height:'128px',
                        width:'128px'
                    }}>
                        <input hidden accept="image/*" type="file" />
                        <AddPhotoAlternateOutlinedIcon sx={{height:48, width:48}} />
                    </IconButton>
                </Box>
                <Box>
                    <Stack>
                        <Box sx={{ display: 'flex'}}>
                            <AccountCircle sx={{ color: 'action.active', mr: 2, mt: 3 }} />
                            
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <TextField id="input-with-sx" label="First Name" variant="standard" />
                                <TextField id="input-with-sx" label="Last Name" variant="standard" />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex'}}>
                            <BusinessIcon sx={{ color: 'action.active', mr: 2, mt: 3 }} />
                            
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <TextField id="input-with-sx" label="Company" variant="standard" />
                                <TextField id="input-with-sx" label="Job Title" variant="standard" />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <MailOutlineIcon sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
                            <TextField id="input-with-sx" label="Email" variant="standard" />
                        </Box>

                        {
                            phoneNumbers.map((element, index)=>{
                                return (
                                    <Box key={index}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <LocalPhoneOutlinedIcon sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
                                            {/* <InputLabel id="countrycode">Country</InputLabel> */}
                                            <Select
                                                id="countrycode"
                                                variant='standard'
                                                value='+91'
                                                // onChange={handleChange}
                                                label="Country"
                                                sx={{mr:0.5}}
                                            >
                                                <MenuItem value='+91'>+91</MenuItem>
                                                <MenuItem value='+92'>+92</MenuItem>
                                                <MenuItem value='+93'>+93</MenuItem>
                                            </Select>
                                            
                                            <TextField id="phonenumber" label="Phone" variant="standard" />
                                            {
                                                index==0
                                                ?<IconButton onClick={newNumber}>
                                                    <AddCircleOutlineIcon />
                                                </IconButton>
                                                :<IconButton onClick={()=>removeNumber(index)}>
                                                    <CloseIcon />
                                                </IconButton>
                                            }
                                            
                                        </Box>
                                        <Box sx={{ml:12}}>
                                            <TextField id="numberlabel" label="Label" variant="standard" />
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                        

                    </Stack>
                </Box>
            </form>
        </Box>
    </Box>
  )
}
