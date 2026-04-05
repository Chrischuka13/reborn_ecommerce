import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ForWomen = () => {
    const [data, setData] = useState([])

    useEffect(() => {
    fetch('/women-sport.json')
      .then(res => res.json())
      .then(json => setData(json));
    }, []);

  return (
    <section className='py-16'>
        <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 ">
            <div className="bg-[#efefef] flex items-center justify-center p-20">
                {data.slice(0,1).map((item) =>(
                <Link to={`/collections/${item.id}`} key={item.id}>
                    <img src={item?.images?.[0]} alt="" className='w-50 mb-4'/>
                    <h3 className='font-semibold'>{item.name}</h3>
                    <p className=''>₦{item.price.toLocaleString()}</p>
                </Link>
            ))}
            </div>

            <div className="relative h-[60vh] sm:h-[70vh] md:h-auto order-1 md:order-2">
                <img src="images/pexels-biabrg-16933739.jpg" alt="Women's collection" className ="absolute inset-0 w-full h-full object-cover "/>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <p>Best For Women</p>
                        <p className="text-3xl font-bold">WOMEN SPORTWEAR</p>
                        <Link to='/collections/women-sport'><button className="mt-3 px-4 py-1 text-xs border border-white rounded-full backdrop-blur-sm hover:bg-white hover:text-black transition">Shop Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ForWomen