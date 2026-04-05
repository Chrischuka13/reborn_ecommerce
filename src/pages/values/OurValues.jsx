import React from 'react'
import { Link } from 'react-router-dom'

const OurValues = () => {
    const motto = [
        {title: "Our goal", content: "To build products that go beyond style — gear that performs, endures, and adapts. We aim to simplify movement through thoughtful design, making steps feel intentional and effortless."},
        {title: "Our values", content: "We stand for clarity, durability, and respect — for people, materials, and the planet. That means making less, but making better. We design with care, cut the noise, and focus on what truly lasts."},
        {title: "Our hope", content: "That what we create inspires confidence, not clutter. We hope our designs help you move with freedom, live with focus, and feel more connected to what matters."}
    ]
  return (
    <main>
            <div class="w-full min-h-screen grid grid-cols-1 ">
                <div class="relative">
                    <img src="images/values.png" alt="" className="object-cover h-screen w-full"/>
                    <div class="absolute inset-0 bg-black/40"></div>
                    <div class="absolute inset-0 w-11/12 container mx-auto flex items-end ">
                        <p class="text-5xl font-bold mb-10 text-white text-start text-balance">MORE THAN LIFESTYLE</p>
                    </div>
                </div>
    
                
            </div> 

            <section className='w-11/12 container mx-auto py-16'>
                <p className='text-neutral-500 text-center mb-4'>Our Purpose</p>
                <h3 className='md:text-4xl text-3xl font-semibold text-center mb-8'>IS TO REDEFINE THE WAY YOU EXPERIENCE MOVEMENT. WE’RE HERE TO ELEVATE EVERY STEP THROUGH DESIGN THAT PERFORMS — SIMPLY, BOLDLY, AND WITH PURPOSE.</h3>
                 <img src="/images/vrcrc.png" alt="" className="object-cover h-screen w-full overflow-hidden rounded-lg"/>
            </section>

            <section className='w-11/12 container mx-auto py-12'>
                <div className='lg:grid grid-cols-3 gap-4'>
                    {motto.map((mottos, i)=>(
                    <div key={i} className='bg-neutral-200 font-medium rounded-lg mb-3 p-6 lg:p-8'>
                        <p className='mb-2 text-neutral-500'>{mottos.title}</p>
                        <p className='text-[19px]'>{mottos.content}</p>
                    </div>
                ))}
                </div>
            </section>

            <img src="/images/jogging.png" alt="" className="object-cover h-screen w-full overflow-hidden"/>

            <section className='w-11/12 container mx-auto py-16'>
                <h3 className='md:text-4xl text-2xl font-semibold text-center mb-8 uppercase'>"Reborn doesn’t just make products — they create intention. Every piece feels thought through, from the design to the materials. You can tell it’s built for people who care about how they move and what they own."</h3>
                <p className='text-center font-medium'>Bode Thomas</p>
                <p className='text-neutral-500 text-center'>Customer from Lagos, Nigeria</p>
            </section>
    </main>
  )
}

export default OurValues