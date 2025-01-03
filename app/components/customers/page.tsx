import React from "react";
import fiveStart from "@/public/assets/new Arrivals/Five star.png";
import vector1 from "@/public/assets/dress/Vector 1.png";
import vector from "@/public/assets/dress/Vector.png";
import verified from "@/public/assets/dress/greentick.png";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Customers() {
  return (
    <section
      className={` ${poppins.className} container mx-auto px-4 sm:px-6 lg:px-8 my-12`}
    >
      <div className="flex flex-wrap items-center justify-between mt-9">
        <div className="flex gap-6 items-center">
          <h1
            className="text-2xl md:text-4xl font-medium"
            style={{ fontWeight: 900 }}
          >
            OUR HAPPY CUSTOMERS
          </h1>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <div className="bg-secondary w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center">
            <Image
              src={vector}
              alt="vector2"
              className="w-3 h-3 md:w-4 md:h-4"
            />
          </div>
          <div className="bg-secondary w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center">
            <Image
              src={vector1}
              alt="vector"
              className="w-3 h-3 md:w-4 md:h-4"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="w-full h-auto px-6 py-5 border border-black rounded-2xl">
          <Image src={fiveStart} alt="fivestar" />
          <p className="font-medium mt-2">
            Sarah M.{" "}
            <Image
              src={verified}
              alt="verified"
              className="inline ml-2 w-4 h-4"
            />
          </p>
          <p className="text-Text1 text-sm mt-2">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div className="w-full h-auto px-6 py-5 border border-black rounded-2xl">
          <Image src={fiveStart} alt="fivestar" />
          <p className="font-medium mt-2">
            Alex K.{" "}
            <Image
              src={verified}
              alt="verified"
              className="inline ml-2 w-4 h-4"
            />
          </p>
          <p className="text-Text1 text-sm mt-2">
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shop.co. The range of options they
            offer is truly remarkable, catering to a variety of tastes and
            occasions.”
          </p>
        </div>
        <div className="w-full h-auto px-6 py-5 border border-black rounded-2xl">
          <Image src={fiveStart} alt="fivestar" />
          <p className="font-medium mt-2">
            James L.{" "}
            <Image
              src={verified}
              alt="verified"
              className="inline ml-2 w-4 h-4"
            />
          </p>
          <p className="text-Text1 text-sm mt-2">
            "As someone who's always on the lookout for unique fashion pieces,
            I'm thrilled to have stumbled upon Shop.co. The selection of clothes
            is not only diverse but also on-point with the latest trends.”
          </p>
        </div>
      </div>
    </section>
  );
}
