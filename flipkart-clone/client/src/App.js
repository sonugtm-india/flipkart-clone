
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home.jsx';
import {Box} from '@mui/material'
import DataProvider from './contextAPI/DataProvider.js';
// components
function App() {
  return (
   <DataProvider>
     <Header/> 
     <Box style={{marginTop:58}}>
     <Home/>
     </Box>
     </DataProvider>
   
    
  );
}

export default App;
