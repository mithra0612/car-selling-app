import React, { useState } from "react";
import { Badge, Card } from "flowbite-react";
import { CardContent } from "@mui/material";

const IconFilter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const IconHeart = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const IconStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconMap = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconSearch = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const IconChevronUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

// Car data
const carsData = [
  {
    id: 1,
    brand: "Mercedes",
    model: "C-Class",
    year: 2020,
    rating: 4.7,
    specs: ["50,000 km", "Petrol", "Manual", "2nd Owner"],
    engine: "Rs. 5.2L",
    reviews: 47,
    images: [
      "/api/placeholder/400/300?text=Mercedes+C-Class+Front",
      "/api/placeholder/400/300?text=Mercedes+C-Class+Side",
      "/api/placeholder/400/300?text=Mercedes+C-Class+Interior",
    ],
    currentImageIndex: 0,
  },
  {
    id: 2,
    brand: "BMW",
    model: "3 Series",
    year: 2021,
    rating: 4.3,
    specs: ["45,000 km", "Diesel", "Manual", "2nd Owner"],
    engine: "Rs. 6.2L",
    reviews: 23,
    images: [
      "/api/placeholder/400/300?text=BMW+3+Series+Front",
      "/api/placeholder/400/300?text=BMW+3+Series+Side",
      "/api/placeholder/400/300?text=BMW+3+Series+Interior",
    ],
    currentImageIndex: 0,
  },
  {
    id: 3,
    brand: "Audi",
    model: "A4",
    year: 2019,
    rating: 4.2,
    specs: ["60,000 km", "Petrol", "Manual", "2nd Owner"],
    engine: "Rs. 4.8L",
    reviews: 12,
  },
  {
    id: 4,
    brand: "Mercedes",
    model: "E-Class",
    year: 2022,
    rating: 4.7,
    specs: ["55,000 km", "Diesel", "Manual", "2nd Owner"],
    engine: "Rs. 7.2L",
    reviews: 47,
  },
  {
    id: 5,
    brand: "BMW",
    model: "5 Series",
    year: 2020,
    rating: 4.3,
    specs: ["48,000 km", "Petrol", "Manual", "2nd Owner"],
    engine: "Rs. 8.2L",
    reviews: 23,
  },
  {
    id: 6,
    brand: "Audi",
    model: "A6",
    year: 2021,
    rating: 4.2,
    specs: ["52,000 km", "Diesel", "Manual", "2nd Owner"],
    engine: "Rs. 6.8L",
    reviews: 12,
  },
];

const initialFilters = {
  "Brand & Model": {
    expanded: false,
    options: [...new Set(carsData.map((car) => car.brand))].map((brand) => ({
      label: brand,
      checked: false,
    })),
  },
  "Model Year": {
    expanded: false,
    options: [...new Set(carsData.map((car) => car.year))].map((year) => ({
      label: year.toString(),
      checked: false,
    })),
  },
  "Kilometers Driven": {
    expanded: false,
    options: [],
  },
  "Fuel Type": {
    expanded: false,
    options: [],
  },
  Color: {
    expanded: false,
    options: [],
  },
  Ownership: {
    expanded: false,
    options: [],
  },
  "Body Type": {
    expanded: false,
    options: [],
  },
};

const ImageNavButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
    style={{ [direction === "left" ? "left" : "right"]: "8px" }}
  >
    {direction === "left" ? (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    ) : (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    )}
  </button>
);

