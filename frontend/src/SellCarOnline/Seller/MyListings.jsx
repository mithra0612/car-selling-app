import React from "react";
import CarList from "../../ListingCard/Listcar";
export default function MyListings() {
  return (
    <div className="w-[1100px] h-[620px] sticky left-96 mt-12 border-2 border-gray-300 p-10 shadow-md flex flex-col rounded-lg gap-10">
      <h1 className="text-3xl font-medium">My Listings</h1>
      <div className="flex gap-10">
        <CarList />
        <CarList />
      </div>
    </div>
  );
}
