import React, { useState } from 'react';
import { ChevronDown, Search, Filter } from 'lucide-react';

// Food item type
type FoodItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
};

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Mock categories
  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'popular', name: 'Popular' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'burgers', name: 'Burgers' },
    { id: 'salads', name: 'Salads' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' },
  ];

  // Mock food items
  const foodItems: FoodItem[] = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato sauce, mozzarella, and basil',
      price: 12.99,
      image: 'https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'pizza',
      tags: ['vegetarian', 'popular'],
    },
    {
      id: 2,
      name: 'Classic Cheeseburger',
      description: 'Beef patty with cheddar cheese, lettuce, tomato, and special sauce',
      price: 10.99,
      image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'burgers',
      tags: ['popular'],
    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Romaine lettuce, croutons, parmesan cheese, and Caesar dressing',
      price: 8.99,
      image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'salads',
      tags: ['healthy'],
    },
    {
      id: 4,
      name: 'Chocolate Brownie',
      description: 'Warm chocolate brownie with vanilla ice cream',
      price: 6.99,
      image: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'desserts',
      tags: ['sweet'],
    },
    {
      id: 5,
      name: 'Pepperoni Pizza',
      description: 'Classic pizza with tomato sauce, mozzarella, and pepperoni',
      price: 14.99,
      image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'pizza',
      tags: ['popular'],
    },
    {
      id: 6,
      name: 'Veggie Burger',
      description: 'Plant-based patty with lettuce, tomato, and vegan mayo',
      price: 11.99,
      image: 'https://images.pexels.com/photos/161519/abstract-barbecue-barbeque-bbq-161519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'burgers',
      tags: ['vegetarian', 'vegan'],
    },
  ];

  // Filter food items based on active category and search query
  const filteredItems = foodItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || 
                           (activeCategory === 'popular' && item.tags.includes('popular')) || 
                           item.category === activeCategory;
    
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Handle adding item to cart
  const addToCart = (item: FoodItem) => {
    console.log('Adding to cart:', item);
    // In a real app, this would dispatch to a cart state manager
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left sidebar - categories */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-20">
            <h2 className="font-bold text-xl mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeCategory === category.id
                        ? 'bg-emerald-100 text-emerald-800 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h2 className="font-bold text-xl mb-4">Filters</h2>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-emerald-600" />
                    <span className="ml-2 text-gray-700">Vegetarian</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-emerald-600" />
                    <span className="ml-2 text-gray-700">Vegan</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-emerald-600" />
                    <span className="ml-2 text-gray-700">Gluten Free</span>
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium text-gray-700 mb-2">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="50"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$0</span>
                  <span>$50</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - menu items */}
        <div className="lg:w-3/4">
          {/* Search and sort */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search menu..."
                className="pl-10 py-2 px-4 block w-full border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <select className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 appearance-none">
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Alphabetical</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Category heading */}
          <h1 className="text-2xl font-bold mb-6">
            {categories.find((cat) => cat.id === activeCategory)?.name || 'All Items'}
          </h1>

          {/* Food items grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    {item.tags.includes('popular') && (
                      <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                        Popular
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <span className="font-bold text-emerald-600">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-600 mt-1 mb-4 text-sm">{item.description}</p>
                    <div className="flex gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="text-gray-400 mb-4">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
              <p className="text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;