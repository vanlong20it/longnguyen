import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-600 py-20 text-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <p>Copyright &copy; 2023 Simone. All Rights Reserved.</p>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="#" className="transition-all hover:text-primary">
                Term & Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-all hover:text-primary">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