const Icon = ({ children, className = "" }) => (
  <div className={`transition-transform hover:scale-110 ${className}`}>
    {children}
  </div>
);

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-t-lg group">
      <div
        className={`relative h-64 transition-transform duration-500 ease-in-out ${
          isTransitioning ? "opacity-80" : ""
        }`}
      >
        <img
          src={images[currentIndex]}
          alt={`${title} - View ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Image Navigation */}
      <div className="absolute inset-x-0 top-1/2 flex justify-between transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={prevImage}
          className="mx-2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M15 19l-7-7 7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="mx-2 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const CarCard = ({ car, isFavorite, onToggleFavorite }) => {
  return (
    <Card className="overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
      <ImageCarousel
        images={car.images || ["/api/placeholder/400/300"]}
        title={`${car.brand} ${car.model}`}
      />

      {/* Quick Actions */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={() => onToggleFavorite(car.id)}
          className="p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
        >
          <IconHeart filled={isFavorite} />
        </button>
      </div>

      {/* Rating Badge */}
      <div className="absolute top-4 left-4">
        <Badge className="bg-white/90 text-black px-3 py-1 flex items-center gap-2">
          <span className="text-yellow-500">★</span>
          <span className="font-medium">{car.rating}</span>
          <span className="text-sm text-gray-600">({car.reviews})</span>
        </Badge>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold">
                {car.brand} {car.model}
              </h3>
              <p className="text-gray-600">{car.year}</p>
            </div>
            <div className="text-xl font-bold text-orange-600">
              {car.engine}
            </div>
          </div>

          {/* Specs */}
          <div className="flex flex-wrap gap-2">
            {car.specs.map((spec, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-orange-100 text-orange-800 hover:bg-orange-200 transition-colors"
              >
                {spec}
              </Badge>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 21s-8-4.5-8-11a8 8 0 1 1 16 0c0 6.5-8 11-8 11z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>City Location</span>
          </div>

          {/* Action Button */}
          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
            View Details
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default function HomePage() {
  const [favorites, setFavorites] = useState(new Set());
  const [filters, setFilters] = useState(initialFilters);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSort, setActiveSort] = useState("Recommended");

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const toggleFilter = (filterName) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: {
        ...prev[filterName],
        expanded: !prev[filterName].expanded,
      },
    }));
  };

  const toggleFilterOption = (filterName, optionLabel) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: {
        ...prev[filterName],
        options: prev[filterName].options.map((option) =>
          option.label === optionLabel
            ? { ...option, checked: !option.checked }
            : option
        ),
      },
    }));
  };

  // Filter cars based on selected filters and search term
  const filteredCars = carsData.filter((car) => {
    // Search term filter
    if (
      searchTerm &&
      !car.brand.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !car.model.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Brand filter
    const selectedBrands = filters["Brand & Model"].options
      .filter((option) => option.checked)
      .map((option) => option.label);
    if (selectedBrands.length > 0 && !selectedBrands.includes(car.brand)) {
      return false;
    }

    // Year filter
    const selectedYears = filters["Model Year"].options
      .filter((option) => option.checked)
      .map((option) => parseInt(option.label));
    if (selectedYears.length > 0 && !selectedYears.includes(car.year)) {
      return false;
    }

    return true;
  });

  // Split cars into rows of three
  const carRows = [];
  for (let i = 0; i < filteredCars.length; i += 3) {
    carRows.push(filteredCars.slice(i, i + 3));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-fluid w-full h-screen flex">
        {/* Filters Sidebar */}
        <div className="w-72 h-full bg-white shadow-lg p-6 flex-shrink-0 overflow-y-auto">
          <div className="flex items-center gap-3 mb-6">
            <Icon>
              <IconFilter />
            </Icon>
            <span className="text-lg font-semibold">Filters</span>
          </div>

          {Object.entries(filters).map(([filterName, filterData]) => (
            <div key={filterName} className="border-t border-gray-100 py-4">
              <button
                className="w-full flex items-center justify-between text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => toggleFilter(filterName)}
              >
                <span className="font-medium">{filterName}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    filterData.expanded ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {filterData.expanded && filterData.options.length > 0 && (
                <div className="mt-3 pl-2 space-y-2">
                  {filterData.options.map((option) => (
                    <label
                      key={option.label}
                      className="flex items-center gap-3 py-1 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={option.checked}
                        onChange={() =>
                          toggleFilterOption(filterName, option.label)
                        }
                        className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="group-hover:text-orange-600 transition-colors">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 h-full overflow-hidden flex flex-col">
          {/* Search Bar */}
          <div className="p-6 bg-white shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search cars..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <svg
                  className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={activeSort}
                  onChange={(e) => setActiveSort(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
                <svg
                  className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Car Grid */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  isFavorite={favorites.has(car.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
