import React from "react";
import { Poppins } from "next/font/google";
import cross from "../../assets/navphoto/cross.png";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Offer() {
  return (
    <section className={`${poppins.className} h-auto py-2 bg-black text-white`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 px-4 relative">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5">
          <p
            style={{ fontWeight: 200 }}
            className="text-sm text-center md:text-left"
          >
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <h2 className="text-sm md:text-base font-medium cursor-pointer underline">
            Shop Now
          </h2>
        </div>
        <Image
          src={cross}
          alt="cross"
          className="absolute right-14 cursor-pointer hidden lg:block"
        />
      </div>
    </section>
  );
}
