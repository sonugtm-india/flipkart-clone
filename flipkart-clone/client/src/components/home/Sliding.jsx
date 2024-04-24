import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';

import { Typography,Box,styled,Button,Divider } from '@mui/material';


const responsive ={
    
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };


const Component=styled(Box)`
    margin-top:10px;
    background-color:#ffffff;
`
const Deal=styled(Box)`
    padding:15px 20px;
    display:flex;
`
const Timer=styled(Box)`
  display:flex;
  margin-left:20px;
  align-item:center;
`
const DealText = styled(Box)`
   font-size:24px;
   font-weight:600;
   margin-left:25px;
   line-height:32px;
   
 `

 const ViewAll = styled(Button)`
   margin-left:auto;
   background-color:#2874f0;
   font-weight:600;
   font-size:14px;
   
 `

 const Image = styled('img')({
    width:'auto',
    height:150

 })

 const Text = styled(Typography)`
   font-size:14px;
   margin-top:5px;
 
 `
   
const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
const Sliding = ({products,title,timer}) => {
    const renderer=({hours,minutes,seconds})=>{
        return <Box variant ="span">{hours}:{minutes}:{seconds}</Box>
    }
  return (
    <Component>
        <Deal> 
            <DealText> {title}</DealText>
           { timer &&  <Timer> 
                <img src={timerURL} alt='timer' style={{width:24}}/>
                <Countdown date={Date.now()+3.6e+7} renderer={renderer} />
            </Timer>
            }
            <ViewAll variant='contained' > view all</ViewAll>
          
        </Deal>
        <Divider/>
    <Carousel responsive={responsive}
        swipeable={false}
    draggable={false}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    centerMode={true}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
     {
        products.map(items=>(
            <Box textAlign="center" style={{padding:'25px 15px'}}>
            <Image src={items.url} alt="products"/>
            <Text style={{color:'black', fontWeight:600} }> {items.title.shortTitle}</Text>
            <Text style={{color:'green', fontWeight:600}}> {items.discount}</Text>
            <Text> {items.tagline}</Text>
            </Box>
        
        ))
     }
    </Carousel>
    </Component>
  )
}

export default Sliding