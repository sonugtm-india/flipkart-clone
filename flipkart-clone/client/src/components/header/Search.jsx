import styled from '@emotion/styled'
import { InputBase,Box } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer=styled(Box)`
  background-color:white;
  width:38%;
  border-radius:2px;
  display:flex;
  font-size:10px;
  margin-left:10px;

`
const SearchInputBase=styled(InputBase)`
padding-left:20px;
width:100%;


`
const SearchIconWrapper=styled(Box)`
 color:#2874f0;
 padding:5px;
 diplay:flex;

`
const Search = () => {
  return (
    <SearchContainer>
        <SearchInputBase
        placeholder='Search for products, brands and more...'
        />
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
    </SearchContainer>
    
  )
}

export default Search