import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';

type RestaurantProps = {
  restaurant: {
    id: number;
    name: string;
    image: string;
    rating: number;
    deliveryTime: string;
    deliveryFee: string;
    cuisine: string;
  };
};

const RestaurantCard: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-sm font-medium flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
            {restaurant.rating}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{restaurant.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {restaurant.deliveryTime}
            </div>
            <div className="text-gray-500 text-sm">{restaurant.deliveryFee} delivery</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;