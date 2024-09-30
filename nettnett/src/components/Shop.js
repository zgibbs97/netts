import { useState } from 'react';

const products = [
  { id: 1, name: 'Artwork 1', price: 100, img: 'path_to_artwork1.jpg' },
  { id: 2, name: 'Artwork 2', price: 150, img: 'path_to_artwork2.jpg' },
  { id: 3, name: 'Artwork 3', price: 200, img: 'path_to_artwork3.jpg' },
];

const Shop = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);

  const handleCheckout = () => {
    alert('Proceeding to checkout with: ' + cart.map((item) => item.name).join(', '));
    setCart([]);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Shop My Art</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h5 className="text-2xl font-semibold mb-4 text-gray-800">{product.name}</h5>
              <p className="text-xl text-gray-600 mb-4">${product.price}</p>
              <button
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900">Cart</h2>
        {cart.length > 0 ? (
          <div className="mt-4">
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
            <button
              className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
