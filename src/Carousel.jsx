import { useEffect, useState } from "react";
import { shortList, list } from "./data";
import defaultImg from "./assets/user.svg";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentSlide, setCurrentSlide] = useState(0);
  const moveSlide = (direction) => {
    let value = direction == "prev" ? people.length - 1 : 1;

    setCurrentSlide((old) => {
      let nextSlide = (old + value) % people.length;
      return nextSlide;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      moveSlide("next");
    }, 4000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentSlide]);

  return (
    <div>
      <section className="slider-container">
        {people.map((item, index) => {
          const { image, name, title, quote, id } = item;
          return (
            <article
              className={`slide ${index != currentSlide ? "hidden" : null}`}
              key={id}
              style={{
                transform: `translateX(${100 * (index - currentSlide)}%)`,
              }}
            >
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
        <button
          type="button"
          className="prev"
          onClick={(e) => moveSlide(e.target.id)}
        >
          <FiChevronLeft id="prev" />
        </button>
        <button
          type="button"
          className="next"
          onClick={(e) => moveSlide(e.target.id)}
        >
          <FiChevronRight id="next" />
        </button>
      </section>
    </div>
  );
};

export default Carousel;
