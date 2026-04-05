import React from 'react'
import { Link } from 'react-router-dom'


const MenWomenCasual = () => {
  return (
    <main>
        <section className='py-16'>
            <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 ">
                <div className="relative h-[60vh] sm:h-[70vh] md:h-auto order-1 md:order-2">
                    <img src="images/pexels-infected-store-1913417375-28758137.jpg" alt="Women's collection" className="absolute inset-0 w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                            <p>Best For Men</p>
                            <p className="text-3xl font-bold">MEN'S CASUAL</p>
                            <Link to='/collections/men-casual'><button className="mt-3 px-4 py-1 text-xs border border-white rounded-full backdrop-blur-sm hover:bg-white hover:text-black transition">Shop Now</button></Link>
                        </div>
                    </div>
                </div>
    
                <div className="relative h-[60vh] sm:h-[70vh] md:h-auto order-1 md:order-2">
                    <img src="images/pexels-pavel-danilyuk-6417941.jpg" alt="Women's collection" className="absolute inset-0 w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                            <p>Best For Women</p>
                            <p className="text-3xl font-bold">WOMEN'S CASUAL</p>
                            <Link to='/collections/women-casual'><button className="mt-3 px-4 py-1 text-xs border border-white rounded-full backdrop-blur-sm hover:bg-white hover:text-black transition">Shop Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
  )
}

export default MenWomenCasual