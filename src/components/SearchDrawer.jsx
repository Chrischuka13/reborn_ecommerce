import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const SearchDrawer = ({ isOpen, onClose }) => {
    const [product, setProduct] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const {cartItems} = useContext(CartContext)

  // lock scroll (same as your cart)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

    useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then(data => {setProduct(data)});
    }, []);

    useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const filteredProducts = product.filter(cloth =>
    cloth.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayProducts = searchTerm ? filteredProducts : product.slice(0, 5);

  return (
    <>
      {/* Overlay */}
      <div className={`fixed inset-0 bg-black/60 z-50 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={onClose}/>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-100 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
        <div className="p-5 flex flex-col h-full">

          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold tracking-wide">SEARCH OUR SITE</h2>
            <button onClick={onClose} className="text-xl"><img src="/images/x.png" alt="" /></button>
          </div>

          {/* Input */}
          <div className="border border-gray-300 flex items-center px-3 py-2 mb-4">
            <input type="text" placeholder="Search" className="w-full outline-none text-sm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/> <img src="/images/nav.icon-search.png" alt="" className="w-4"/>
          </div>

          {/* Inspiration text */}
          {!searchTerm && (
            <p className="font-semibold mb-3">Need some inspiration?</p>)}

          {/* Results */}
          <div className="flex-1 overflow-y-auto">
            {displayProducts.length === 0 ? (
              <p className="text-sm text-gray-500">No products found</p>
            ) : (
              displayProducts.map(product => (
                <div key={product.id} className="flex gap-3 mb-4">
                  <img src={product.images[0]} alt={product.name} className="w-16 h-16 object-cover"/>

                  <div className="text-sm">
                    <p className="font-medium leading-tight">{product.name}</p>
                    <p className="text-gray-700">₦{product.price.toLocaleString()}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* View All */}
          <Link to='/products'><button onClick={onClose} className="mt-4 text-sm font-semibold flex items-center gap-1"> View All → </button></Link>   

        </div>
      </div>
    </>
  );
};

export default SearchDrawer;