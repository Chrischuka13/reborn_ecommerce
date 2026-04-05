import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'

const Hero = () => {
  return (   
    <main className='py-8'>
      <section className='bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/images/pexels-cottonbro-10677489.jpg)] bg-center bg-cover min-h-screen flex items-end justify-center'>
        <div className='w-11/12 container mx-auto py-10 sm:flex justify-between relative'>
          <div className='max-w-120 text-white'>
            <h1 className='text-4xl mb-4 md:text-6xl font-bold text-balance'>PERFORMANCE IN EVERY STEP</h1>
              <h6 className='text-neutral-300 mb-4'>Form, function, and attitude on repeat.</h6>
              <Link to='/collections'><button className='bg-white text-black'>Shop All</button></Link>
          </div>      
        </div>
      </section>
      <Banner/>
    </main>                     
    
  )
}

export default Hero