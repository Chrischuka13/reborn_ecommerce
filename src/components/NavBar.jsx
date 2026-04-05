import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import SearchDrawer from './SearchDrawer';

const NavBar = ({products}) => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const {openCart, cartItems} = useContext(CartContext)

    const totalsum = cartItems.reduce(
    (sum, item) => sum + item.quantity, 0
  )

  return (
    <section className="">
        <header className=''>
            <nav className='fixed w-full z-20 bg-white hover:bg-neutral-100 hover:text-black transition hover:cursor-pointer '>
                <div className='w-11/12 container mx-auto py-4 flex justify-between items-center'>
                    <div className='hidden md:flex gap-6 items-center'>
                        <div className='relative group cursor-pointer '>
                            <p className='text-black hover:text-gray-400 hover:cursor-pointer'>Shop</p>
                            <div className='lg:block hidden absolute left-0 mt-6 w-200 p-8 bg-white rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-2 group-hover:translate-y-0 '>
                                <div className='md:grid grid-cols-3 '>
                                    <div className='flex flex-col'>
                                        <h4 className='mb-3 font-medium'>Discover</h4>
                                        <a href="/products" className='hover:text-gray-400 hover:cursor-pointer transition-all duration-500 mb-2'>All</a>
                                        <a href="/collections" className='hover:text-gray-400 hover:cursor-pointer transition-all duration-500 mb-2'>Collections</a>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h4 className='mb-3 font-medium'>MEN</h4>
                                        <a href='/collections/men-casual' className="hover:text-gray-400 hover:cursor-pointer transition-all duration-500 mb-2">Men Casual</a>
                                        <a href='/collections/men-sport' className="hover:text-gray-400 hover:cursor-pointer transition-all duration-500 mb-2">Men Sport</a>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h4 className='mb-3 font-medium'>WOMEN</h4>
                                        <a href='/collections/women-casual' className="hover:text-gray-400 hover:cursor-pointer transition-all duration-500 mb-2">Women Casual</a>
                                        <a href='/collections/women-sport' className="hover:text-gray-400 hover:cursor-pointer transition-all duration-500 mb-2">Women Sport</a>
                                    </div>
                                </div>
                                <div className=' bg-neutral-100 p-4 rounded-2xl mt-8'>
                                    <img src="/images/naija.png" alt="" className='w-9'/>
                                    <p>Nigeria</p>
                                </div>
                            </div>
                            
                        </div>
                        
                        <a href="#" className='text-black hover:text-gray-400 hover:cursor-pointer'>Blog</a> 
                    </div>
                    <div onClick={()=> setIsOpen(!isOpen)} className="md:hidden block hover:cursor-pointer">
                        {isOpen? <img src='/images/x.png' className='w-4'/> : <img src='/images/menu.png' className='w-4'/>} 
                    </div>
                    
                    <div className='flex justify-center items-center'>
                        <Link to="/"><img src="/images/reborn logo2.png" className="w-22.5 md:w-30 hidden md:block" alt=""/></Link>
                        <Link to="/"><img src="/images/reborn logo2.png" className="w-22.5 md:w-30 block md:hidden" alt=""/></Link>
                    </div>
                    
                    
                    <div className="hidden md:block relative">
                        <button onClick={() => setSearchOpen(true)}><img src="/images/Search.png" alt="" className='w-6'/></button>
                        
                        <button onClick={openCart}><img src="/images/FC_CartOverlayTrigger.png" alt=""className='w-6' />
                        {totalsum > 0 &&(<span className='absolute bottom-0 w-5 bg-black text-white'>{totalsum}</span>
                        )}</button>
                    </div>
                    
                    <div className='md:hidden relative flex gap-6'>
                        <div onClick={() => setSearchOpen(true)}><img src="/images/Search.png" alt="" className='w-5'/></div>
                        
                        <div onClick={openCart}><img src="/images/FC_CartOverlayTrigger.png" alt=""className='w-5' />
                        {totalsum > 0 &&(<span className='absolute -top-2 -right-2 text-[10px] bg-black text-white w-4 h-4 flex items-center justify-center rounded-full'>{totalsum}</span>
                        )}</div>
                    </div>
                    
                </div>
  
                
                {isOpen && (
                <div className="lg:hidden bg-white text-[#0A0A0A] text-start h-screen md:h-full">
                    <div className='w-11/12 container mx-auto py-4'>
                        <h6 className='mb-4'>Discover</h6>
                        <a href="/products" className="block font-normal text-xl hover:text-gray-400 hover:cursor-pointer mb-4">All Products</a>
                        <a href="/collections/men-casual" className="block font-normal text-xl hover:text-gray-400 hover:cursor-pointer mb-4">Men Casual</a>
                        <a href="/collections/women-casual" className="block font-normal text-xl hover:text-gray-400 hover:cursor-pointer mb-4">Women Casual</a>
                        <a href="/collections/men-sport" className="block font-normal text-xl hover:text-gray-400 hover:cursor-pointer mb-4">Men Sport</a>
                        <a href="/collections/women-sport" className="block font-normal text-xl hover:text-gray-400 hover:cursor-pointer mb-4">Women Sport</a>

                        <div className='w-full bg-neutral-100 p-4 rounded-2xl mt-8'>
                            <img src="/images/naija.png" alt="" className='w-9'/>
                            <p>Nigeria</p>
                        </div>
                    </div>
                    
                </div>
                
                )}
                <SearchDrawer isOpen={searchOpen} onClose={() => setSearchOpen(false)} products={products}/>  
            </nav>
        </header>
    </section>
  )
}

export default NavBar