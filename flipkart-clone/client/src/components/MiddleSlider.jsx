import React from 'react'
import Sliding from './home/Sliding'
import {Box,styled} from '@mui/material'
const Component=styled(Box)`
   
   display:flex;


`
const LeftComponent = styled(Box)`
  width:83%;
`
const RightComponent = styled(Box)`
    background-color:#FFFFFF;
    padding:5px;
    margin-top:10px;
    margin-left:10px;
    width:17%;
    text-align:center;

`
const MiddleSlider = ({products,title,timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
    <Component>
        <LeftComponent>
         <Sliding products={products} 
                   title={title} 
                   timer={timer}/>
        </LeftComponent>
        <RightComponent>
           <img src={adURL} alt ="ad" style={{ width:217}}/>
        </RightComponent>
    </Component>
  )
}

export default MiddleSlider