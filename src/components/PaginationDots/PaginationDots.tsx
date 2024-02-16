import React from "react";

interface PaginationDotsProps {
  totalItems: number;
  currentIndex: number;
  onChangeIndex: (index: number) => void;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({
  totalItems,
  currentIndex,
  onChangeIndex,
}) => {
  const handleDotClick = (index: number) => {
    onChangeIndex(index);
  };

  return (
    <div className="pagination">
      {Array.from({ length: totalItems }).map((_, index) => (
        <span
          key={index}
          className={`dot ${index === currentIndex ? "active" : ""}`}
          onClick={() => handleDotClick(index)}
        ></span>
      ))}
    </div>
  );
};

export default PaginationDots;
