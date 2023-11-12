import React from "react";
import FixedText from "../FixedText";
import {
  AiOutlineAntDesign,
  AiOutlinePicture,
  AiTwotoneSound,
} from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaPenNib, FaPenRuler } from "react-icons/fa6";
const ServicesSection = () => {
  return (
    <section
      id="services-section"
      className="relative bg-stone-800 py-10 lg:py-20"
    >
      <FixedText backgroundTitle="Services" title="What I Do?" />
      <div className="container relative mt-5 text-white lg:mt-0">
        <div className="grid grid-rows-3 gap-4 lg:grid-cols-2">
          <div className="col-span-1 row-span-1 flex gap-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded bg-secondary text-3xl text-primary">
              <AiOutlineAntDesign />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-semibold text-primary-300">Graphic Design</h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex gap-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded bg-secondary text-3xl text-primary">
              <HiOutlineDesktopComputer />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-semibold text-primary-300">Web Design</h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex gap-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded bg-secondary text-3xl text-primary">
              <FaPenRuler />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-semibold text-primary-300">UI/UX Design</h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex gap-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded bg-secondary text-3xl text-primary">
              <FaPenNib />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-semibold text-primary-300">
                App Design & Develop
              </h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex gap-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded bg-secondary text-3xl text-primary">
              <AiOutlinePicture />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-semibold text-primary-300">Business Analysis</h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex gap-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded bg-secondary text-3xl text-primary">
              <AiTwotoneSound />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-semibold text-primary-300">SEO Marketing</h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
