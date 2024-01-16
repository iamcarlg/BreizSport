import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import ProductsPage from './pages/Products';
import ProductDetail from './components/ProductDetail'
import AboutPage from './pages/AboutPage';
import InfosPage from './pages/InfosPage';
import Panier from './pages/Panier';
import Payment from './pages/Payment';
import './styles/index.scss';
import Profile from './pages/Profile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/information" element={<InfosPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
