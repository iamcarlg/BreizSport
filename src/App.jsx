import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import ProductsPage from './pages/Products';
import ProductDetail from './pages/ProductDetail'
import AboutPage from './pages/AboutPage';
import InfosPage from './pages/InfosPage';
import Panier from './pages/Panier';
import Payment from './pages/Payment';
import './styles/index.scss';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import { hasAuthenticated } from './services/authApi'
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/information" element={<InfosPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/panier" element={<Panier />} />

        {/* Route non authentifié */}
        {!isAuthenticated && (
          <>        
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        ) || (
          <>
            <Route path="/payment" element={<Payment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
          </>
        )
        }


      </Routes>
    </BrowserRouter>
  )
  
}

export default App;