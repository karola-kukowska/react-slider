import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { list } from "./data";
import defaultImg from "./assets/user.svg";
import { FaQuoteRight } from "react-icons/fa";

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    fade: true,
  };

  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map((item) => {
          const { image, name, title, quote, id } = item;
          return (
            <article key={id}>
              <img
                src={image || defaultImg}
                alt={name}
                className="person-img"
              />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};
export default SlickSlider;
