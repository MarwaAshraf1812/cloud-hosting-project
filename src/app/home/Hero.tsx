import Image from "next/image";
import React from "react";
import { TiTick } from "react-icons/ti";
import CloudImage from "../../../public/cloud-hosting.png";
import Link from "next/link";

function Hero() {
  return (
    <div className="fixed_height container mx-auto px-6 lg:px-11 mt-20">
      <div className="flex flex-wrap items-center justify-between lg:justify-start text-center lg:text-left">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Welcome to our <span className="text-blue-500">Cloud Hosting</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              The best web hosting solution for your online success.
            </p>
          </div>
          <div className="space-y-4 text-lg">
            <div className="flex items-center justify-center lg:justify-start">
              <TiTick className="mr-3 text-blue-500" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <TiTick className="mr-3 text-green-500" />
              <span>Secure Hosting</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <TiTick className="mr-3 text-orange-500" />
              <span>Website Maintenance</span>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/register"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={CloudImage}
            alt="cloud hosting"
            width={500}
            height={500}
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
