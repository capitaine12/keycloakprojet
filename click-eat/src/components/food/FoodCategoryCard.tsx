import React from 'react';
import { Link } from 'react-router-dom';

type CategoryProps = {
  category: {
    id: number;
    name: string;
    icon: string;
    color: string;
  };
};

const FoodCategoryCard: React.FC<CategoryProps> = ({ category }) => {
  return (
    <Link to={`/menu?category=${category.name.toLowerCase()}`}>
      <div className={`${category.color} p-4 rounded-lg text-center transition-transform hover:scale-105`}>
        <div className="text-4xl mb-2">{category.icon}</div>
        <h3 className="font-medium text-gray-900">{category.name}</h3>
      </div>
    </Link>
  );
};

export default FoodCategoryCard;