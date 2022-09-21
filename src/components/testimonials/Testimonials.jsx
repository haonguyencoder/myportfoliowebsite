import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/avatar-1.svg";
import Image3 from "../../assets/avatar-3.svg";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: Image1,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
];

const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    return (
      <section className="testimonials container section">
        <h2 style={{color: darkMode? 'white': ''}} className="section__title">Clients & Reviews</h2>
        <Swiper
          className="testimonials__container grid"
  
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          {data.map(({ id, image, title, subtitle, comment }) => {
            return (
              <SwiperSlide className="testimonials__item" key={id}>
                <div className="thumb">
                  <img src={image} alt="" />
                </div>
                <h3 style={{color: darkMode? 'blue': ''}} className="testimonials__title">{title}</h3>
                <span style={{color: darkMode? 'white': ''}} className="subtitle">{subtitle}</span>
                <div style={{color: darkMode? '#333': ''}} className="comment">{comment}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    );
  }

export default Testimonials;
