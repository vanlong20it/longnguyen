import Button from "@/components/Base/Button";
import Link from "next/link";
import React from "react";
import FixedText from "../FixedText";

const AboutMeSection = () => {
  return (
    <section
      id="about-me"
      className="bg-stone-700 relative py-10 text-white lg:py-20"
    >
      <FixedText title="Know me more" backgroundTitle="About me" />
      <div className="container relative">
        <div className="mx-auto mt-2 h-1.5 w-20 bg-white"></div>
        <div className="mt-10 block gap-5 lg:grid lg:grid-cols-3">
          <div className="col-span-2">
            <h4 className="text-xl font-semibold lg:text-3xl">
              I&apos;m <span className="text-primary">Nguyen Long,</span> a Web
              developer
            </h4>
            <p className="mt-4 text-justify">
              I have 2 years of experience in web user interface development. I
              have expertise in HTML, CSS, JavaScript, and frameworks such as
              React. I&apos;ve been involved in various complex projects and
              possess the ability to optimize performance and ensure seamless
              integration across different browsers. Being creative, I
              constantly seek opportunities to enhance user experience and
              explore emerging web development trends.
            </p>
          </div>
          <div className="col-span-1">
            <ul className="lg:divide-y">
              <li className="mb-2 first:mt-4 lg:py-4">
                <span className="font-semibold">Name: </span>Nguyen Van Long
              </li>
              <li className="mb-2 first:mt-4 lg:py-4">
                <span className="font-semibold">Email: </span>
                <Link
                  href="mailto:vanlong20it@gmail.com"
                  className="underline transition-all hover:text-primary"
                >
                  vanlong20it@gmail.com
                </Link>
              </li>
              <li className="mb-2 first:mt-4 lg:py-4">
                <span className="font-semibold">Age: </span>
                {new Date().getFullYear() - 2000}
              </li>
              <li className="mb-2 first:mt-4 lg:py-4">
                <span className="font-semibold">From: </span>DakLak
              </li>
            </ul>
            <div className="mt-4 flex items-center justify-center lg:mt-0 lg:block">
              <Button accent="primary">Download CV</Button>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 divide-gray-500 text-gray-500 lg:grid-cols-4 lg:divide-x">
          <div className="col-span-1 p-10 text-center">
            <p className="text-5xl font-bold tracking-widest">3+</p>
            <p className="mt-2">Years Experience</p>
          </div>
          <div className="col-span-1 p-10 text-center">
            <p className="text-5xl font-bold tracking-widest">20+</p>
            <p className="mt-2">Projects Done</p>
          </div>
          <div className="col-span-1 p-10 text-center">
            <p className="text-5xl font-bold tracking-widest">10+</p>
            <p className="mt-2">Happy Clients</p>
          </div>
          <div className="col-span-1 p-10 text-center">
            <p className="text-5xl font-bold tracking-widest">5+</p>
            <p className="mt-2">Get Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
