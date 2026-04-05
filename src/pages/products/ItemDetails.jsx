import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import YouMayLike from '../../components/YouMayLike';
import SingleConfirmOrder from '../../components/SingleConfirmOrder';
import toast from 'react-hot-toast';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const ItemDetails = () => {
    const [zoomStyle, setZoomStyle] = useState({});
    const [showZoom, setShowZoom] = useState(false);
    const [data, setData] = useState([])
    const { addToCart } = useContext(CartContext);
    const [size, setSize] = useState("")
    const [showForm, setShowForm] = useState(false);
    const [showSummary, setShowSummary] = useState(false)
    const [showDescription, setShowDescription] = useState(true);
    const [showDelivery, setShowDelivery] = useState(false);
    const [customer, setCustomer] = useState({
  name: "",
  phone: "",
  address: ""
});


    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(json => setData(json));
    }, []);
    

    const { id } = useParams()
    const apparel = data.find((p) => p.id === id)
    

    const handleMouseMove = (e, img) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      backgroundImage: `url(${img})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "200%",
    });
  };

  const handleBookNow = () => {
  if (!size) {
    toast.error("Please select a size");
    return;
  }
  setShowForm(true);
};
    
    if (!apparel) return <p>Appareal not found</p>

  return (
    <main>
        <section className='w-11/12 container mx-auto py-24'>
            <div className='lg:grid grid-cols-2 gap-10 relative'>
                <div className='block lg:hidden'>
                    <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}      className="w-full h-125 ">{apparel.images.map((img, index) => (
                        <SwiperSlide key={index}><img src={img} alt="" 
                        className="w-full h-full object-cover"/></SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                
                <div className='hidden lg:block'>
                    <div className="">
                        <div className="grid grid-cols-2 space-y-2 space-x-2">
                            {apparel.images.map((img, index) => (
                                <div className="" key={index}><img src={img} alt="" className='object-cover w-full h-full hover:scale-105 transition duration-500 ease-in-out' onMouseMove={(e) => handleMouseMove(e, img)} onMouseEnter={() => setShowZoom(true)} onMouseLeave={() => setShowZoom(false)}/></div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {showZoom && (
                <div className="hidden lg:block fixed top-1/2 -right-40 z-50 w-125 h-125 -translate-x-1/2 -translate-y-1/2 bg-no-repeat bg-cover shadow-xl rounded-lg" style={zoomStyle}/>)}

                <div className=''>
                    <div className='sticky top-20 mt-6 lg:mt-0'>
                        <div className='flex'>
                            <div className='bg-black text-white rounded-4xl px-4 mb-4'>{apparel.status}</div>
                        </div>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl mb-4 font-semibold uppercase truncate '>{apparel.name}</h2>

                        <p className='font-medium text-4xl mb-6 '>₦{apparel.price.toLocaleString()}</p>
                        <div className='mb-8'>
                            <select className="flex justify-center items-center gap-2 border p-2" value={size} onChange={(e) => setSize(e.target.value)}>
                                <option value="">Selected Size: {size}</option>
                                {apparel.size.map((s, index) => (<option key={index} value={s}>{s}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mt-12 border-t border-neutral-200 mb-8">

                            <div className="border-b border-neutral-200 cursor-pointer">
                                {/* HEADER */}
                                <div onClick={() => setShowDescription(!showDescription)} className="w-full flex justify-between items-center py-6 group">
                                    <span className=" uppercase tracking-[0.2em] text-neutral-800 font-bold">product Description</span>

                                    {/* Arrow */}
                                    <span className={`text-3xl transition-all duration-300 ease-in-out ${showDescription ? "rotate-180" : "rotate-0"} group-hover:opacity-70`}>+</span>
                                </div>
                                    {/* CONTENT */}
                                <div className={`grid transition-all duration-500 ease-in-out ${showDescription ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                    <div className="overflow-hidden">
                                        <div className="pb-6 space-y-6 text-sm leading-relaxed text-neutral-600">
                                            {/* Main description */}
                                            <p className="max-w-prose">{apparel.description}</p>
                                            {/* Divider */}
                                            <div className="border-t border-neutral-200"></div>
                                            {/* Details */}
                                            <div className="space-y-2">
                                                <h4 className="uppercase tracking-[0.15em] text-neutral-900 font-semibold">
                                                Details & Construction
                                                </h4>
                                                <p>Section: {apparel.section}</p>
                                                <p>Status: {apparel.status}</p>
                                                <p>Material: {apparel.material}</p>
                                            </div>
                                            {/* Divider */}
                                            <div className="border-t border-neutral-200"></div>

                                            {/* Size */}
                                            <div className="space-y-2">
                                                <h4 className=" uppercase tracking-[0.15em] text-neutral-900 font-semibold">Size & Fit</h4>
                                                <p>Available sizes: {apparel.size.join(", ")}</p>
                                                <p>{apparel.fit}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="border-b border-neutral-200 cursor-pointer">
                                {/* HEADER */}
                                <div onClick={() => setShowDelivery(!showDelivery)} className="w-full flex justify-between items-center py-6 group">
                                    <span className="uppercase tracking-[0.2em] text-neutral-800 font-bold">Delivery and returns</span>

                                    {/* Arrow */}
                                    <span className={`text-3xl transition-all duration-300 ease-in-out ${showDelivery ? "rotate-180" : "rotate-0"} group-hover:opacity-70`}>+</span>
                                </div>
                                    {/* CONTENT */}
                                <div className={`grid transition-all duration-500 ease-in-out ${showDelivery ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                    <div className="overflow-hidden">
                                        <div className="pb-6 space-y-2 text-sm leading-relaxed text-neutral-600">
                                            {/* Main description */}
                                            <img src="/images/delivery.png" alt="" className='w-8'/>
                                            <h4 className="uppercase tracking-[0.15em] text-neutral-900 font-semibold">Free deliveries and returns worldwide</h4>
                                            <p className='mb-4'>In general package will arrive within 5 business days after order confirmed</p>
                                            {/* Divider */}
                                            <div className="border-t border-neutral-200"></div>
                                            {/* Details */}
                                            <div className="space-y-2">
                                                <img src="/images/box.svg" alt="" />
                                                <h4 className="uppercase tracking-[0.15em] text-neutral-900 font-semibold">
                                                Free deliveries and returns worldwide
                                                </h4>
                                                <p className='mb-4'>We deliver across the country for free</p>
                                            </div>
                                            {/* Divider */}
                                            <div className="border-t border-neutral-200"></div>

                                            {/* Size */}
                                            <div className="space-y-2">
                                                <img src="/images/return.svg" alt="" />
                                                <h4 className="uppercase tracking-[0.15em] text-neutral-900 font-semibold">Guaranteed returns within first three days</h4>
                                                <p>Return your desired item within three days</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button onClick={() => {
                            if (!size) {
                                toast.error("Please add a size");
                                return;
                            }
                            addToCart({...apparel, size})}} className='w-full bg-black  font-medium text-white hover:cursor-pointer hover:border-none mb-4' >Add to Cart</button>
                        <button onClick={handleBookNow} className='w-full bg-white  font-medium text-black  border border-neutral-300 hover:cursor-pointer'>Purchase Now</button>
                    </div>
                </div>
                
                {showForm && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    
                    <div className="bg-white w-[90%] max-w-md p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Enter Details</h2>

                        <input type="text" placeholder="Full Name" className="w-full border p-2 mb-3" value={customer.name} onChange={(e) => setCustomer({...customer, name: e.target.value})}/>

                        <input name='phone' type="phone" placeholder="Phone Number" maxLength={11} className="w-full border p-2 mb-3" value={customer.phone} onChange={(e) => setCustomer({...customer, phone: e.target.value})}/>

                        <input type='text' placeholder="Address" className="w-full border p-2 mb-4" value={customer.address} onChange={(e) => setCustomer({...customer, address: e.target.value})}/>

                        <div className="flex justify-between">
                            <button onClick={() => setShowForm(false)} className="px-4 py-2 border">Cancel</button>
                            <button onClick={() => {
                                if (!customer.name || !customer.phone || !customer.address) {
                                toast.error("Please fill all fields");
                                return;
                                }
                                setShowForm(false);
                                setShowSummary(true);
                            }}
                            className="px-4 py-2 bg-black text-white">Continue</button>
                        </div>
                    </div>

                </div>
                )}
            </div>
            
           {showSummary && (
            <SingleConfirmOrder apparel={apparel} size={size} customer={customer} 
            onClose={() => setShowSummary(false)} onConfirm={() => {sendToWhatsApp({ apparel, size, customer });
            addToCart({ ...apparel, size });
            setShowSummary(false); setCustomer({ name: "", phone: "", address: "" }); 
                }}/>)}
        </section>

        <YouMayLike/>
    </main>
  )
}

export default ItemDetails