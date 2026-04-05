import { Link } from 'react-router-dom'
import React from 'react'

const ProductHero = () => {
  return (
    <main>
        <section className='w-11/12 container mx-auto py-16'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 '>
                {/* men sport */}
                <Link to="/collections/men-sport">
                    <div className='relative'>
                        <img src="images/pexels-ansey-21222657.jpg" alt="" />
                        <div className='absolute inset-0 flex flex-col items-center justify-end font-medium p-2 hover:text-white hover:transition ease-out'>Men Sport</div>
                    </div>
                </Link>
                
                <Link to="/collections/women-sport">
                    <div className='relative'>
                        <img src="images/pexels-biabrg-16933739.jpg" alt="" className='w-full h-full object-cover'/>
                        <div className='absolute inset-0 flex flex-col items-center justify-end font-medium p-2 hover:text-white hover:transition ease-out'>Women Sport</div>
                    </div>
                </Link>

                <Link to="/collections/women-casual">
                    <div className='relative'>
                        <img src="images/pexels-gabby-k-6311671.jpg" alt="" />
                        <div className='absolute inset-0 flex flex-col items-center justify-end font-medium p-2 hover:text-white hover:transition ease-out'>Women Casual</div>
                    </div>
                </Link>

                <Link to="/collections/men-casual">
                    <div className='relative'>
                        <img src="images/pexels-moph-29998735.jpg" alt="" />
                        <div className='absolute inset-0 flex flex-col items-center justify-end font-medium p-2 hover:text-white hover:transition ease-out'>Men Casual</div>
                    </div>
                </Link>
            </div>
        </section>
    </main>
  )
}

export default ProductHero