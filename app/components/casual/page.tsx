import { Poppins } from "next/font/google";
import fiveStart from "../../assets/new Arrivals/Five star.png";
import fourStar from "../../assets/new Arrivals/Four Star.png";
import fourhalfstar from "../../assets/new Arrivals/Four Half Star.png";
import image1 from "../../assets/new Arrivals/image 9.png";
import image2 from "../../assets/new Arrivals/image 8.png";
import image3 from "../../assets/new Arrivals/image 7.png";
import image4 from "../../assets/new Arrivals/image 10.png";
import image5 from "../../assets/top Selling/image 12.png";
import image6 from "../../assets/top Selling/image 123.png";
import image7 from "../../assets/top Selling/image 1234.png";
import image8 from "../../assets/top Selling/image 123445.png";
import vector from "../../assets/footer/vector.png";
import upvector from "../../assets/footer/upvector.png";
import cl1 from "../../assets/casual/cl1.png";
import cl2 from "../../assets/casual/cl2.png";
import cl3 from "../../assets/casual/cl3.png";
import cl4 from "../../assets/casual/cl4.png";
import cl5 from "../../assets/casual/cl5.png";
import cl6 from "../../assets/casual/cl6.png";
import cl7 from "../../assets/casual/cl7.png";
import cl8 from "../../assets/casual/cl8.png";
import cl9 from "../../assets/casual/cl9.png";
import cl10 from "../../assets/casual/cl10.png";
import filter from "../../assets/tshirst/color.png";

