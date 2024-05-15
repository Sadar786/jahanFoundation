import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import React from 'react'
import Footer from './pages/Footer'
import ContactUs from './pages/ContactUs'
import Achievments from './pages/Achievments'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
       <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/achievments' element={<Achievments/>}/>
    </Routes>
     <Footer/>
    </BrowserRouter>
  )
}
