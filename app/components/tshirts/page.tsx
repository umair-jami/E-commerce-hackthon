import { Poppins } from "next/font/google";
import img1 from "@/public/assets/tshirst/image 1.png";
import img2 from "@/public/assets/tshirst/image 2.png";
import img3 from "@/public/assets/tshirst/image 5.png";
import img4 from "@/public/assets/tshirst/image 6.png";
import c3 from "@/public/assets/tshirst/c3.png";
import c2 from "@/public/assets/tshirst/c2.png";
import c1 from "@/public/assets/tshirst/c1.png";
import plus from "@/public/assets/tshirst/plus.png";
import minus from "@/public/assets/tshirst/minus.png";
import fiveStart from "@/public/assets/new Arrivals/Five star.png";
import fourhalfstar from "@/public/assets/new Arrivals/Four Half Star.png";
import verified from "@/public/assets/dress/greentick.png";
import filter from "@/public/assets/tshirst/color.png";

import React from "react";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Tshirts() {
  return (
    <>

      <section
        id="tshirts"
        className={`${poppins.className}  container mx-auto px-4 sm:px-6 lg:px-8 my-12`}
      >
        <p className="text-Text1 text-sm my-10 text-center sm:text-left">
          Home / <span className="text-Text2">Shop / Men / T-shirts</span>
        </p>
        <div className="flex flex-col items-center lg:flex-row gap-6">
          <div className="basis-full lg:basis-[50%]">
            <div className="flex flex-col lg:flex-row gap-4 mb-10">
              <div className="flex lg:flex-col gap-4">
                <Image src={img2} alt="img2" />
                <Image src={img3} alt="img3" />
                <Image src={img4} alt="img4" />
              </div>
              <div>
                <Image src={img1} alt="img1" />
              </div>
            </div>
          </div>
          <div className="basis-full lg:basis-[50%]">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              One Life Graphic T-shirt
            </h1>
            <Image src={fourhalfstar} alt="fourhalfstar" className="inline" />{" "}
            <span>4.5/5</span>
            <p className="text-Secondary2 text-lg sm:text-xl font-medium mt-2">
              $100 <span className="text-Text1 line-through text-sm">$160</span>{" "}
              <span className="text-red bg-redbg p-1 rounded-md text-sm">
                -20%
              </span>
            </p>
            <p className="text-Secondary2 text-sm mt-4">
              This graphic t-shirt is perfect for any occasion. Crafted from a
              soft and breathable fabric, it offers superior comfort and style.
            </p>
            <div className="w-full border border-Text1 my-4"></div>
            <p className="text-Secondary2 text-sm text-Text1">Select Colors</p>
            <div className="flex gap-4 mt-2">
              <Image src={c1} alt="c1" />
              <Image src={c2} alt="c2" />
              <Image src={c3} alt="c3" />
            </div>
            <div className="w-full border border-Text1 my-4"></div>
            <p className="text-Secondary2 text-sm text-Text1">Choose Size</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
              <div className="w-full bg-cardbg text-center rounded-full p-2">
                <p className="text-Secondary2 text-Text1">Small</p>
              </div>
              <div className="w-full bg-cardbg text-center rounded-full p-2">
                <p className="text-Secondary2 text-Text1">Medium</p>
              </div>
              <div className="w-full bg-black text-center rounded-full p-2">
                <p className="text-white">Large</p>
              </div>
              <div className="w-full bg-cardbg text-center rounded-full p-2">
                <p className="text-Secondary2 text-Text1">X-Large</p>
              </div>
            </div>
            <div className="w-full border border-Text1 my-4"></div>
            <div className="flex flex-wrap gap-4">
              <div className="w-[200px] flex justify-between items-center px-4 h-12 bg-cardbg text-center rounded-full">
                <Image src={minus} alt="minus" />
                <p>1</p>
                <Image src={plus} alt="plus" />
              </div>
              <div className="flex-1 bg-black text-white pt-4 text-center rounded-full px-4 h-12">
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-around mt-6 text-center sm:text-left">
          <p>Product Details</p>
          <p className="text-xl font-medium">Rating & Review</p>
          <p>FAQs</p>
        </div>
        <div className="w-full border border-Text1 my-2"></div>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <p className="text-xl font-medium">
            All Reviews{" "}
            <span className="text-Text1 text-sm font-light">(451)</span>
          </p>
          <div className="flex items-center gap-4">
            <Image src={filter} alt="filter" />
            <select className="border rounded p-1">
              <option>Latest</option>
            </select>
            <button className="rounded-full bg-black text-white px-4 h-12">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
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
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
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
              I'm thrilled to have stumbled upon Shop.co. The selection of
              clothes is not only diverse but also on-point with the latest
              trends.”
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
              I'm thrilled to have stumbled upon Shop.co. The selection of
              clothes is not only diverse but also on-point with the latest
              trends.”
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
              I'm thrilled to have stumbled upon Shop.co. The selection of
              clothes is not only diverse but also on-point with the latest
              trends.”
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
              I'm thrilled to have stumbled upon Shop.co. The selection of
              clothes is not only diverse but also on-point with the latest
              trends.”
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
