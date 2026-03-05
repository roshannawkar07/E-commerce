import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <h1 className=" nav text-4xl font-sans text-zinc-800">NOTHING</h1>
          <p className=" nav py-2 text-gray-600">Built different</p>
        </div>

        <div>
          <p className="nav text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="nav text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>nothing@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
