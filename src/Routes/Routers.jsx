
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Farms from '../Pages/Farms'
import FarmDetails from '../Pages/FarmDetails';
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import SearchResults from '../Pages/SearchResults';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/farms' element={<Farms />}/>
        <Route path='/farms/:id' element={<FarmDetails />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/farms/search' element={<SearchResults />}/>
    </Routes>
  )
}

export default Router