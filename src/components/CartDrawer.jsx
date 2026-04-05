import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext";
import ConfirmOrder from "./ConfirmOrder";
import toast from "react-hot-toast";


export default function CartDrawer(){
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const { cartItems, removeFromCart, cartOpen, closeCart, increaseQty, decreaseQty } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !phone || !address) {
    return setError("Please enter vital credentials"),
    toast.error("Please enter required information"),
    setName(""),
    setPhone(""),
    setAddress("")
  }
  
  try {
    setLoading(true),
    setSuccess("")
  } catch (error) {
    console.log(error)
  }
  finally{
    setLoading(false)
  }
  
  setTimeout(() => {
      setLoading(false);
      closeCart();
      setModalOpen(true);
    }, 800);
  }

  //Total Amount of Item(s) in cart
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

    //Total Item(s) Quantity/Count
  const totalsum = cartItems.reduce(
    (sum, item) => sum + item.quantity, 0
  )

  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);



    return(
      <main >
        <section>
          {cartOpen && 
            (<div className={`fixed inset-0 bg-black/60 z-50 transition-opacity  ${cartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={closeCart}>

              <div className={`fixed top-0 right-0 h-full w-full md:w-100 bg-white z-50 transform transition-transform duration-300 overflow-y-auto ${cartOpen ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>

                <div className="flex items-center justify-between px-6 py-5 border-b">
                  <div className='font-bold uppercase'>shopping cart({totalsum})</div>
                    <div className="hover:opacity-60 transition" onClick={closeCart}><img src="/images/x.png" alt="" className="cursor-pointer"/></div>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                  {cartItems.length === 0 && (<p className="">Your cart is empty.</p>
                    )}
                  {cartItems.map(items => (
                    //display cart data
                  <div key={items.id} className="flex justify-between items-center gap-2 mb-4 ">
                    <div className="">
                      <img src={items.images[0]} alt="" className="w-24 h-24 object-cover"/>
                    </div>
                    
                    <div className='flex-1 overflow-y-auto'>
                      <span className='font-semibold uppercase truncate'>{items.name}</span>
                      <div className='flex items-center justify-between '>
                        <span className='text-black'>{items.quantity}x</span>
                        <span className='text-gray-600 text-sm sm:text-[16px]'>@ ₦{(items.price * items.quantity).toLocaleString()}</span>
                        <span className='text-gray-900 font-medium text-sm sm:text-[16px]'>₦{items.price.toLocaleString()}</span>
                        <span className="text-yellow-500 font-semibold">{items.size}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center mt-3 border rounded-md">
                          <button onClick={() => decreaseQty(items.id, items.size)} className="px-3 py-1 hover:bg-gray-100">-</button>
                          <span className="px-2 text-sm">{items.quantity}</span>
                          <button onClick={() => increaseQty(items.id, items.size)} className="px-3 py-1 hover:bg-gray-100">+</button>
                        </div>
                                      
                        <div className='mt-3 cursor-pointer' onClick={() => removeFromCart(items.id, items.size)}> <img src="/images/delete.svg" alt="" className="w-6"/></div>
                      </div>
                    </div>  
                    
                    <hr className='mb-2 mt-2'/>
                                
                  </div>
                  ))}

                  <div className='flex justify-between items-center py-4'>
                    <h4 className='text-[18px]'>Order Total:</h4>
                      <span className='font-bold text-[28px]'>₦{total.toLocaleString()}</span>
                  </div>  

                  <form onSubmit={handleSubmit} className={` ${cartItems.length === 0 ? "hidden" : "block"}`} >
                    <input name="name" type='name' placeholder='Full Name' className='p-2 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300 mt-2' value={name} onChange={(event)=> {setName(event.target.value); setError(""), setSuccess("")}}/>

                    <input name="phone" type='phone' maxLength={11} placeholder='WhatsApp Number' className='p-2 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300' value={phone} onChange={(event)=> {setPhone(event.target.value.replace(/[^0-9]/g, "")); setError(""), setSuccess("")}}/>

                    <input name="address" type='address' placeholder='Your Address' className='p-2 bg-white bg-none w-full mb-4 border-b-2 border-neutral-200 focus:outline-neutral-300' value={address} onChange={(event)=> {setAddress(event.target.value); setError(""), setSuccess("")}}/>

                    {success && <p className='p-2'style={{color: "green"}}>{success}</p>}
                    {error && <p className='p-2' style={{color: "red"}}>{error}</p>}

                    <button type="submit"  disabled={cartItems.length === 0} className={` text-white p-3 w-full rounded-4xl hover:cursor-pointer ${cartItems.length === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-black text-white"}`}>{loading? "connecting...": "Confirm Order"}</button>

                  </form>
                  
                </div>
              </div>
       
            </div>)}
            
            {modalOpen && <ConfirmOrder show={modalOpen} onClose={() => setModalOpen(false)} name={name} phone={phone} address={address}/>}
        </section>
      </main>
    )
}