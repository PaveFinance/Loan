"use client";

import React, { useState } from "react";
import SidePanel from "@/components/SidePanel";
import ListingGrid from "@/components/ListingGrid";
import ListingModal from "@/components/ListingModal";
import TopPanel from "@/components/TopPanel";

// Dummy data
// const listings = [
//   {
//     id: 1,
//     title: "Modern 2BR Apartment",
//     location: "Accra",
//     price: 1200,
//     size: "1,200 sqft",
//     bedrooms: 2,
//     bathrooms: 2,
//     images: [
//       "https://placehold.co/600x400?text=Living+Room",
//       "https://placehold.co/600x400?text=Bedroom",
//       "https://placehold.co/600x400?text=Kitchen",
//     ],
//     description:
//       "A beautiful modern apartment in the heart of Accra with stunning city views.",
//     amenities: ["Parking", "Pool", "Gym", "Security"],
//   },
//   {
//     id: 2,
//     title: "Spacious 3BR Villa",
//     location: "Kumasi",
//     price: 1800,
//     size: "2,400 sqft",
//     bedrooms: 3,
//     bathrooms: 3,
//     images: [
//       "https://placehold.co/600x400?text=Living+Room",
//       "https://placehold.co/600x400?text=Bedroom",
//       "https://placehold.co/600x400?text=Kitchen",
//     ],
//     description:
//       "A spacious villa with three bedrooms and three bathrooms in Kumasi.",
//     amenities: ["Parking", "Pool", "Gym", "Security"],
//   },
//   {
//     id: 3,
//     title: "Cozy Studio Apartment",
//     location: "Tamale",
//     price: 800,
//     size: "800 sqft",
//     bedrooms: 1,
//     bathrooms: 1,
//     images: [
//       "https://placehold.co/600x400?text=Living+Room",
//       "https://placehold.co/600x400?text=Bedroom",
//       "https://placehold.co/600x400?text=Kitchen",
//     ],
//     description: "A cozy studio apartment in Tamale with a private balcony.",
//     amenities: ["Parking", "Pool", "Gym", "Security"],
//   },
//   {
//     id: 4,
//     title: "Luxurious 4BR Villa",
//     location: "Cape Coast",
//     price: 2500,
//     size: "3,200 sqft",
//     bedrooms: 4,
//     bathrooms: 4,
//     images: [
//       "https://placehold.co/600x400?text=Living+Room",
//       "https://placehold.co/600x400?text=Bedroom",
//       "https://placehold.co/600x400?text=Kitchen",
//     ],
//     description:
//       "A luxurious villa with four bedrooms and four bathrooms in Cape Coast.",
//     amenities: ["Parking", "Pool", "Gym", "Security"],
//   },
// ];
const listings = [
  {
    id: 1,
    title: "Modern 2BR Apartment",
    location: "Accra",
    price: 1200,
    size: "1,200 sqft",
    bedrooms: 2,
    bathrooms: 2,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    ],
    description:
      "A beautiful modern apartment in the heart of Accra with stunning city views.",
    amenities: ["Parking", "Pool", "Gym", "Security"],
  },
  {
    id: 2,
    title: "Spacious 3BR Villa",
    location: "Kumasi",
    price: 1800,
    size: "2,400 sqft",
    bedrooms: 3,
    bathrooms: 3,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    ],
    description:
      "A spacious villa with three bedrooms and three bathrooms in Kumasi.",
    amenities: ["Parking", "Pool", "Gym", "Security"],
  },
  {
    id: 3,
    title: "Cozy Studio Apartment",
    location: "Tamale",
    price: 800,
    size: "800 sqft",
    bedrooms: 1,
    bathrooms: 1,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1630699144867-37acec97df5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    ],
    description: "A cozy studio apartment in Tamale with a private balcony.",
    amenities: ["Parking", "Pool", "Gym", "Security"],
  },
  {
    id: 4,
    title: "Luxurious 4BR Villa",
    location: "Cape Coast",
    price: 2500,
    size: "3,200 sqft",
    bedrooms: 4,
    bathrooms: 4,
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    ],
    description:
      "A luxurious villa with four bedrooms and four bathrooms in Cape Coast.",
    amenities: ["Parking", "Pool", "Gym", "Security"],
  },
  {
    id: 5,
    title: "Penthouse Suite",
    location: "Accra",
    price: 3000,
    size: "2,800 sqft",
    bedrooms: 3,
    bathrooms: 3.5,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    ],
    description:
      "Luxurious penthouse suite with panoramic city views and premium finishes.",
    amenities: [
      "Parking",
      "Pool",
      "Gym",
      "Security",
      "Concierge",
      "Rooftop Terrace",
    ],
  },
  {
    id: 6,
    title: "Garden Apartment",
    location: "Kumasi",
    price: 1500,
    size: "1,500 sqft",
    bedrooms: 2,
    bathrooms: 2,
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      "https://images.unsplash.com/photo-1605276374707-273bb26357c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    ],
    description:
      "Beautiful garden apartment with private outdoor space and modern amenities.",
    amenities: ["Parking", "Private Garden", "Security", "Storage"],
  },
];

const locations = ["Accra", "Kumasi", "Tamale", "Cape Coast"];

export default function MarketplacePage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const [filters, setFilters] = useState({
    location: "",
    priceRange: [0, 10000],
    bedrooms: "",
    bathrooms: "",
    amenities: [],
  });

  // Filter logic
  const filteredListings = listings.filter((listing) => {
    const matchesLocation =
      !filters.location || listing.location === filters.location;
    const matchesPrice =
      listing.price >= filters.priceRange[0] &&
      listing.price <= filters.priceRange[1];
    const matchesBedrooms =
      !filters.bedrooms || listing.bedrooms === parseInt(filters.bedrooms);
    const matchesBathrooms =
      !filters.bathrooms || listing.bathrooms === parseInt(filters.bathrooms);

    return (
      matchesLocation && matchesPrice && matchesBedrooms && matchesBathrooms
    );
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <SidePanel
        filters={filters}
        setFilters={setFilters}
        locations={locations}
      />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="sm:hidden flex justify-end">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filters
            {Object.values(filters).some((value) =>
              Array.isArray(value) ? value.some((v) => v !== 0) : value !== ""
            ) && <span className="w-2 h-2 bg-indigo-600 rounded-full" />}
          </button>
        </div>
        <div className="max-w-7xl mx-auto">
          <TopPanel
            filters={filters}
            setFilters={setFilters}
            locations={locations}
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Available Properties
              </h1>
              <p className="text-gray-600 mt-1">
                {filteredListings.length} properties found
              </p>
            </div>
            <div className="flex gap-4">
              {/* Add additional controls if needed */}
            </div>
          </div>

          <ListingGrid
            listings={filteredListings}
            onSelect={setSelectedListing}
          />
        </div>
      </main>

      {/* Modal */}
      <ListingModal
        listing={selectedListing}
        onClose={() => setSelectedListing(null)}
      />
    </div>
  );
}
