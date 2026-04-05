import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const AllProducts = () => {
    const [data, setData] = useState([])
    const {addToCart} = useContext(CartContext)

    useEffect(()=>{
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json));
    }, []);
    
  return (
    <main>
        <section className='w-11/12 container mx-auto py-16'>
            <div className='flex justify-between items-center mb-12'>
                <h3 className='font-medium text-3xl'>All Products</h3>
                <Link to='/products'><button className='border border-black hover:bg-neutral-800 hover:text-white'>View all</button></Link>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-8'>
                {data.slice(0, 3).map((apparel)=>{
                    return (
                    <div key={apparel.id} className="relative group overflow-hidden">
                        {/* CLICKABLE CARD */}
                        <Link to={`/collections/${apparel.id}`} className='block'>
                            <div className='relative w-full aspect-3/4 sm:aspect-4/5 lg:aspect-3/4'>
                                <img src={apparel?.images?.[0]} alt="" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-102'/>
                                <img src={apparel?.images?.[1] || apparel?.images?.[0]} alt={apparel.name}
                                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 hidden sm:block group-hover:opacity-100"/>
                                
                                <div className='absolute top-2 left-2 sm:top-3 sm:left-3 bg-black/80 text-white px-2 py-1 rounded-full text-[10px] sm:text-xs'>
                                {apparel.status}
                                </div>
                            </div>
                        </Link>

                        <div className='mt-2'>
                            <h3 className='uppercase truncate text-[14px]'>{apparel.name}</h3>
                            <p className='font-medium'>₦{apparel.price.toLocaleString()}</p>
                        </div>

                        <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-white p-3 opacity-0 group-hover:opacity-100 transition duration-300 translate-y-4 group-hover:translate-y-0">
                            <p>Selected Size</p>
                            <div className='md:flex justify-between gap-2'>
                                {apparel.size.map((size, index) => (
                                <button key={index} onClick={() => addToCart({ ...apparel, size })} className="border px-3 py-1 text-sm hover:bg-black hover:text-white transition">{size}</button>
                            ))}
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </section>
    </main>
  )
}

export default AllProducts