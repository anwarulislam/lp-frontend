"use client";
import React, { useState, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Children.count(children);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % totalSlides;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel flex justify-between">
      <button onClick={goToPrevSlide}>
        <FaChevronLeft />
      </button>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          style: {
            display: index === currentIndex ? "block" : "none",
          },
          className: "animate-fade-in",
        })
      )}
      <button onClick={goToNextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
