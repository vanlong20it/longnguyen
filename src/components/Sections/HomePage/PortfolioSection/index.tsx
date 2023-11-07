"use client";
import React, { useLayoutEffect, useState } from "react";
import FixedText from "../../FixedText";
import Image from "next/image";
import classNames from "@/utils/classNames";
import ImageModal from "./ImageModal";

const IMAGES_DATA = [
  { src: "/images/portfolio-1.webp", type: "design" },
  { src: "/images/portfolio-2.webp", type: "brand" },
  { src: "/images/portfolio-3.webp", type: "design" },
  { src: "/images/portfolio-4.webp", type: "brand" },
  { src: "/images/portfolio-5.webp", type: "design" },
  { src: "/images/portfolio-6.webp", type: "photo" },
  { src: "/images/portfolio-7.webp", type: "design" },
  { src: "/images/portfolio-8.webp", type: "brand" },
];

const PortfolioSection = () => {
  const [data, setData] = useState(IMAGES_DATA);
  const [currentType, setCurrentType] = useState("all");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [imageModal, setImageModal] = useState<null | string>(null);

  const filterData = (type: "brand" | "design" | "photo" | "all") => {
    setCurrentType(type);
    if (type !== "all") {
      setData(IMAGES_DATA.filter((item) => item.type === type));
      return;
    }
    setData(IMAGES_DATA);
  };

  return (
    <div className="relative bg-gray-800 py-20" id="portfolio-section">
      <FixedText backgroundTitle="Portfolio" title="My Work" />
      <div className="container relative text-white">
        <div className="mb-5 flex items-center justify-center gap-2">
          <button
            onClick={() => filterData("all")}
            type="button"
            className={classNames(
              "inline-block p-4 underline-offset-8 hover:underline",
              currentType === "all" ? "underline" : "",
            )}
          >
            All
          </button>
          <button
            onClick={() => filterData("design")}
            type="button"
            className={classNames(
              "inline-block p-4 underline-offset-8 hover:underline",
              currentType === "design" ? "underline" : "",
            )}
          >
            Design
          </button>
          <button
            onClick={() => filterData("brand")}
            type="button"
            className={classNames(
              "inline-block p-4 underline-offset-8 hover:underline",
              currentType === "brand" ? "underline" : "",
            )}
          >
            Brand
          </button>
          <button
            onClick={() => filterData("photo")}
            type="button"
            className={classNames(
              "inline-block p-4 underline-offset-8 hover:underline",
              currentType === "photo" ? "underline" : "",
            )}
          >
            Photos
          </button>
        </div>
        <div className="relative columns-1 break-inside-avoid gap-5 md:columns-2 lg:columns-3">
          {data.map((imageItem, index) => {
            return (
              <div
                key={index}
                className="mb-5"
                onClick={() => {
                  setImageModal(imageItem.src);
                  setIsOpenModal(true);
                }}
              >
                <Image
                  src={imageItem.src}
                  alt="portfolio"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover object-center"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
        <ImageModal
          src={imageModal}
          onClose={() => setIsOpenModal(false)}
          isOpen={isOpenModal}
        />
      </div>
    </div>
  );
};

export default PortfolioSection;
