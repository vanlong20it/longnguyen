import React from "react";
import FixedText from "../FixedText";
import ProgressBar from "@/components/ProgressBar";
import Button from "@/components/Base/Button";

const SummarySection = () => {
  return (
    <section id="summary-section" className="relative bg-gray-900 py-10 lg:py-20">
      <FixedText backgroundTitle="Summary" title="Resume" />
      <div className="container relative text-white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="col-span-1">
            <h4 className="text-2xl font-bold">My Education</h4>
            <div className="mt-5 rounded bg-jungle-700 p-5">
              <span className="inline-block rounded bg-primary px-2 py-1.5 text-sm text-white">
                2018 - 2021
              </span>
              <p className="mt-4 text-xl">Information Technology</p>
              <p className="mt-2 text-primary">Thu Duc College of Technology</p>
              <p className="mt-2 text-gray-300">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="text-2xl font-bold">My Experience</h4>
            <div className="mt-5 rounded bg-jungle-700 p-5">
              <span className="inline-block rounded bg-primary px-2 py-1.5 text-sm text-white">
                07/2020 - 11/2020
              </span>
              <p className="mt-4 text-xl">Web Intern</p>
              <p className="mt-2 text-primary">FirstPage Company</p>
              <p className="mt-2 text-gray-300">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
            <div className="mt-5 rounded bg-jungle-700 p-5">
              <span className="inline-block rounded bg-primary px-2 py-1.5 text-sm text-white">
                05/2021 - 12/2021
              </span>
              <p className="mt-4 text-xl">Front-End Developer</p>
              <p className="mt-2 text-primary">Vinamr VietNam</p>
              <p className="mt-2 text-gray-300">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
            <div className="mt-5 rounded bg-jungle-700 p-5">
              <span className="inline-block rounded bg-primary px-2 py-1.5 text-sm text-white">
                12/2021 - Now
              </span>
              <p className="mt-4 text-xl">Front-End Developer</p>
              <p className="mt-2 text-primary">Applancer JSC</p>
              <p className="mt-2 text-gray-300">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold">My Skills</h3>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="col-span-1">
              <div className="mt-6">
                <p className="mb-2 text-lg">Web design</p>
                <ProgressBar value={90} />
              </div>
              <div className="mt-6">
                <p className="mb-2 text-lg">Javascript</p>
                <ProgressBar value={80} />
              </div>
              <div className="mt-6">
                <p className="mb-2 text-lg">NextJS, NuxtJS</p>
                <ProgressBar value={70} />
              </div>
            </div>
            <div className="col-span-1">
              <div className="mt-6">
                <p className="mb-2 text-lg">HTML/CSS</p>
                <ProgressBar value={95} />
              </div>
              <div className="mt-6">
                <p className="mb-2 text-lg">ReactJS, VueJS</p>
                <ProgressBar value={80} />
              </div>
              <div className="mt-6">
                <p className="mb-2 text-lg">TailwindCSS, Bootstrap</p>
                <ProgressBar value={95} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <Button accent="primary">Download CV</Button>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
