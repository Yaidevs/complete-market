import React from 'react';

export function RestaurantCard({ name, imageUrl }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img
            src={imageUrl}
            alt={`${name} restaurant`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-max">
        <span className="px-4 py-1.5 bg-[#E1957D] text-white rounded-full text-sm font-medium shadow-md">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}