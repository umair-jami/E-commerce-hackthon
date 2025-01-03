import React from "react";
import casual from "@/public/assets/dress/casual.png";
import formal from "@/public/assets/dress/formal.png";
import gym from "@/public/assets/dress/gym.png";
import party from "@/public/assets/dress/party.png";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const dressStyles = [
  {
    id: 1,
    name: "Casual",
    image: casual, // Reference to the imported casual image
  },
  {
    id: 2,
    name: "Formal",
    image: formal, // Reference to the imported formal image
  },
  {
    id: 3,
    name: "Party",
    image: party, // Reference to the imported party image
  },
  {
    id: 4,
    name: "Gym",
    image: gym, // Reference to the imported gym image
  },
];

export default function DressStyle() {
  return (
    <section className={`${poppins.className} container mx-auto my-12`}>
      <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
        {/* Header */}
        <h2 className="text-center my-10 text-5xl" style={{ fontWeight: 900 }}>
          BROWSE BY DRESS STYLE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dressStyles.map((style) => (
            <div
              key={style.id}
              className={`${
                style.name === "Formal" || style.name === "Party"
                  ? "col-span-2"
                  : ""
              } flex flex-col items-center bg-white rounded-lg shadow-md p-4`}
            >
              <Image
                src={style.image}
                alt={style.name}
                className="rounded-lg h-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
