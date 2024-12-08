import React from "react";
import heroImg from "../../assets/hero/heroImg.png";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Hero() {
  return (
    <section
      className={`${poppins.className} container bg-bg lg:h-[calc(100vh-10rem)] h-auto w-full max-w-6xl px-6 py-12`}
    >
      <div className="flex flex-col lg:flex-row justify-around items-center bg-offWhite h-full">
        <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl lg:w-[150px] w-auto`}
            style={{ fontWeight: 900 }}
          >
            <span className="pr-4">FIND</span>CLOTHES{" "}
            <span className="pr-4">THAT</span>MATCHES{" "}
            <span className="pr-4">YOUR</span>STYLE{" "}
          </h1>
          <p className={`mt-5 lg:w-[400px]`} style={{ fontWeight: "300" }}>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="mt-5 flex justify-center  lg:justify-start ">
            <button className="bg-black text-white px-12 py-4 rounded-full">
              SHOP NOW
            </button>
          </div>
          <div className="flex justify-around items-center mt-10 flex-wrap">
            <p style={{ fontWeight: 600 }} className="text-4xl">
              200+{" "}
              <span
                className="block text-Text1 text-sm"
                style={{ fontWeight: 400 }}
              >
                International Brands
              </span>
            </p>
            <p style={{ fontWeight: 600 }} className="text-4xl">
              2,000+{" "}
              <span
                className="block text-Text1 text-sm"
                style={{ fontWeight: 400 }}
              >
                Hign-Quality Products
              </span>
            </p>
            <p style={{ fontWeight: 600 }} className="text-4xl">
              30,000+{" "}
              <span
                className="block text-Text1 text-sm"
                style={{ fontWeight: 400 }}
              >
                Happy Customers
              </span>
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <Image
            src={heroImg}
            alt="hero"
            className="w-[75%] h-auto max-w-sm md:max-w-md lg:max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
