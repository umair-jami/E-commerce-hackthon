import React from "react";
import casual from "../../assets/dress/casual.png";
import formal from "../../assets/dress/formal.png";
import gym from "../../assets/dress/gym.png";
import party from "../../assets/dress/party.png";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function DressStyle() {
  return (
    <section className={` ${poppins.className} container mx-auto my-12`}>
      <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
        {/* Header */}
        <h2 className="text-center my-10 text-5xl" style={{ fontWeight: 900 }}>
          BROWSE BY DRESS STYLE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className=" bg-white rounded-lg shadow-md p-4">
            <Image src={casual} alt="Casual" className="rounded-lg h-[150px]" />
          </div>

          <div className="flex flex-col col-span-2 items-center bg-white rounded-lg shadow-md p-4">
            <Image src={formal} alt="Formal" className="rounded-lg h-[150px]" />
          </div>

          <div className="flex flex-col col-span-2 items-center bg-white rounded-lg shadow-md p-4">
            <Image src={party} alt="Party" className="rounded-lg h-[150px]" />
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
            <Image src={gym} alt="Gym" className="rounded-lg h-[150px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
