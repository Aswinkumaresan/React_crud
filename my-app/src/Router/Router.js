import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from '../Form/Login';
import FormTask from '../Form/FormTask';
import Home from '../Form/Home';

const Router = () => {
  return (
    // <div>Router</div>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/Home' element={<Home/>}></Route>
            <Route path='/FormTask' element={<FormTask/>}></Route>
        </Routes>
    
    </BrowserRouter>
  )
}

export default Router