import React from "react";
import Image from "next/image";
import Offer from "../offer/page";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function page() {
  return (
    <>
      <Offer />
      <Navbar />
      <section
        className={`${poppins.className}  container mx-auto px-4 sm:px-6 lg:px-8 my-12`}
      >
        <p className="text-Text1 text-sm my-10 text-center sm:text-left">
          Home / <span className="text-Text2">Casual</span>
        </p>

        <div className="flex">
          <div className="basis-[50%] lg:basis-[20%] p-4">
            <div className="flex justify-between items-center mb-4">
              <p className=" text-sm sm:text-xl" style={{ fontWeight: 600 }}>
                Filters
              </p>
              <Image src={filter} alt="filter" className="w-8 h-8" />
            </div>
            <div className="w-full border border-Text1 my-4"></div>
            <div className="flex justify-between items-center mb-2">
              <p>T-shirts</p>
              <Image src={vector} alt="vectot=r" />
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Shorts</p>
              <Image src={vector} alt="vectot=r" />
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Shirts</p>
              <Image src={vector} alt="vectot=r" />
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Hoddie</p>
              <Image src={vector} alt="vectot=r" />
            </div>
            <div className="flex justify-between items-center mb-2">
              <p>Jeans</p>
              <Image src={vector} alt="vectot=r" />
            </div>
            <div className="mb-6">
              <div className="w-full border border-Text1 my-4"></div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold mb-2">Price</h3>
                <Image src={upvector} alt="vector" />
              </div>

              <div className="relative w-full">
                <div className="relative h-2 bg-gray-300 rounded">
                  <div
                    className="absolute h-2 bg-black rounded"
                    style={{
                      left: "25%",
                      right: "25%",
                    }}
                  ></div>
                </div>

                {/* Slider Thumbs */}
                <div className="absolute top-[-40%] left-[25%] transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <div className="absolute top-[-40%] right-[25%] transform translate-x-1/2">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
              </div>

              {/* Labels */}
              <div className="flex justify-between mt-2 text-sm">
                <span>$50</span>
                <span>$200</span>
              </div>
            </div>
            <div>
              <div className="w-full border border-Text1 my-4"></div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold mb-2">Colors</h3>
                <Image src={upvector} alt="vector" />
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
                <Image src={cl1} alt="cl1" />
                <Image src={cl2} alt="cl1" />
                <Image src={cl3} alt="cl1" />
                <Image src={cl4} alt="cl1" />
                <Image src={cl5} alt="cl1" />
                <Image src={cl6} alt="cl1" />
                <Image src={cl7} alt="cl1" />
                <Image src={cl8} alt="cl1" />
                <Image src={cl9} alt="cl1" />
                <Image src={cl10} alt="cl1" />
              </div>
              <div className="w-full border border-Text1 my-4"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <p className="bg-cardbg w-auto p-2 rounded-full">
                  <></>XX-Small
                </p>
                <p className="bg-cardbg w-auto p-2 rounded-full">X-Small</p>
                <p className="bg-cardbg w-auto p-2 rounded-full">Small</p>
                <p className="bg-cardbg w-auto p-2 rounded-full">Large</p>
                <p className="bg-black text-white w-auto p-2 rounded-full">
                  X-Large
                </p>
                <p className="bg-cardbg w-auto p-2 rounded-full">XX-Large</p>
                <p className="bg-cardbg w-auto p-2 rounded-full">3X-Large</p>
                <p className="bg-cardbg w-auto p-2 rounded-full">4X-Large</p>
                <p className="bg-cardbg w-auto p-2 rounded-full">Medium</p>
              </div>
              <div className="w-full border border-Text1 my-4"></div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-xl" style={{ fontWeight: 600 }}>
                  Dress Style
                </p>
                <Image src={upvector} alt="filter" />
              </div>
              <div className="w-full border border-Text1 my-4"></div>
              <div className="flex justify-between items-center mb-2">
                <p>Formal</p>
                <Image src={vector} alt="vectot=r" />
              </div>
              <div className="flex justify-between items-center mb-2">
                <p>Party</p>
                <Image src={vector} alt="vectot=r" />
              </div>
              <div className="flex justify-between items-center mb-2">
                <p>Gym</p>
                <Image src={vector} alt="vectot=r" />
              </div>
              <div className="flex justify-between items-center mb-2">
                <p>Casual</p>
                <Image src={vector} alt="vectot=r" />
              </div>
            </div>
            <div className="w-full border border-Text1 my-4"></div>
            <p className="bg-black text-white w-auto sm:w-full p-1 sm:p-2 rounded-full text-sm sm:text-balance text-center">
              Apply Filter
            </p>
          </div>
          <div className="basis-[50%] lg:basis-[80%] ">
            <div className="flex flex-wrap justify-between items-center gap-4 md:gap-0">
              <h1 className="text-lg md:text-xl font-extrabold">Casual</h1>
              <p className="text-sm md:text-base text-Text1 flex flex-wrap items-center gap-2">
                Showing 1-10 of 100 Products
                <span className="whitespace-nowrap">
                  Sort by:{" "}
                  <select className="text-black text-sm md:text-base">
                    <option>Most Popular</option>
                  </select>
                </span>
              </p>
            </div>

            <div className="grid gap-6 gap-y-28 justify-center mt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {/* Card One */}
              <div className="bg-cardbg h-[220px] rounded-lg shadow-lg relative">
                {/* Image */}
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={image3}
                    alt="Gaming Monitor"
                    className="h-[150px] w-[150px] object-contain"
                  />
                </div>
                <div className="mt-2">
                  <p>T-SHIRT WITH TAPE DETAILS</p>
                  <div className="flex items-center">
                    <Image
                      src={fiveStart}
                      alt="five star"
                      className="h-5 w-20"
                    />
                    <p className="text-Text1 ml-2">5.0/5</p>
                  </div>
                  <p className="text-Secondary2 text-xl font-medium">$120</p>
                </div>
              </div>

              {/* Card Two */}
              <div className="bg-cardbg h-[220px] rounded-lg shadow-lg relative">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={image2}
                    alt="Gaming Monitor"
                    className="h-[150px] w-[150px] object-contain"
                  />
                </div>
                <div className="mt-2">
                  <p>SKINNY FIT JEANS</p>
                  <div className="flex items-center">
                    <Image
                      src={fourStar}
                      alt="four star"
                      className="h-5 w-20"
                    />
                    <p className="text-Text1 ml-2">5.0/5</p>
                  </div>
                  <p className="text-Secondary2 text-xl font-medium">
                    $100{" "}
                    <span className="text-Text1 line-through text-sm">
                      $160
                    </span>{" "}
                    <span className="text-red bg-redbg p-1 rounded-md text-sm">
                      -20%
                    </span>
                  </p>
                </div>
              </div>

              {/* Card Three */}
              <div className="bg-cardbg h-[220px] rounded-lg shadow-lg relative">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={image1}
                    alt="Gaming Monitor"
                    className="h-[150px] w-[150px] object-contain"
                  />
                </div>
                <div className="mt-2">
                  <p>CHECKERED SHIRT</p>
                  <div className="flex items-center">
                    <Image
                      src={fiveStart}
                      alt="five star"
                      className="h-5 w-20"
                    />
                    <p className="text-Text1 ml-2">5.0/5</p>
                  </div>
                  <p className="text-Secondary2 text-xl font-medium">$180</p>
                </div>
              </div>

              {/* Card Four */}
              <div className="bg-cardbg h-[220px] rounded-lg shadow-lg relative">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={image4}
                    alt="Gaming Monitor"
                    className="h-[150px] w-[150px] object-contain"
                  />
                </div>
                <div className="mt-2">
                  <p>SLEEVE STRIPED T-SHIRT</p>
                  <div className="flex items-center">
                    <Image
                      src={fourhalfstar}
                      alt="four and a half star"
                      className="h-5 w-20"
                    />
                    <p className="text-Text1 ml-2">5.0/5</p>
                  </div>
                  <p className="text-Secondary2 text-xl font-medium">
                    $60{" "}
                    <span className="text-Text1 line-through text-sm">
                      $160
                    </span>{" "}
                  </p>
                </div>
              </div>

              {/* Card five */}
              <div className="bg-cardbg h-[220px] hidden lg:block rounded-lg shadow-lg relative">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={image5}
                    alt="Gaming Monitor"
                    className="h-[150px] w-[150px] object-contain"
                  />
                </div>
                <div className="mt-2">
                  <p>SLEEVE STRIPED T-SHIRT</p>
                  <div className="flex items-center">
                    <Image
                      src={fourhalfstar}
                      alt="four and a half star"
                      className="h-5 w-20"
                    />
                    <p className="text-Text1 ml-2">5.0/5</p>
                  </div>
                  <p className="text-Secondary2 text-xl font-medium">
                    $70{" "}
                    <span className="text-Text1 line-through text-sm">
                      $160
                    </span>{" "}
                    <span className="text-red bg-redbg p-1 rounded-md text-sm">
                      -60%
                    </span>
                  </p>
                </div>
              </div>
              {/* Card Six */}
              <div className="bg-cardbg h-[220px] hidden sm:block rounded-lg shadow-lg relative">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={image6}
                    alt="Gaming Monitor"
                    className="h-[150px] w-[150px] object-contain"
                  />
                </div>
                <div className="mt-2">
                  <p>VERTICAL STRIPED SHIRT</p>
                  <div className="flex items-center">
                    <Image
                      src={fourhalfstar}
                      alt="four and a half star"
                      className="h-5 w-20"
                    />
                    <p className="text-Text1 ml-2">5.0/5</p>
                  </div>
                  <p className="text-Secondary2 text-xl font-medium">
                    $320{" "}
                    <span className="text-Text1 line-through text-sm">
                      $470
                    </span>{" "}
                    <span className="text-red bg-redbg p-1 rounded-md text-sm">
                      -50%
                    </span>
                  </p>
                </div>
              </div>

              {/* Card Seven */}
              <div className="bg-cardbg h-[220px] hidden sm:block rounded-lg shadow-lg relative">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={image7}
                    alt="Gaming Monitor"
                    className="h-[150px] w-[150px] object-contain"
                  />
                </div>
                <div className="mt-2">
                  <p>COURAGE GRAPHIC T-SHIRT</p>
                  <div className="flex items-center">
                    <Image
                      src={fourhalfstar}
                      alt="four and a half star"
                      className="h-5 w-20"
                    />
                    <p className="text-Text1 ml-2">5.0/5</p>
                  </div>
                  <p className="text-Secondary2 text-xl font-medium">
                    $180{" "}
                    <span className="text-Text1 line-through text-sm">
                      $190
                    </span>{" "}
                    <span className="text-red bg-redbg p-1 rounded-md text-sm">
                      -10%
                    </span>
                  </p>
                </div>
              </div>
              {/* Card Eight */}
              <div className="bg-cardbg h-[220px] hidden sm:block rounded-lg shadow-lg relative">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={image8}
                    alt="Gaming Monitor"
                    className="h-[150px] w-[150px] object-contain"
                  />
                </div>
                <div className="mt-2">
                  <p>LOOSE FIT BERMUDA SHORTS</p>
                  <div className="flex items-center">
                    <Image
                      src={fourhalfstar}
                      alt="four and a half star"
                      className="h-5 w-20"
                    />
                    <p className="text-Text1 ml-2">5.0/5</p>
                  </div>
                  <p className="text-Secondary2 text-xl font-medium">
                    $10{" "}
                    <span className="text-Text1 line-through text-sm">
                      $150
                    </span>{" "}
                    <span className="text-red bg-redbg p-1 rounded-md text-sm">
                      -30%
                    </span>
                  </p>
                </div>
              </div>

              {/* Card Nine */}
              <div className="bg-cardbg h-[220px] hidden sm:block rounded-lg shadow-lg relative">
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={image5}
                    alt="Gaming Monitor"
                    className="h-[150px] w-[150px] object-contain"
                  />
                </div>
                <div className="mt-2">
                  <p>One Life Graphic T-shirt</p>
                  <div className="flex items-center">
                    <Image
                      src={fourhalfstar}
                      alt="four and a half star"
                      className="h-5 w-20"
                    />
                    <p className="text-Text1 ml-2">5.0/5</p>
                  </div>
                  <p className="text-Secondary2 text-xl font-medium">
                    $220{" "}
                    <span className="text-Text1 line-through text-sm">
                      $360
                    </span>{" "}
                    <span className="text-red bg-redbg p-1 rounded-md text-sm">
                      -40%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
