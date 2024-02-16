import React, { useState, useEffect } from "react";
import CarouselItem from "../CarouselItem";
import CarouselControls from "../CarouselControls";
import PaginationDots from "../PaginationDots";
import Car from "../../models/Car";

interface CarouselProps {
  cars: Car[];
}

const Carousel: React.FC<CarouselProps> = ({ cars }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevClick = () => {
    setCurrentPage((prevIndex) =>
      prevIndex === 0 ? cars.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentPage((prevIndex) =>
      prevIndex === cars.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleIndexChange = (index: number) => {
    setCurrentPage(index);
  };

  const totalItems = cars.length;
  const startIndex = currentPage;
  const endIndex = (startIndex + (isMobileView ? 2 : 4)) % totalItems;

  const calculateVisibleCars = () => {
    return endIndex > startIndex
      ? cars.slice(startIndex, endIndex)
      : [...cars.slice(startIndex), ...cars.slice(0, endIndex)];
  };

  const visibleCars = calculateVisibleCars();

  return (
    <div>
      <div className="carousel">
        {visibleCars.map((car) => (
          <CarouselItem key={car.id} car={car} />
        ))}
      </div>
      {!isMobileView && (
        <div>
          <CarouselControls
            className="button-round"
            onPrevClick={() => {
              handlePrevClick();
            }}
            onNextClick={() => {
              handleNextClick();
            }}
          />
        </div>
      )}
      <div>
        <PaginationDots
          totalItems={cars.length}
          currentIndex={currentPage}
          onChangeIndex={handleIndexChange}
        />
      </div>
    </div>
  );
};
export default Carousel;
