import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from "./components/Header.jsx"
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Exchanges from "./components/Exchanges.jsx"
import Coins from "./components/Coins.jsx"
import CoinsDetails from "./components/CoinsDetail.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/SignUp.jsx"

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coins" element={<Coins/>}/>
      <Route path="/exchanges" element={<Exchanges />}/>
      <Route path="/coin/:id" element={<CoinsDetails/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
    
    </Router>
    </ChakraProvider>
  );
}

export default App;
