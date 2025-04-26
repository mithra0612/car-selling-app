import React, { useRef } from 'react';
import Header from '../Header/header';
import { Card, Button, Label } from "flowbite-react";
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Replaced SVG imports with Lucide React
import Maruti from './image/maruti.png';
import Ford from './image/ford.png';
import Mahindra from './image/mahindra.png';
import MercedesBenz from './image/mercedes_benz.png';
import Nissan from './image/nissan.png';
import Tata from './image/tata.png';
import Volkswagen from './image/volkswagen.png';
import BMW from './image/bmw.png';
import Honda from './image/honda.png';
import Hyundai from './image/hyundai.png';
import Model1 from './image/model1.png';
import Model2 from './image/model2.png';
import Model3 from './image/model3.png';
import Model4 from './image/model4.png';
import Model5 from './image/model5.png';

const SellCarOne = ({ onchanging }) => { 
  const scrollContainerRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  const carBrands = [
    { img: Maruti, alt: 'Maruti' },
    { img: Ford, alt: 'Ford' },
    { img: Mahindra, alt: 'Mahindra' },
    { img: MercedesBenz, alt: 'Mercedes Benz' },
    { img: Nissan, alt: 'Nissan' },
    { img: Tata, alt: 'Tata' },
    { img: Volkswagen, alt: 'Volkswagen' },
    { img: BMW, alt: 'BMW' },
    { img: Honda, alt: 'Honda' },
    { img: Hyundai, alt: 'Hyundai' }
  ];

  const carModels = [
    { img: Model1, alt: 'Model 1' },
    { img: Model2, alt: 'Model 2' },
    { img: Model3, alt: 'Model 3' },
    { img: Model4, alt: 'Model 4' },
    { img: Model5, alt: 'Model 5' },
    { img: Model1, alt: 'Model 6' },
    { img: Model2, alt: 'Model 7' }
  ];

  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <div className="flex flex-col items-center mt-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center">
          <span className="text-orange-400">Sell{" "}</span>Car Online
        </h1>
        <Card className="w-full max-w-3xl mt-6 shadow-md">
          <div className="space-y-4">
            {/* Car Brand Selection */}
            <div>
              <Label htmlFor="brand" className="text-lg sm:text-xl p-6">
                Select your car{" "}<span className="text-orange-400">Brand</span>
              </Label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 p-6">
                {carBrands.map((brand, index) => (
                  <Button
                    key={index}
                    color="light"
                    className="hover:border-orange-400 hover:border-2 focus:border-2 focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center h-24 w-24 sm:h-28 sm:w-28"
                  >
                    <img
                      src={brand.img}
                      alt={brand.alt}
                      className="h-full w-auto object-contain"
                    />
                  </Button>
                ))}
              </div>
            </div>

            {/* Car Model Selection */}
            <div>
              <Label htmlFor="brand" className="text-lg sm:text-xl p-6">
                Select <span className="text-orange-400">Model</span> of your car
              </Label>
              <div className="relative w-full p-6">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                  <Button
                    color="light"
                    onClick={() => scroll(-300)}
                    className="p-2 bg-transparent hover:bg-white focus:outline-none focus:ring-0 border-none rounded-full w-8 h-8 flex items-center"
                  >
                    <ChevronLeft size={24} /> {/* Updated to use Lucide React component */}
                  </Button>
                </div>
                <div
                  ref={scrollContainerRef}
                  className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar whitespace-nowrap pb-4 pl-12 pr-12"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  {carModels.map((model, index) => (
                    <Button
                      key={index}
                      color="light"
                      className="hover:border-2 focus:border-2 hover:border-orange-400 focus:border-orange-400 focus:outline-none focus:ring-0 flex flex-col items-center justify-center flex-shrink-0 h-24 w-24 sm:h-28 sm:w-28"
                    >
                      <img
                        src={model.img}
                        alt={model.alt}
                        className="h-full w-auto object-contain"
                      />
                    </Button>
                  ))}
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                  <Button
                    color="light"
                    onClick={() => scroll(300)}
                    className="p-2 bg-transparent hover:bg-white focus:outline-none focus:ring-0 border-none rounded-full w-8 h-8 flex items-center"
                  >
                    <ChevronRight size={24} /> {/* Updated to use Lucide React component */}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-3">
              <Button onClick = {onchanging} className="text-white bg-orange-400 focus:ring-1 focus:ring-orange-400 px-3 py-2 text-lg font-semibold rounded-md h-10 w-auto sm:w-50 items-center">
                Submit
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SellCarOne;
