
import React, { useState } from 'react'
import {Box,Typography,Menu,MenuItem,styled} from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const Component=styled(Menu)`
     margin-top:5px;
     
`
const Logout=styled('Typography')`
margin-left:14px;
     font-size:14px;
     
`
const Profile = ({accountName,setAccountName}) => {
    const [open,setOpen]=useState(false)
    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const logout=()=>{
      setAccountName('');
    }
  return (
    <>
    <Box onClick={(e)=>{handleClick(e)}} style={{cursor:'pointer'}}>
        <Typography  style={{marginTop:2}}>{accountName}</Typography>
        </Box>
        <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose(); logout()} }>
        <PowerSettingsNewIcon color='primary' fontSize='small'/>
        <Logout> Logout</Logout>
        </MenuItem>
      </Component>
   
    </>
  )
}

export default Profile