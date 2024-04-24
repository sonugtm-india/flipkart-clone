import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import {styled,Box} from '@mui/material'
import { useEffect } from 'react'
import {getProducts} from '../../redux/actions/productAction.js'
import { useDispatch,useSelector } from 'react-redux'
import Sliding from './Sliding.jsx'
import MiddleSlider from '../MiddleSlider.jsx'
import MiddleBanner from './MiddleBanner.jsx'
const Component=styled(Box)`
 padding:10px;
 background-color:#F2F2F2;

`

const Home = () => {
    
  const {products}=useSelector(state => state.getProducts);  // get data from client database (redux) 
  console.log(products)
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(getProducts()) // call getProcuts api
  },[dispatch])
  return (
    <>
        <NavBar/>
        <Component>
        <Banner/>
        <MiddleSlider products={products} title="Deal of the day" timer={true}/>
        <MiddleBanner/>
        <Sliding products={products} title="Discount for your" timer={false}/>
        <Sliding products={products} title="Suggesting items" timer={false}/>
        <Sliding products={products} title="Top selection" timer={false}/>
        <Sliding products={products} title="Recommended items" timer={false}/>
        <Sliding products={products} title="Trending items" timer={false}/>
        <Sliding products={products} title="Top deals on accessories" timer={false}/>
        </Component>
       
        </>

  )
}

export default Home