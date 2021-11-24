import React, { useState, useEffect } from "react";
import BtnSlider from "./BtnSlider";
import banner1 from "../../assets/img/components/banner2x.png";
import useFetch from "../../hooks/use-fetch";

import "./Slider.css";

const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [banners, setBanners] = useState([]);

  const {
    isLoading: bannersIsLoading,
    httpError: bannersError,
    sendRequest: fetchBanners,
  } = useFetch();

  useEffect(() => {
    const transformBanners = (bannerObj) => {
      setBanners(bannerObj);
    };
    fetchBanners("https://moitane-api.lemon.do/v1/Banners", transformBanners);
  }, [fetchBanners]);

  const nextSlide = () => {
    if (slideIndex !== banners.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === banners.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(banners.length);
    }
  };

  return (
    <div className="container-slider">
      {bannersError && <p>There is error While Fetching Data</p>}
      {!bannersIsLoading &&
        banners.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <h1 className="title">{obj.title}</h1>
              <p className="description">{obj.description}</p>
              {obj.imageUrl ===
              "https://moitane-static.lemon.do/Moitane_files/c82ae3f4-b465-4a7e-932c-04451a6d42d6_Thumb.jpeg" ? (
                <img src={banner1} />
              ) : (
                <img src={obj.imageUrl} />
              )}
            </div>
          );
        })}
      <button className="orderBtn">შეუკვეთე ახლავე</button>
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
};

export default Slide;
