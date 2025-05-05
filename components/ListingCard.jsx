import React from "react";

export default function ListingCard({ listing, onClick }) {
  return (
    <div
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={listing.images[0]}
          alt={listing.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
          {listing.bedrooms}BR
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {listing.title}
          </h3>
          <p className="text-lg font-bold text-indigo-600">
            GHS {listing.price.toLocaleString()}
          </p>
        </div>

        <p className="text-gray-500 text-sm mb-2">{listing.location}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{listing.size}</span>
          <span>•</span>
          <span>{listing.bedrooms} beds</span>
          <span>•</span>
          <span>{listing.bathrooms} baths</span>
        </div>
      </div>
    </div>
  );
}
