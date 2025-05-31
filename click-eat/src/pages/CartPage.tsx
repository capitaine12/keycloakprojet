import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Trash2, Plus, Minus, CreditCard } from 'lucide-react';

const CartPage: React.FC = () => {
  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      price: 12.99,
      quantity: 1,
      image: 'https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Classic Cheeseburger',
      price: 10.99,
      quantity: 2,
      image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  // Handle quantity change
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      console.log(`Update item ${id} quantity to ${newQuantity}`);
      // In a real app, dispatch to state manager
    }
  };

  // Handle remove item
  const removeItem = (id: number) => {
    console.log(`Remove item ${id}`);
    // In a real app, dispatch to state manager
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link to="/menu" className="flex items-center text-emerald-600 hover:text-emerald-700">
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span>Continue Shopping</span>
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg p-8 text-center shadow-md">
          <div className="text-gray-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/menu"
            className="px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors inline-block"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="font-semibold text-lg">Cart Items ({cartItems.length})</h2>
              </div>

              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="px-6 py-5">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 sm:ml-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                          <p className="font-medium text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <p className="text-gray-500 text-sm mb-4">${item.price.toFixed(2)} each</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              className="px-3 py-1 text-gray-600 hover:text-gray-800"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-3 py-1 border-x border-gray-300">
                              {item.quantity}
                            </span>
                            <button
                              className="px-3 py-1 text-gray-600 hover:text-gray-800"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <button
                            className="text-gray-500 hover:text-red-500"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-3">Delivery Address</h3>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md mb-4">
                  <div>
                    <p className="font-medium">Home</p>
                    <p className="text-sm text-gray-600">123 Main Street, Apt 4B</p>
                  </div>
                  <button className="text-emerald-600 text-sm font-medium">Change</button>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-medium mb-3">Payment Method</h3>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="font-medium">Credit Card</p>
                      <p className="text-sm text-gray-600">**** **** **** 4242</p>
                    </div>
                  </div>
                  <button className="text-emerald-600 text-sm font-medium">Change</button>
                </div>
              </div>

              <button className="w-full mt-6 px-4 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors font-medium">
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;