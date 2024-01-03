import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Panier from './pages/Panier';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
