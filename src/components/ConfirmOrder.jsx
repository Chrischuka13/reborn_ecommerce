import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext';

const ConfirmOrder = ({show, onClose, name, phone, address}) => {
    const { cartItems, setCartItems } = useContext(CartContext);
    const orderDate = new Date().toLocaleDateString();

    const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0);

    const [orderId] = React.useState(
    Math.floor(100000 + Math.random() * 900000));

    const resetCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    };

    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const sendToWhatsApp = () => {
    const items = cartItems.map(
    item =>
        `${item.name} (${item.size}) x${item.quantity} - ₦${item.price * item.quantity}`
    ).join("\n");

    const message = `
    New Order

    ID: ${orderId}
    Name: ${name}
    Phone: ${phone}
    Address: ${address}

    ITEM(s):
    ${items}

    Total: ₦${total}
`;
    const phoneNumber = "2347087990133";
    window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
};

    if (!show) return null;


  return (
    <section>
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2'>
            <div className='bg-white w-full max-w-md p-6 max-h-[90vh] overflow-y-auto'>
                <div className='flex justify-between items-center '>
                    <h1 className='text-2xl font-bold'>Proceed to WhatsApp</h1>
                    <div className="hover:opacity-60 transition hover:cursor-pointer" onClick={()=> {onClose()}}><img src="/images/x.png" alt="" /></div> 
                </div>
            
                <p className='text-[14px] mb-4'>Send your order to WhatsApp to confirm</p>
                <p>Your order summary</p>
                <p><b>Name:</b> {name}</p>
                <p><b>Phone:</b> {phone}</p>
                <p><b>Address:</b> {address}</p>
                <hr className='my-4'/>
                <p className="font-semibold mb-2">Order ID: #{orderId}</p>
                {cartItems.map(item => (
                //display cart data
                    <div key={`${item.id}-${item.size}`} className="flex justify-between bg-neutral-50 p-4 mb-2">
                        <div>
                            <span className="font-semibold">{item.name}</span>
                            <div className="text-sm text-neutra-600">
                                {item.quantity}x • Size {item.size}
                            </div>
                        </div>
                        <span className="font-semibold">₦{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                    ))}

                    <div className='flex justify-between items-center bg-neutral-50 p-6'>
                        <h4 className='text-[18px]'>Order Total:</h4>
                        <span className='font-bold text-[28px]'>₦{total.toLocaleString()}</span>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500 mb-2">Order Date: {orderDate}</p>
                    </div>

                <button onClick={()=> {onClose(), resetCart(), sendToWhatsApp()}} className='bg-black text-white p-4 w-full rounded-4xl hover:cursor-pointer flex justify-center items-center gap-2'>Send Order Now <img src="/images/social.png" alt="" className='w-6'/></button>
            </div>
        </div> 
    </section>
  )
}

export default ConfirmOrder