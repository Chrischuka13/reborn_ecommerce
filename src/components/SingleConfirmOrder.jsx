import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";


const SingleConfirmOrder = ({ apparel, size, customer, onClose, onConfirm }) => {
    const {cartItems} = useContext(CartContext)
    const orderDate = new Date().toLocaleDateString();
    const [orderId] = useState(
    Math.floor(100000 + Math.random() * 900000));

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])

    const sendToWhatsApp = () => {
    const phoneNumber = "2347087990133"; // your WhatsApp number (NO +, NO spaces)

    const message = `
    🛒 *NEW ORDER*

    ORDER ID: ${orderId}
    👕 Product: ${apparel.name}
    📏 Size: ${size}
    💰 Price: ₦${apparel.price.toLocaleString()}

    👤 Name: ${customer.name}
    📞 Phone: ${customer.phone}
    📍 Address: ${customer.address}
    `;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
};
    const handleConfirm = () => {
    sendToWhatsApp(); 
    onConfirm();       
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      
      <div className="bg-white w-[90%] max-w-md p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {/* Product Info */}
            <p className="mb-2">
            <strong>Product:</strong> {apparel.name}
            </p>
            <p className="mb-2">
            <strong>Size:</strong> {size}
            </p>
            <p className="mb-2">
            <strong>Price:</strong> ₦{apparel.price.toLocaleString()}
            </p>

            <hr className="my-3" />

            {/* Customer Info */}
            <p className="mb-2">
            <strong>Name:</strong> {customer.name}
            </p>
            <p className="mb-2">
            <strong>Phone:</strong> {customer.phone}
            </p>
            <p className="mb-2">
            <strong>Address:</strong> {customer.address}
            </p>

            <p className="text-sm text-gray-500 mb-2">Order Date: {orderDate}</p>

            {/* Actions */}
            <div className="flex gap-3 mt-4">
                <button onClick={onClose} className="w-1/2 border py-2"> Cancel</button>
                <button onClick={handleConfirm} className="w-1/2 bg-black text-white py-2">Confirm Order</button>
            </div>
      </div>

    </div>
  );
};

export default SingleConfirmOrder;