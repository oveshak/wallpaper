import React from 'react'
import Header from '../common/header/Header'
import { Heading } from '../common/heading/Heading'
import Hero from '../home/hero/Hero'
import { About } from '../home/about/About'
import Asking from '../home/asking/Asking'
import Address from '../home/addressing/Address'
import { Footer } from '../common/footer/Footer'
import Why from '../common/why/Why'
import Design from '../home/design/Design'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Designs from "../home/design/Designs"
const Page = () => {
  return (
    <>
    <BrowserRouter>
        <Heading/>
        <Header/>
        <Hero/>
        <About/>
        <Why/>
        <Design/>
        <Asking/>
        <Address/>
        <Footer/>
        
        <Routes>
        <Route path='/design'  element = {<Designs/>} />
       </Routes>
        </BrowserRouter>
       
    </>
  )
}

export default Page