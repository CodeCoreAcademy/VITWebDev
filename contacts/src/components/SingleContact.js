import { Box, IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
export default function SingleContact(props) {
  return (
    <div>
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
        <Box>
            Avatar
        </Box>
        <Box>
            details
        </Box>
    </div>
  )
}
