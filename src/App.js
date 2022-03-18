import React from 'react';
import FooterSection from './pages/FooterSection';
import Navbar from './pages/Navbar';
import {BrowserRouter, Route,  Routes} from 'react-router-dom';
import About from './components/about/About';
import Slidersection from './components/slider/Slidersection';
import Products from './components/productsection/Products';
import Contact from './components/contactselection/Contact';
import Feature from './components/featuresection/Feature';
import Home from './pages/Home'

function App() {
  return (<div>    <BrowserRouter>
    <Navbar/>
    
    
    <Routes>
    <Route path='/home' element={<Home/>}/>
    
    <Route path='/feature' element={<Slidersection/>}/>
    <Route path='/feature' element={<Feature/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/product' element={<Products/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
   
    

    
    </Routes>
    <FooterSection/>
    </BrowserRouter>
    </div>

  );
}

export default App;
