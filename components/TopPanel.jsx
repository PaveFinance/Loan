import React from "react";
import { motion, AnimatePresence } from "motion/react";
export default function TopPanel({
  filters,
  setFilters,
  locations,
  isOpen,
  onClose,
}) {
  const handleApply = () => {
    onClose();
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />

          {/* Filter Panel */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="absolute top-16 right-4 w-96 bg-white rounded-lg shadow-xl z-50 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

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

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 transition"
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
                  Reset
                </button>
                <button
                  className="flex-1 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                  onClick={handleApply}
                >
                  Apply
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    // <div className=" bg-white shadow-lg  sticky top-0 p-6 overflow-y-auto">
    //   <h2 className="text-xl font-semibold mb-6">Filters</h2>

    //   {/* Location Filter */}
    //   <div className="mb-6">
    //     <label className="block text-sm font-medium text-gray-700 mb-2">
    //       Location
    //     </label>
    //     <select
    //       className="w-full border rounded-md py-2 px-3"
    //       value={filters.location}
    //       onChange={(e) =>
    //         setFilters((f) => ({ ...f, location: e.target.value }))
    //       }
    //     >
    //       <option value="">All Locations</option>
    //       {locations.map((loc) => (
    //         <option key={loc} value={loc}>
    //           {loc}
    //         </option>
    //       ))}
    //     </select>
    //   </div>

    //   {/* Price Range Filter */}
    //   <div className="mb-6">
    //     <label className="block text-sm font-medium text-gray-700 mb-2">
    //       Price Range
    //     </label>
    //     <div className="flex gap-2">
    //       <input
    //         type="number"
    //         placeholder="Min"
    //         className="w-1/2 border rounded-md py-2 px-3"
    //         value={filters.priceRange[0]}
    //         onChange={(e) =>
    //           setFilters((f) => ({
    //             ...f,
    //             priceRange: [Number(e.target.value), f.priceRange[1]],
    //           }))
    //         }
    //       />
    //       <input
    //         type="number"
    //         placeholder="Max"
    //         className="w-1/2 border rounded-md py-2 px-3"
    //         value={filters.priceRange[1]}
    //         onChange={(e) =>
    //           setFilters((f) => ({
    //             ...f,
    //             priceRange: [f.priceRange[0], Number(e.target.value)],
    //           }))
    //         }
    //       />
    //     </div>
    //   </div>

    //   {/* Bedrooms Filter */}
    //   <div className="mb-6">
    //     <label className="block text-sm font-medium text-gray-700 mb-2">
    //       Bedrooms
    //     </label>
    //     <select
    //       className="w-full border rounded-md py-2 px-3"
    //       value={filters.bedrooms}
    //       onChange={(e) =>
    //         setFilters((f) => ({ ...f, bedrooms: e.target.value }))
    //       }
    //     >
    //       <option value="">Any</option>
    //       {[1, 2, 3, 4, 5].map((num) => (
    //         <option key={num} value={num}>
    //           {num}
    //         </option>
    //       ))}
    //     </select>
    //   </div>

    //   {/* Bathrooms Filter */}
    //   <div className="mb-6">
    //     <label className="block text-sm font-medium text-gray-700 mb-2">
    //       Bathrooms
    //     </label>
    //     <select
    //       className="w-full border rounded-md py-2 px-3"
    //       value={filters.bathrooms}
    //       onChange={(e) =>
    //         setFilters((f) => ({ ...f, bathrooms: e.target.value }))
    //       }
    //     >
    //       <option value="">Any</option>
    //       {[1, 2, 3, 4].map((num) => (
    //         <option key={num} value={num}>
    //           {num}
    //         </option>
    //       ))}
    //     </select>
    //   </div>

    //   {/* Reset Filters Button */}
    //   <button
    //     className="w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 transition"
    //     onClick={() =>
    //       setFilters({
    //         location: "",
    //         priceRange: [0, 10000],
    //         bedrooms: "",
    //         bathrooms: "",
    //         amenities: [],
    //       })
    //     }
    //   >
    //     Reset Filters
    //   </button>
    // </div>
  );
}
