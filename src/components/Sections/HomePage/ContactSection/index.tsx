import React from "react";
import FixedText from "../../FixedText";
import {
  BsFacebook,
  BsFillBriefcaseFill,
  BsFillTelephoneFill,
  BsMailbox2,
} from "react-icons/bs";
import Link from "next/link";
import ContactForm from "./ContactForm";
const ContactSection = () => {
  return (
    <div id="contact-section" className="bg-gray-700 py-20 text-white">
      <div className="container">
        <FixedText title="Get in touch" backgroundTitle="Contact" />
        <div className="mt-10 grid lg:grid-cols-5 gap-5">
          <div className="col-span-1">
            <h3 className="text-xl uppercase">Address</h3>
            <div className="mt-4">
              <p>Thu Duc City - Ho Chi Minh City</p>
              <ul>
                <li className="flex items-center gap-2 py-2">
                  <span className="inline-block text-primary">
                    <BsFillTelephoneFill />
                  </span>
                  <Link href="tel:0972212580" className="flex-1">
                    0972212580
                  </Link>
                </li>
                <li className="flex items-center gap-2 py-2">
                  <span className="inline-block text-primary">
                    <BsFillBriefcaseFill />
                  </span>
                  <Link
                    href="https://github.com/vanlong20it"
                    className="flex-1"
                  >
                    github.com/vanlong20it
                  </Link>
                </li>
                <li className="flex items-center gap-2 py-2">
                  <span className="inline-block text-primary">
                    <BsMailbox2 />
                  </span>
                  <Link href="mailto:vanlong20it@gmail.com" className="flex-1">
                    vanlong20it@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
            <h3 className="mt-5 text-xl uppercase">Follow me</h3>
            <div className="mt-4 flex gap-4">
              <Link
                className="flex-1 text-xl transition-all hover:text-primary"
                href="#"
              >
                <BsFacebook />
              </Link>
              <Link
                className="flex-1 text-xl transition-all hover:text-primary"
                href="#"
              >
                <BsFacebook />
              </Link>
              <Link
                className="flex-1 text-xl transition-all hover:text-primary"
                href="#"
              >
                <BsFacebook />
              </Link>
              <Link
                className="flex-1 text-xl transition-all hover:text-primary"
                href="#"
              >
                <BsFacebook />
              </Link>
            </div>
          </div>
          <div className="col-span-4">
            <h3 className="text-xl uppercase">Send us a note</h3>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
