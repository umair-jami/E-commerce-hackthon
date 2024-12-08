import React from "react";
import image1 from "../../assets/top Selling/image 12.png";
import image2 from "../../assets/top Selling/image 123.png";
import image3 from "../../assets/top Selling/image 1234.png";
import image4 from "../../assets/top Selling/image 123445.png";
import fiveStart from "../../assets/new Arrivals/Five star.png";
import fourStar from "../../assets/new Arrivals/Four Star.png";
import fourhalfstar from "../../assets/new Arrivals/Four Half Star.png";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function TopSelling() {
  return (
    <section
      id="topselling"
      className={`${poppins.className}  h-auto container mx-auto p-4`}
    >
      <div className="flex justify-center items-center mt-7">
        <h1 className="text-6xl" style={{ fontWeight: 900 }}>
          TOP SELLING
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-center mt-10">
        {/* Card One */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] ">
          <div className="w-full bg-cardbg h-[220px] rounded-lg shadow-lg relative">
            {/* Discount */}
            {/* Image */}
            <div className="flex items-center justify-center h-full">
              <Image
                src={image3}
                alt="Gaming Monitor"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div className="mt-2">
            <p>T-SHIRT WITH TAPE DETAILS</p>

            <div className="flex items-center">
              <Image src={fiveStart} alt="five start" className="h-5 w-20" />
              <p className="text-Text1 ml-2">5.0/5</p>
            </div>
            <p className="text-Secondary2 text-xl" style={{ fontWeight: 500 }}>
              $120
            </p>
          </div>
        </div>

        {/* Card Two */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] ">
          <div className="w-full bg-cardbg h-[220px] rounded-lg shadow-lg relative">
            {/* Discount */}
            {/* Image */}
            <div className="flex items-center justify-center h-full">
              <Image
                src={image2}
                alt="Gaming Monitor"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div className="mt-2">
            <p>SKINNY FIT JEANS</p>

            <div className="flex items-center">
              <Image src={fourStar} alt="five start" className="h-5 w-20" />
              <p className="text-Text1 ml-2">5.0/5</p>
            </div>
            <p className="text-Secondary2 text-xl" style={{ fontWeight: 500 }}>
              $100 <span className="text-Text1 line-through text-sm">$160</span>{" "}
              <span className="text-red bg-redbg p-1 rounded-md text-sm">
                -20%
              </span>
            </p>
          </div>
        </div>

        {/* Card Three */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] ">
          <div className="w-full bg-cardbg h-[220px] rounded-lg shadow-lg relative">
            {/* Discount */}
            {/* Image */}
            <div className="flex items-center justify-center h-full">
              <Image
                src={image1}
                alt="Gaming Monitor"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div className="mt-2">
            <p>CHECKERED SHIRT</p>

            <div className="flex items-center">
              <Image src={fiveStart} alt="five start" className="h-5 w-20" />
              <p className="text-Text1 ml-2">5.0/5</p>
            </div>
            <p className="text-Secondary2 text-xl" style={{ fontWeight: 500 }}>
              $180
            </p>
          </div>
        </div>
        {/* Card Four */}
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] ">
          <div className="w-full bg-cardbg h-[220px] rounded-lg shadow-lg relative">
            {/* Discount */}
            {/* Image */}
            <div className="flex items-center justify-center h-full">
              <Image
                src={image4}
                alt="Gaming Monitor"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>
          </div>
          <div className="mt-2">
            <p>SLEEVE STRIPED T-SHIRT</p>

            <div className="flex items-center">
              <Image src={fourhalfstar} alt="five start" className="h-5 w-20" />
              <p className="text-Text1 ml-2">5.0/5</p>
            </div>
            <p className="text-Secondary2 text-xl" style={{ fontWeight: 500 }}>
              $120 <span className="text-Text1 line-through text-sm">$160</span>{" "}
              <span className="text-red bg-redbg p-1 rounded-md text-sm">
                -20%
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center">
        <button className="bg-red-500 border border-black rounded-full px-6 py-3 text-sm hover:bg-red-600">
          View All Products
        </button>
      </div>
    </section>
  );
}
