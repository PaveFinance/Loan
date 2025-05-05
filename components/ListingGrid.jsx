import React from "react";
import ListingCard from "./ListingCard";

export default function ListingGrid({ listings, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <ListingCard
          key={listing.id}
          listing={listing}
          onClick={() => onSelect(listing)}
        />
      ))}
    </div>
  );
}
