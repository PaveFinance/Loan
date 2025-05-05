import React from "react";

export default function Sidebar({ filters, setFilters, locations }) {
  return (
    <div className="hidden md:block w-80 bg-white shadow-lg h-screen sticky top-0 p-6 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>

      {/* Location Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <select
          className="w-full border rounded-md py-2 px-3"
          value={filters.location}
          onChange={(e) =>
            setFilters((f) => ({ ...f, location: e.target.value }))
          }
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            className="w-1/2 border rounded-md py-2 px-3"
            value={filters.priceRange[0]}
            onChange={(e) =>
              setFilters((f) => ({
                ...f,
                priceRange: [Number(e.target.value), f.priceRange[1]],
              }))
            }
          />
          <input
            type="number"
            placeholder="Max"
            className="w-1/2 border rounded-md py-2 px-3"
            value={filters.priceRange[1]}
            onChange={(e) =>
              setFilters((f) => ({
                ...f,
                priceRange: [f.priceRange[0], Number(e.target.value)],
              }))
            }
          />
        </div>
      </div>

      {/* Bedrooms Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bedrooms
        </label>
        <select
          className="w-full border rounded-md py-2 px-3"
          value={filters.bedrooms}
          onChange={(e) =>
            setFilters((f) => ({ ...f, bedrooms: e.target.value }))
          }
        >
          <option value="">Any</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* Bathrooms Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bathrooms
        </label>
        <select
          className="w-full border rounded-md py-2 px-3"
          value={filters.bathrooms}
          onChange={(e) =>
            setFilters((f) => ({ ...f, bathrooms: e.target.value }))
          }
        >
          <option value="">Any</option>
          {[1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* Reset Filters Button */}
      <button
        className="w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 transition"
        onClick={() =>
          setFilters({
            location: "",
            priceRange: [0, 10000],
            bedrooms: "",
            bathrooms: "",
            amenities: [],
          })
        }
      >
        Reset Filters
      </button>
    </div>
  );
}
