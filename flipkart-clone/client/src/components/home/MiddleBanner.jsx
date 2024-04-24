

import React from 'react'
import {Box,styled, Grid} from '@mui/material'
import { imageURL} from '../../constants/data' 


const MiddleBanner = () => {
  return (
   <Grid lg={12} md={12} xs={12} container>
   { imageURL.map((items)=>
     <Grid item lg={4} sm={4} xs={12}>
      <item><img src={items} alt="ad"/></item>
      </Grid>

   )

   }
   </Grid>
  )
}

export default MiddleBanner