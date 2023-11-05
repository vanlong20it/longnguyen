import React from "react";
import FixedText from "../../FixedText";
import FeedbackSlide from "./FeedbackSlide";

const TestimonialSection = () => {
  return (
    <div className="bg-gray-900 py-20">
      <FixedText backgroundTitle="Testimonial" title="Client Speak" />
      <div className="container mt-10">
        <FeedbackSlide />
      </div>
    </div>
  );
};

export default TestimonialSection;
