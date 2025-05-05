import React from "react";

export default function FilterBar({ filters, setFilters }) {
  return (
    <div className="flex gap-4 p-4 bg-white shadow-sm">
      <input
        type="text"
        placeholder="Location"
        className="border rounded px-3 py-2"
        value={filters.location}
        onChange={(e) =>
          setFilters((f) => ({ ...f, location: e.target.value }))
        }
      />
      <input
        type="number"
        placeholder="Min Price"
        className="border rounded px-3 py-2"
        value={filters.minPrice}
        onChange={(e) =>
          setFilters((f) => ({ ...f, minPrice: Number(e.target.value) }))
        }
      />
      <input
        type="number"
        placeholder="Max Price"
        className="border rounded px-3 py-2"
        value={filters.maxPrice}
        onChange={(e) =>
          setFilters((f) => ({ ...f, maxPrice: Number(e.target.value) }))
        }
      />
    </div>
  );
}
