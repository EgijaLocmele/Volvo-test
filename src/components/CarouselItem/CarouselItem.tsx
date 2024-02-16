import React, { useEffect, useState } from "react";
import Car from "../../models/Car";
import Image from "../Image";
import Link from "../Link";
// import { Link } from "vcc-ui";
import { BsChevronRight } from "react-icons/bs";

interface CarouselItemProps {
  car: Car;
  className?: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ car, className }) => {
  return (
    <div className="carousel-item">
      <div key={car.id}>
        <p className="carousel-item-text">{car.bodyType}</p>
        <div className="carousel-item-text-block">
          <p className="carousel-item-text-block-first">{car.modelName}</p>
          <p className="carousel-item-text-block-second">{car.modelType}</p>
        </div>
        <div>
          <Image
            src={car.imageUrl}
            alt={car.modelName}
            className="carousel-item-image"
          />
        </div>
      </div>
      <div className="carousel-item-links">
        <Link
          text="Learn"
          href="learn"
          className="carousel-item-links-first"
          icon={<BsChevronRight />}
        />
        <Link
          text="Shop"
          href="shop"
          className="carousel-item-links-second"
          icon={<BsChevronRight />}
        />
      </div>
    </div>
  );
};
export default CarouselItem;
