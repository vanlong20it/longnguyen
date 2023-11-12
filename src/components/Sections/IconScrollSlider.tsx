import Image from "next/image";
import React from "react";

const ICONS = [
  "/icons/css-icon.png",
  "/icons/html-icon.png",
  "/icons/js-icon.png",
  "/icons/laravel-icon.png",
  "/icons/nextjs-icon.png",
  "/icons/nuxtjs-icon.png",
  "/icons/react-icon.png",
  "/icons/vue-icon.png",
];

const IconScrollSlider = () => {
  return (
    <div className="group container flex flex-nowrap items-center justify-center space-x-16 overflow-hidden py-10">
      <div className="animate-loop-scroll flex items-center space-x-16">
        {ICONS.map((item, index) => {
          return (
            <div key={item} className="relative h-20 w-20 flex-1">
              <Image
                src={item}
                alt="longnguyen"
                layout="fill"
                objectFit="contain"
                className="h-auto max-w-full"
              />
            </div>
          );
        })}
      </div>
      <div className="animate-loop-scroll flex items-center space-x-16">
        {ICONS.map((item, index) => {
          return (
            <div key={item} className="relative h-20 w-20 flex-1">
              <Image
                src={item}
                alt="longnguyen"
                layout="fill"
                objectFit="contain"
                className="h-auto max-w-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconScrollSlider;
