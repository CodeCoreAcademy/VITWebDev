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

    // const [phoneNumbers, setPhoneNumbers] = useState([
    //     {
    //         code:'',
    //         phone:'',
    //         label:''
    //     }
    // ])
    
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        company:'',
        jobtitle:'',
        email:'',
        phonenumbers:[
            {
                id:1,
                code:'',
                phone:'',
                label:''
            },
            {
                id:2,
                code:'',
                phone:'',
                label:''
            }
        ]
    })

    const handlePhonumbers = (index, value)=>{
        // console.log(index, value)
        // setFormData((prev)=> ({...prev, phonenumbers:[...prev.phonenumbers.slice(0,index), {...prev.phonenumbers[index], code:value}, ...prev.phonenumbers.slice(index+1) ]}) )
        setFormData((prev)=>{
            return(
                {
                    ...prev,
                    phonenumbers: [...prev.phonenumbers.slice(0,index),{ ...prev.phonenumbers[index], phone:value }, ...prev.phonenumbers.slice(index+1)]
                }
            )
        })
    }
    const newNumber = ()=>{
        setFormData((prev)=>{
            return(
                {
                    ...prev,
                    phonenumbers:[...prev.phonenumbers, {
                        id: new Date().getTime(),
                        code:'',
                        phone:'',
                        label:''
                    }]
                }
            )
        })
        // setPhoneNumbers((prev)=>[
        //     ...prev,
        //     {
        //         code:'',
        //         phone:'',
        //         label:''
        //     }
        // ])
    }

    const removeNumber = (id)=>{
        console.log(id)
        // setPhoneNumbers((prev)=>prev.filter((ele, ind)=> ind!=index))
        // phoneNumbers.filter((ele)=>ele.id!=id)
        setFormData((prev)=>{
            return(
                {
                    ...prev,
                    phonenumbers:prev.phonenumbers.filter((ele)=>ele.id!=id)
                }
            )
        })
    }
  return (
    <Box>
        {
            console.log(formData)
        }
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
                            {/* {console.log(formData)} */}
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <TextField id="input-with-sx" label="First Name" variant="standard" value={formData.firstname} onChange={(event)=>setFormData((prev)=>({...prev, firstname:event.target.value}) )} />
                                <TextField id="input-with-sx" label="Last Name" variant="standard" value={formData.lastname} onChange={(event)=>setFormData((prev)=>({...prev, lastname:event.target.value}) )} />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex'}}>
                            <BusinessIcon sx={{ color: 'action.active', mr: 2, mt: 3 }} />
                            
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <TextField id="input-with-sx" label="Company" variant="standard" value={formData.company} onChange={(event)=>setFormData((prev)=>({...prev, company:event.target.value}) )}/>
                                <TextField id="input-with-sx" label="Job Title" variant="standard" value={formData.jobtitle} onChange={(event)=>setFormData((prev)=>({...prev, jobtitle:event.target.value}) )}/>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <MailOutlineIcon sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
                            <TextField id="input-with-sx" label="Email" variant="standard" value={formData.email} onChange={(event)=>setFormData((prev)=>({...prev, email:event.target.value}) )}/>
                        </Box>

                        {
                            formData.phonenumbers.map((element, index)=>{
                                return (
                                    <Box key={index}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <LocalPhoneOutlinedIcon sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
                                            {/* <InputLabel id="countrycode">Country</InputLabel> */}
                                            <Select
                                                id="countrycode"
                                                variant='standard'
                                                value={formData.phonenumbers[index].code==''?'+91':formData.phonenumbers[index].code}
                                                onChange={(event)=>{handlePhonumbers(index, event.target.value)}}
                                                label="Country"
                                                sx={{mr:0.5}}
                                            >
                                                <MenuItem value='+91'>+91</MenuItem>
                                                <MenuItem value='+92'>+92</MenuItem>
                                                <MenuItem value='+93'>+93</MenuItem>
                                            </Select>
                                            
                                            <TextField id="phonenumber" label="Phone" variant="standard" value={formData.phonenumbers[index].phone} onChange={(event)=>handlePhonumbers(index, event.target.value)}/>
                                            {
                                                index==0
                                                ?<IconButton onClick={newNumber}>
                                                    <AddCircleOutlineIcon />
                                                </IconButton>
                                                :<IconButton onClick={()=>removeNumber(element.id)}>
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
