import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const MenCasual = () => {
    const [product, setProduct] = useState([])
    const [activeTab, setActiveTab] = useState("All")
    const { addToCart } = useContext(CartContext)
    const { cartItems } = useContext(CartContext);

    useEffect(() => {
    fetch('/men-casual.json')
      .then((res) => res.json())
      .then(data => {setProduct(data)});
    }, []);

    useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

//   const filteredAppareals = product.filter((cloth) => {
//   const sectionMatch = cloth.section === "men-casual";
//   const statusMatch = activeTab === "All" || cloth.status === activeTab;

//   return sectionMatch && statusMatch;
// });

    const filteredAppareals = product.filter(
  (cloth) =>
    cloth.section === "men-casual" &&
    (activeTab === "All" || cloth.status === activeTab)
);



  return (
    <main className='bg-neutral-100'>
      <section className='w-11/12 container mx-auto py-16'>
        <div className='md:flex justify-between mb-12  py-6'>
          <h3 className='font-medium text-[32px] mb-6'>Men Casual</h3>
            <div className='text-[14px]'>
              {["All", "New", "Popular", "Sold"].map((tab) => (
              <button key={tab}
                onClick={() => setActiveTab(tab)}
                className={activeTab === tab ? "border border-neutral-500" : ""}>
                {tab.replace("-", " ")}
              </button>
                  ))}
            </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-8'>
          {filteredAppareals.map((item) => (
          <div key={item.id} className="relative group overflow-hidden mb-10">
            {/* CLICKABLE CARD */}
            <Link to={`/collections/${item.id}`} className='block'>
              <div className='relative w-full aspect-3/4 sm:aspect-4/5 lg:aspect-3/4'>
                <img src={item?.images?.[0]} alt="" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-102'/>
                <img src={item?.images?.[1] || item?.images?.[0]} alt={item.name}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 hidden sm:block group-hover:opacity-100"/>

                <div className='absolute top-2 left-2 sm:top-3 sm:left-3 bg-black/80 text-white px-2 py-1 rounded-full text-[10px] sm:text-xs'>
                  {item.status}
                </div>
              </div>
            </Link>

            <div className='mt-2'>
              <h3 className='truncate uppercase'>{item.name}</h3>
              <p>₦{item.price.toLocaleString()}</p>
            </div>

            <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-white p-3 opacity-0 group-hover:opacity-100 transition duration-300 translate-y-4 group-hover:translate-y-0">
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
    </main>
  )
}

export default MenCasual