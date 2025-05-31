import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Clock, Star } from 'lucide-react';
import FoodCategoryCard from '../components/food/FoodCategoryCard';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import SpecialOfferCard from '../components/food/SpecialOfferCard';

const HomePage: React.FC = () => {
  // Mock data
  const categories = [
    { id: 1, name: 'Pizza', icon: '🍕', color: 'bg-orange-100' },
    { id: 2, name: 'Burgers', icon: '🍔', color: 'bg-red-100' },
    { id: 3, name: 'Salads', icon: '🥗', color: 'bg-green-100' },
    { id: 4, name: 'Sushi', icon: '🍣', color: 'bg-pink-100' },
    { id: 5, name: 'Desserts', icon: '🍰', color: 'bg-yellow-100' },
    { id: 6, name: 'Drinks', icon: '🥤', color: 'bg-blue-100' },
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Fresh Kitchen',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4.8,
      deliveryTime: '20-30 min',
      deliveryFee: '$2.99',
      cuisine: 'Healthy, Salads',
    },
    {
      id: 2,
      name: 'Burger House',
      image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4.5,
      deliveryTime: '25-35 min',
      deliveryFee: '$1.99',
      cuisine: 'American, Burgers',
    },
    {
      id: 3,
      name: 'Pizza Palace',
      image: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4.7,
      deliveryTime: '15-25 min',
      deliveryFee: '$2.49',
      cuisine: 'Italian, Pizza',
    },
  ];

  const specialOffers = [
    {
      id: 1,
      title: 'Daily Ticket Specials',
      description: 'These specials really pop!',
      backgroundColor: 'bg-yellow-100',
      buttonText: 'Order Now',
      buttonColor: 'bg-red-500',
    },
    {
      id: 2,
      title: 'Daily Meal Specials',
      description: 'Ready your appetite for the meal.',
      backgroundColor: 'bg-orange-100',
      buttonText: 'Get Now',
      buttonColor: 'bg-orange-500',
    },
  ];

  return (
    <div className="pb-10">
      {/* Hero Section */}
      <section className="relative bg-emerald-50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="food-pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M10 10L20 10L20 20L10 20Z"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#food-pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="md:max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-emerald-600">Click</span> &{' '}
              <span className="text-orange-500">Eat</span> Your Favorite Food
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Delicious food delivered to your door in minutes. Browse restaurants, choose your
              meal, and track your delivery in real-time.
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  className="pl-10 py-3 px-4 block w-full border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for food or restaurant"
                  className="pl-10 py-3 px-4 block w-full border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">
                Find Food
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialOffers.map((offer) => (
              <SpecialOfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <FoodCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Restaurants Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Popular Restaurants</h2>
            <Link
              to="/restaurants"
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">How Click&Eat Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Set Your Location</h3>
              <p className="text-gray-600">
                Enter your address to see available restaurants in your area.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Food</h3>
              <p className="text-gray-600">
                Browse menus, read reviews, and select your favorite dishes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Enjoy quick delivery to your doorstep and track your order in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Get the Click&Eat App</h2>
              <p className="text-emerald-100 mb-6">
                Download our mobile app for a better experience. Order food, track delivery, and
                receive exclusive offers on the go.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center">
                  <div className="mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.5,2H8.5L8,2.5v19L8.5,22h9l0.5-0.5v-19L17.5,2z M16,19h-6v-1h6V19z M16,16h-6v-1h6V16z M16,13h-6v-1h6V13z M16,10h-6V9h6V10z M16,7h-6V6h6V7z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center">
                  <div className="mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.5,20.5L3,20v-16l0.5-0.5L14,10v4L3.5,20.5z"></path>
                      <path d="M14,10l2.5-1.5l7,7l-7,7L14,21V10z"></path>
                      <path d="M14,3v7l2.5-1.5l7-7l-7,7L14,3z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-96 bg-emerald-800 rounded-3xl relative overflow-hidden shadow-xl">
                <div className="absolute inset-2 bg-white rounded-2xl overflow-hidden">
                  <div className="w-full h-12 bg-emerald-600 flex items-center justify-center">
                    <div className="text-white font-semibold">Click&Eat</div>
                  </div>
                  <div className="p-4">
                    <div className="mb-4">
                      <div className="h-40 bg-gray-200 rounded-lg mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    <div className="mb-4">
                      <div className="h-20 bg-gray-200 rounded-lg mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="mb-4">
                      <div className="h-20 bg-gray-200 rounded-lg mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;