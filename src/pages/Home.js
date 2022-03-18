import React from 'react';
import About from '../components/about/About';
import Products from '../components/productsection/Products'
import Contact from '../components/contactselection/Contact';

import Slidersection from '../components/slider/Slidersection';

import Feature from './../components/featuresection/Feature';

const Home = () => {
  return (
    <div>

    <Slidersection/>
    <Feature/>
    <About/>
    <Products/>
    <Contact/>
<Contact/>



    </div>
  )
}

export default Home