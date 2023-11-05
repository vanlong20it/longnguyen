"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FeedbackItem from "./FeedbackItem";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const FEEDBACKS = [
  {
    id: 1,
    name: "John Shad",
    role: "User from USA",
    feedback:
      "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry",
    rate: 5,
  },
  {
    id: 2,
    name: "Nam Nguyen",
    role: "User from Vietnam",
    feedback:
      "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry",
    rate: 5,
  },
  {
    id: 3,
    name: "Balad Ocha",
    role: "User from Iran",
    feedback:
      "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry",
    rate: 5,
  },
  {
    id: 4,
    name: "John Shad",
    role: "User from USA",
    feedback:
      "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry",
    rate: 5,
  },
];

const FeedbackSlide = () => {
  return (
    <div>
      <Swiper
        style={{ paddingBottom: "40px" }}
        slidesPerView={2}
        spaceBetween={16}
        loop
        pagination
        modules={[Navigation, Pagination]}
      >
        {FEEDBACKS.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <FeedbackItem {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FeedbackSlide;
