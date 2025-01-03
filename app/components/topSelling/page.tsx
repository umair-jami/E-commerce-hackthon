import React from "react";
import image1 from "@/public/assets/top Selling/image 12.png";
import image2 from "@/public/assets/top Selling/image 123.png";
import image3 from "@/public/assets/top Selling/image 1234.png";
import image4 from "@/public/assets/top Selling/image 123445.png";
import fiveStart from "@/public/assets/new Arrivals/Five star.png";
import fourStar from "@/public/assets/new Arrivals/Four Star.png";
import fourhalfstar from "@/public/assets/new Arrivals/Four Half Star.png";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const topSellingCards = [
  {
    id: 1,
    description: "T-SHIRT WITH TAPE DETAILS",
    rating: 5,
    price: "$120",
    image: image3, // Reference to the imported image3
  },
  {
    id: 2,
    description: "SKINNY FIT JEANS",
    rating: 4,
    price: "$100",
    originalPrice: "$160",
    discount: "-20%",
    image: image2, // Reference to the imported image2
  },
  {
    id: 3,
    description: "CHECKERED SHIRT",
    rating: 5,
    price: "$180",
    image: image1, // Reference to the imported image1
  },
  {
    id: 4,
    description: "SLEEVE STRIPED T-SHIRT",
    rating: 4.5,
    price: "$120",
    originalPrice: "$160",
    discount: "-20%",
    image: image4, // Reference to the imported image4
  },
];

export default function TopSelling() {
  return (
    <section
      id="topselling"
      className={`${poppins.className} h-auto container mx-auto p-4`}
    >
      <div className="flex justify-center items-center mt-7">
        <h1 className="text-6xl" style={{ fontWeight: 900 }}>
          TOP SELLING
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-center mt-10">
        {topSellingCards.map((card) => (
          <div key={card.id} className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] ">
            <div className="w-full bg-cardbg h-[220px] rounded-lg shadow-lg relative">
              <div className="flex items-center justify-center h-full">
                <Image
                  src={card.image}
                  alt={card.description}
                  className="h-[150px] w-[150px] object-contain"
                />
              </div>
            </div>
            <div className="mt-2">
              <p>{card.description}</p>
              <div className="flex items-center">
                <Image
                  src={
                    card.rating === 5
                      ? fiveStart
                      : card.rating === 4.5
                      ? fourhalfstar
                      : fourStar
                  }
                  alt={`${card.rating} star`}
                  className="h-5 w-20"
                />
                <p className="text-Text1 ml-2">{card.rating}/5</p>
              </div>
              <p className="text-Secondary2 text-xl" style={{ fontWeight: 500 }}>
                {card.price}{" "}
                {card.originalPrice && (
                  <>
                    <span className="text-Text1 line-through text-sm">
                      {card.originalPrice}
                    </span>{" "}
                    <span className="text-red bg-redbg p-1 rounded-md text-sm">
                      {card.discount}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <button className="bg-red-500 border border-black rounded-full px-6 py-3 text-sm hover:bg-red-600">
          View All Products
        </button>
      </div>
    </section>
  );
}

