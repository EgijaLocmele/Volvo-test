import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface CarouselControlsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  className?: string;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  onPrevClick,
  onNextClick,
  className,
}) => {
  return (
    <div className="carousel-control">
      <button onClick={onPrevClick} className={className}>
        <FaChevronLeft className="carousel-control-icon" />
      </button>
      <button onClick={onNextClick} className={className}>
        <FaChevronRight className="carousel-control-icon" />
      </button>
    </div>
  );
};

export default CarouselControls;
