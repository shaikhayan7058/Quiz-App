import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Appointment from './pages/Appointment'
import Doctors from './pages/Doctors'
import Home from './pages/Home'


function App() {
        
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
            <Route path='/' index element={<Home/>}></Route>
            <Route path='/appointment' element={<Appointment/>}></Route>
            <Route path='/doctor' element={<Doctors/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App