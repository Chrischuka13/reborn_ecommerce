import React, { useState } from 'react'
import toast from 'react-hot-toast';
import api from '../api/axios';

const RegisterNumber = ({isOpen, onClose}) => {
    const [phone, setPhone] = useState("");

    const handleSubmit = async() => {
    if (!phone) {
    return toast.error("Please input your WhatsApp"),
    setCustomer("");
    }

    try {
    const response = await api.post("/subscribe", {phone})
    const data = response.data
    console.log(data);

    toast.success("Number sent successfully")    
    } catch (error) {
        console.log(error)
    }
}

    if (!isOpen) return null;

  return (
    <div className=''>
        <div className='fixed inset-0 bg-black/20 flex items-center justify-center z-50'>
            <div className='bg-white w-[90%] max-w-4xl flex rounded-lg overflow-hidden shadow-xl'>
                <div className='hidden md:block max-w-md w-1/2'>
                    <img src="/images/new reborn logo2.png" alt="" className='h-full w-full object-cover'/>
                </div>
                <div className='w-full md:w-1/2 p-8 text-center relative'>
                    <div onClick={onClose}className="absolute right-4 top-4 text-xl font-bold cursor-pointer"><img src="/images/x.png" alt="" /></div>
                    <h1 className='text-4xl mb-6 uppercase font-semibold text-balance'>Don't miss out <span className='text-red-700'>10% off</span></h1>
                    <p className='mb-4'>Subscribe on WhatsApp to get 10% off and be checkout the first to grab the latest arrivals!</p>
                    <input type="phone" name='phone' maxLength={11} placeholder='Enter your WhatsApp' className='p-4 mb-6 w-full border-2' value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}/>

                    <div onClick={() => {handleSubmit(), onClose()}} className='p-4 bg-black w-full text-white mb-6 cursor-pointer hover:bg-neutral-900'>SUBSCRIBE</div>

                    <p className='text-[12px] text-start'>For more informaation on how we process our data for marketing communication, check our <a href="/terms-of-service"><span className='underline cursor-pointer'>terms of service</span></a></p>
                </div>
            </div>


        </div>
\

    </div>
  )
}

export default RegisterNumber