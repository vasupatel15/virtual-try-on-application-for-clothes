import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import { Routes, Route } from "react-router-dom";
import Signin from './components/Signin'
import Signup from './components/Signup';
import Contact from './components/Contact';
import Demo from './components/Demo';
import Tutorial from './components/Tutorial';

function App() {
 

  return (
    <>
    
     <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/demo' element={<Demo/>}/>
      <Route path='/tutorial' element={<Tutorial/>}/>
     </Routes>

    </>
  )
}

export default App
