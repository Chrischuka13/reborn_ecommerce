import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import NavBar from './components/NavBar.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import SearchDrawer from './components/SearchDrawer.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <ScrollToTop/>
          <App />
        <CartDrawer/>
        <SearchDrawer/>
        <Footer/>
      </CartProvider>
    </BrowserRouter> 
  </StrictMode>,
)
