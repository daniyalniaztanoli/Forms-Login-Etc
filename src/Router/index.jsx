import React from 'react'
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Login from '../Components/Login';
import Forgot from '../Components/Forgot';
import SignUp from '../Components/SignUp';

const App_Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Forgot' element={<Forgot/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App_Router;
