import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import  Feature from './components/Features'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <GlobalStyle />
        <Hero />
        <Products 
        heading='Pick something comfy'
        data={productData}
        />
        <Feature />
        <Products 
        heading='Class up your comfort'
        data={productDataTwo}
        />
        <Footer />
    </Router>
  );
}

export default App;
