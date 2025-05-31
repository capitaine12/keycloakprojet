import React from 'react';

type SpecialOfferProps = {
  offer: {
    id: number;
    title: string;
    description: string;
    backgroundColor: string;
    buttonText: string;
    buttonColor: string;
  };
};

const SpecialOfferCard: React.FC<SpecialOfferProps> = ({ offer }) => {
  return (
    <div className={`${offer.backgroundColor} rounded-lg p-6 transition-transform hover:scale-[1.02]`}>
      <h3 className="font-bold text-xl mb-2">{offer.title}</h3>
      <p className="text-gray-700 mb-4">{offer.description}</p>
      <button className={`${offer.buttonColor} text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity`}>
        {offer.buttonText}
      </button>
    </div>
  );
};

export default SpecialOfferCard;