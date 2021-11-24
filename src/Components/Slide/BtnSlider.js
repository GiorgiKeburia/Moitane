import React from "react";
import "./Slider.css";
import leftArrow from "../../assets/img/components/leftsmall.png";
import rightArrow from "../../assets/img/components/rightsmall.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
