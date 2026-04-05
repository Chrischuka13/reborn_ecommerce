import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const YouMayLike = () => {
    const [products, setProducts] = useState([])
    const {cartItems} = useContext(CartContext)

    useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then(data => {setProducts(data)});
    }, []);

    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const shuffleProducts = (array) => {
    return [...array].sort(() => Math.random() - 0.3);
};

    const filtered = products

    const randomProducts = shuffleProducts(filtered).slice(0, 3);

  return (
    <section className='mt-30'>
        <h2 className='text-4xl text-neutral-800 font-semibold text-center mb-10'>YOU MAY ALSO LIKE</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-20 '>
            {randomProducts.map((item) => (
            <div key={item.id} className="relative group">
                {/* CLICKABLE CARD */}
                <Link to={`/collections/${item.id}`} className='block'>
                <div className='h-99 relative group transition duration-300'>
                    <img src={item?.images?.[0]} alt="" className='w-full h-full object-cover'/>
                    <img src={item?.images?.[1] || item?.images?.[0]} alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>

                    <div className='absolute top-3 left-3 bg-black text-white p-2 rounded-4xl text-[12px]'>
                    {item.status}
                    </div>
                </div>
                </Link>

                <div className='mt-2 text-center uppercase'>
                <h3>{item.name}</h3>
                <p>₦{item.price.toLocaleString()}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-white p-3 opacity-0 group-hover:opacity-100 transition duration-300 translate-y-4 group-hover:translate-y-0">
                <p>Selected Size</p>
                <div className='flex justify-between gap-2'>
                    {item.size.map((size, index) => (
                    <button key={index} onClick={() => addToCart({ ...item, size })} className="border px-3 py-1 text-sm hover:bg-black hover:text-white transition">{size}</button>
                ))}
                </div>
                </div>
            </div>
            ))}
        </div>

    </section>
  )
}

export default YouMayLike