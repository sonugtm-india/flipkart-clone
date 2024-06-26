import React from 'react'
import {AppBar,Toolbar,styled,Box, Typography} from "@mui/material"
import Search from './Search'
import CustomButton from './CustomButton'


const StyledHeader=styled(AppBar)`
background-color: #2874f0;
height:55px;
`
const Component=styled(Box)`
   margin-left:12%;
   line-height:0;
`
const SubHeading=styled(Typography)`
font-size:10px;
font-style:italic;



`
const PlusImage=styled('img')({
  width:10,
  height:10,
  marginLeft:4


})

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <StyledHeader>
      <Toolbar style={{minHeight:58}}>
        <Component>
         <img src={logoURL} alt="flipkartLogo" style={{width:75}}/>
         <Box style={{display:'flex'}}>
          <SubHeading>Explore&nbsp; 
          <Box component="span" style={{color:'#FFE500'}}>Plus </Box>
            </SubHeading>
              <PlusImage src={subURL} alt="subHeadinglogo"/>
         </Box>
         </Component>
         <Search/>
       <Box>
        <CustomButton/>
        </Box>  
        </Toolbar>
    </StyledHeader>
  )
}

export default Header