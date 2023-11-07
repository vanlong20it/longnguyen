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
    <section id="services-section" className="relative bg-gray-600 py-20">
      <FixedText backgroundTitle="Services" title="What I Do?" />
      <div className="container relative text-white">
        <div className="grid lg:grid-cols-2 grid-rows-3 gap-4">
          <div className="col-span-1 row-span-1 flex gap-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded bg-black text-3xl text-primary">
              <AiOutlineAntDesign />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-semibold">Graphic Design</h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex gap-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded bg-black text-3xl text-primary">
              <HiOutlineDesktopComputer />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-semibold">Web Design</h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex gap-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded bg-black text-3xl text-primary">
              <FaPenRuler />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-semibold">UI/UX Design</h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex gap-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded bg-black text-3xl text-primary">
              <FaPenNib />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-semibold">
                App Design & Develop
              </h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex gap-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded bg-black text-3xl text-primary">
              <AiOutlinePicture />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-semibold">Business Analysis</h4>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex gap-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded bg-black text-3xl text-primary">
              <AiTwotoneSound />
            </div>
            <div className="flex-1">
              <h4 className="mb-2 text-xl font-semibold">SEO Marketing</h4>
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
