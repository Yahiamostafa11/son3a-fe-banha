import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'

import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Verification from './pages/Verification'
import ResetPassword from './pages/ResetPassword'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import OrangeHome from './pages/orange_home'
import BlueHome from './pages/blue_home'
import GreenHome from './pages/green_home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderConfirmed from './pages/OrderConfirmed'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />      
          <Route path="/orange_home" element={<OrangeHome />} />
          <Route path="/blue_home" element={<BlueHome />} />
          <Route path="/green_home" element={<GreenHome />} /> 
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/order-confirmed" element={<OrderConfirmed />} /> 
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App