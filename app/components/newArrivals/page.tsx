import React from "react";
import image1 from "@/public/assets/new Arrivals/image 9.png";
import image2 from "@/public/assets/new Arrivals/image 8.png";
import image3 from "@/public/assets/new Arrivals/image 7.png";
import image4 from "@/public/assets/new Arrivals/image 10.png";
import fiveStart from "@/public/assets/new Arrivals/Five star.png";
import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function NewArrivals() {
  const cards = [
    {
      id: 1,
      description: "T-SHIRT WITH TAPE DETAILS",
      rating: 5,
      price: "$120",
      image: image3, // Updated to use the imported `image3`
    },
    {
      id: 2,
      description: "SKINNY FIT JEANS",
      rating: 4,
      price: "$100",
      originalPrice: "$160",
      discount: "-20%",
      image: image2, // Updated to use the imported `image2`
    },
    {
      id: 3,
      description: "CHECKERED SHIRT",
      rating: 5,
      price: "$180",
      image: image1, // Updated to use the imported `image1`
    },
    {
      id: 4,
      description: "SLEEVE STRIPED T-SHIRT",
      rating: 4.5,
      price: "$120",
      originalPrice: "$160",
      discount: "-20%",
      image: image4, // Updated to use the imported `image4`
    },
  ];

  return (
    <section
      id="arrivals"
      className={`${poppins.className} h-auto container mx-auto p-4`}
    >
      <div className="flex justify-center items-center mt-7">
        <h1 className="text-6xl" style={{ fontWeight: 900 }}>
          NEW ARRIVAL
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-center mt-10">
        {/* Card One */}
        {cards.map((card, i) => {
          return (
            <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] " key={i}>
              <div className="w-full bg-cardbg h-[220px] rounded-lg shadow-lg relative">
                {/* Discount */}
                {/* Image */}
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={card.image}
                    alt="Gaming Monitor"
                    className="h-[150px] w-[150px] object-contain"
                  />
                </div>
              </div>
              <div className="mt-2">
                <p>{card.description}</p>

                <div className="flex items-center">
                  <Image
                    src={fiveStart}
                    alt="five start"
                    className="h-5 w-20"
                  />
                  <p className="text-Text1 ml-2">{card.rating}</p>
                </div>
                <p
                  className="text-Secondary2 text-xl"
                  style={{ fontWeight: 500 }}
                >
                  {card.price}
                </p>
              </div>
            </div>
          );
        })}
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
