"use client";
import { PRODUCTS } from "@/constants/menu";
import classNames from "@/utils/classNames";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { useEventListener, useOnClickOutside } from "usehooks-ts";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = () => {
    if (headerRef.current) {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
  };

  useEventListener("scroll", handleScroll);
  useOnClickOutside(headerRef, () => setIsOpen(false));

  return (
    <header
      ref={headerRef}
      id="header"
      className={classNames(
        "fixed left-0 top-0 z-10 w-full text-white transition-all",
        isFixed ? "bg-black" : "h-14 bg-black lg:h-auto lg:bg-transparent",
      )}
    >
      <div className="container relative">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-block font-bold uppercase text-primary"
          >
            longnguyen20it
          </Link>
          <nav>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              type="button"
              className="inline-flex aspect-square items-center justify-center p-4 lg:hidden"
            >
              L
            </button>
            <ul
              className={classNames(
                "fixed left-0 top-14 block w-full items-center bg-black transition-all duration-500 lg:static lg:flex lg:bg-transparent",
                isOpen ? "translate-x-0" : "translate-x-full lg:-translate-x-0",
              )}
            >
              <li>
                <Link
                  href="/blog"
                  className={classNames(
                    "block items-center justify-center px-6 py-3 transition-all hover:text-primary lg:inline-flex lg:h-20",
                  )}
                >
                  Blog
                </Link>
              </li>
              <li className="group/dropdown relative">
                <Link
                  href="/products"
                  className={classNames(
                    "block items-center justify-center px-6 py-3 transition-all hover:text-primary lg:inline-flex lg:h-20",
                  )}
                >
                  Products
                </Link>
                <div className="static left-1/2 top-full z-10 translate-x-0 bg-black pl-5 text-white group-hover/dropdown:visible group-hover/dropdown:opacity-100 lg:invisible lg:absolute lg:w-80 lg:-translate-x-1/2 lg:pl-0 lg:opacity-0">
                  <ul>
                    {PRODUCTS.map((item) => {
                      return (
                        <li key={item.url}>
                          <Link
                            title={item.title}
                            href={item.url}
                            className="block px-6 py-4 transition-all hover:text-primary lg:text-center"
                          >
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href="/about-me"
                  className={classNames(
                    "block items-center justify-center px-6 py-3 transition-all hover:text-primary lg:inline-flex lg:h-20",
                  )}
                >
                  About me
                </Link>
              </li>
            </ul>
          </nav>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  href="#social"
                  className="text-xl transition-all hover:text-primary"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="#social"
                  className="text-xl transition-all hover:text-primary"
                >
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link
                  href="#social"
                  className="text-xl transition-all hover:text-primary"
                >
                  <FaEnvelope />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
