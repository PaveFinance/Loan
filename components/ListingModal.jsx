import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ListingModal({ listing, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const router = useRouter();

  if (!listing) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image Gallery */}
          <div className="mb-6">
            <div className="relative h-[400px] mb-4">
              <img
                src={listing.images[activeImageIndex]}
                alt={listing.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`
        absolute top-4 right-4 
        bg-white p-2 rounded-full
        transform transition-transform duration-200 
        hover:scale-110 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        ${isFavorited ? "hover:bg-pink-50" : "hover:bg-gray-50"}
      `}
                  aria-label={
                    isFavorited ? "Remove from favorites" : "Add to favorites"
                  }
                >
                  <svg
                    className={`w-6 h-6 transition-colors duration-200 
          ${isFavorited ? "text-red-500 fill-current" : "text-gray-600"}`}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={isFavorited ? 0 : 2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {listing.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className={`w-20 h-20 object-cover rounded cursor-pointer m-1 ${
                    activeImageIndex === index ? "ring-2 ring-indigo-500" : ""
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{listing.title}</h2>
              <p className="text-gray-600 mb-4">{listing.location}</p>
              <p className="text-xl font-bold text-indigo-600 mb-4">
                GHS {listing.price.toLocaleString()}
              </p>
              <div className="flex gap-4 mb-6">
                <div className="text-center">
                  <p className="font-semibold">{listing.bedrooms}</p>
                  <p className="text-gray-500">Beds</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">{listing.bathrooms}</p>
                  <p className="text-gray-500">Baths</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">{listing.size}</p>
                  <p className="text-gray-500">Area</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-600 mb-4">{listing.description}</p>

              <h3 className="font-semibold mb-2">Amenities</h3>
              <div className="grid grid-cols-2 gap-2">
                {listing.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={onClose}
              className="text-white bg-red-500 px-3 py-2 rounded-lg hover:bg-red-600 transition"
            >
              close
            </button>
            <button
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
              onClick={() => router.push(`/apply/${listing.id}`)}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
