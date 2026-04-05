import React, { useState } from 'react'
import toast from "react-hot-toast";
import api from '../api/axios';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [phone, setPhone] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleSubmit = async(e) => {
    e.preventDefault()
    if (!phone) {
    toast.error("Please enter required information");
    setPhone("");
    return;
}
    try {
        const response = await api.post("/subscribe", {phone})
        const data = response.data
        console.log(data);
        
        setSuccess("Number sent successfully"),
        toast.success("success")
        setTimeout(()=>{
            setSuccess("")
        }, 2000);
        
    } catch (error) {
        console.log(error)
    }
}


  return (
    <footer className='bg-black'>
        <section className='w-11/12 container mx-auto py-10 mt-30'>
            

            <div className='lg:grid grid-cols-2 gap-30 py-10'>
                <div>
                    <Link to='/'><img src="/images/reborn logo3.png" alt="" className='mb-4 w-30 md:w-50'/></Link>
                    <input type="phone" name='phone' maxLength={11} className='text-mauve-300 p-3 bg-none w-full mb-4 border-b-2 border-neutral-600 focus:outline-neutral-300 mt-2' placeholder='Your WhatsApp number' value={phone} onChange={(event)=> {setPhone(event.target.value.replace(/[^0-9]/g, "")); setError(""), setSuccess("")}}/>

                    {success && <p className='p-2'style={{color: "green"}}>{success}</p>}
                    {error && <p className='p-2' style={{color: "red"}}>{error}</p>}

                    <button onClick={handleSubmit} className='bg-white w-full mb-4'>Subscribe</button>
                    <p className='text-mauve-200'>Subscribe to our WhatsApp Community and get 10% off and be the first to grab the deals and latest arrivals!</p>
                </div>
                
                <div className='grid grid-cols-2 gap-5 mt-8 lg:grid-cols-3'>
                    <div>
                        <p className='text-mauve-400 mb-2'>SHOP</p>
                        <div className='text-white flex flex-col gap-2'>
                            <a href="/collections/men-sport">Men Sportwear</a>
                            <a href="/collections/women-sport">Women Sportwear</a>
                            <a href="/collections/men-casual">Men Casuals</a>
                            <a href="/collections/women-casual">Women Casuals</a>
                        </div>
                    </div>

                    <div>
                        <p className='text-mauve-400 mb-2'>INFORMATION</p>
                        <div className='text-white flex flex-col gap-2'>
                            <a href="">About</a>
                            <a href="/values">Values</a>
                               <a href="">News Room</a>
                        </div>
                    </div>

                    <div>
                        <p className='text-mauve-400 mb-2'>LEGAL</p>
                        <div className='text-white flex flex-col gap-2'>
                            <a href="/terms-of-service">Term's of Service</a>
                            <a href="/refund-policy">Return Policy</a>
                        </div>
                    </div>

                </div>
            </div>
            
        </section>
    </footer>
  )
}

export default Footer