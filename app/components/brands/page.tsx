import React from "react";
import b1 from "../../assets/brands/CK.png";
import b2 from "../../assets/brands/GUCCI.png";
import b3 from "../../assets/brands/ZARA.png";
import b4 from "../../assets/brands/versace.png";
import b5 from "../../assets/brands/CK.png";
import Image from "next/image";

export default function Brands() {
  return (
    <section id="brands" className="h-auto w-full bg-yellow py-4 bg-black">
      <div className="container h-full flex flex-wrap justify-center gap-4 md:gap-8 lg:justify-around items-center bg-yellow">
        <Image src={b1} alt="Levis" className="w-16 md:w-20 lg:w-24" />
        <Image src={b2} alt="Lacoste" className="w-16 md:w-20 lg:w-24" />
        <Image src={b3} alt="Obey" className="w-16 md:w-20 lg:w-24" />
        <Image src={b4} alt="H&M" className="w-16 md:w-20 lg:w-24" />
        <Image src={b5} alt="Shopify" className="w-16 md:w-20 lg:w-24" />
      </div>
    </section>
  );
}
