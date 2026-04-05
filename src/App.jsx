import './App.css'
import { Toaster } from 'react-hot-toast'
import All from './pages/products/All.jsx'
import AllProducts from './components/AllProducts.jsx'
import ForMen from './components/ForMen'
import ForWomen from './components/ForWomen'
import Hero from './components/Hero'
import PopularListings from './components/PopularListings'
import NewListings from './components/NewListings'
import ItemDetails from './pages/products/ItemDetails'
import MenCasual from './pages/products/MenCasual'
import MenSport from './pages/products/MenSport'
import ProductHero from './pages/products/ProductHero'
import WomenCasual from './pages/products/WomenCasual'
import WomenSport from './pages/products/WomenSport'
import MenWomenCasual from './components/MenWomenCasual'
import OurValues from './pages/values/OurValues'
import Banner from './components/Banner.jsx'
import Terms from './pages/legal/Terms'
import Return from './pages/legal/Return'
import RegisterNumber from './components/RegisterNumber.jsx'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'




function App() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const last = localStorage.getItem("modalTime");

    if (!last || Date.now() - last > 1800000) {
      setOpen(true);
      localStorage.setItem("modalTime", Date.now());
    }
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path='/' element={
        <>
          <RegisterNumber isOpen={open} onClose={()=> {localStorage.setItem("modalTime", Date.now()); setOpen(false);}}/>
          <Hero/>
          <AllProducts/>
          <MenWomenCasual/>
          <PopularListings/>
          <ForWomen/>
          <NewListings/>
          <ForMen/>
          <Banner/>
        </>

        }/>
        
        <Route path='/collections' element={<ProductHero/>}/>
        <Route path='/products' element={<All/>}/>
        <Route path='/collections/men-sport' element={<MenSport/>}/>
        <Route path='/collections/men-casual' element={<MenCasual/>}/>
        <Route path='/collections/women-sport' element={<WomenSport/>}/>
        <Route path='/collections/women-casual' element={<WomenCasual/>}/>

        <Route path='/collections/:id' element={<ItemDetails/>}/>

        <Route path='/values' element={<OurValues/>}/>
        <Route path='/terms-of-service' element={<Terms/>}/>
        <Route path='/refund-policy' element={<Return/>}/>

      </Routes>
    </>
  )
}

export default App
