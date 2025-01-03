import { Poppins } from "next/font/google";
import fiveStart from "@/public/assets/new Arrivals/Five star.png";
import fourStar from "@/public/assets/new Arrivals/Four Star.png";
import fourhalfstar from "@/public/assets/new Arrivals/Four Half Star.png";
import image1 from "@/public/assets/new Arrivals/image 9.png";
import image2 from "@/public/assets/new Arrivals/image 8.png";
import image3 from "@/public/assets/new Arrivals/image 7.png";
import image4 from "@/public/assets/new Arrivals/image 10.png";
import image5 from "@/public/assets/top Selling/image 12.png";
import image6 from "@/public/assets/top Selling/image 123.png";
import image7 from "@/public/assets/top Selling/image 1234.png";
import image8 from "@/public/assets/top Selling/image 123445.png";
import vector from "@/public/assets/footer/vector.png";
import upvector from "@/public/assets/footer/upvector.png";
import cl1 from "@/public/assets/casual/cl1.png";
import cl2 from "@/public/assets/casual/cl2.png";
import cl3 from "@/public/assets/casual/cl3.png";
import cl4 from "@/public/assets/casual/cl4.png";
import cl5 from "@/public/assets/casual/cl5.png";
import cl6 from "@/public/assets/casual/cl6.png";
import cl7 from "@/public/assets/casual/cl7.png";
import cl8 from "@/public/assets/casual/cl8.png";
import cl9 from "@/public/assets/casual/cl9.png";
import cl10 from "@/public/assets/casual/cl10.png";
import filter from "@/public/assets/tshirst/color.png";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const cards = [
  {
    id: 1,
    image: image3,
    alt: "T-SHIRT WITH TAPE DETAILS",
    name: "T-SHIRT WITH TAPE DETAILS",
    rating: "5.0/5",
    ratingImage: fiveStart,
    price: "$120",
    discount: null,
  },
  {
    id: 2,
    image: image2,
    alt: "SKINNY FIT JEANS",
    name: "SKINNY FIT JEANS",
    rating: "5.0/5",
    ratingImage: fourStar,
    price: "$100",
    originalPrice: "$160",
    discount: "-20%",
  },
  {
    id: 3,
    image: image1,
    alt: "CHECKERED SHIRT",
    name: "CHECKERED SHIRT",
    rating: "5.0/5",
    ratingImage: fiveStart,
    price: "$180",
    discount: null,
  },
  {
    id: 4,
    image: image4,
    alt: "SLEEVE STRIPED T-SHIRT",
    name: "SLEEVE STRIPED T-SHIRT",
    rating: "5.0/5",
    ratingImage: fourhalfstar,
    price: "$60",
    originalPrice: "$160",
    discount: null,
  },
  {
    id: 5,
    image: image5,
    alt: "SLEEVE STRIPED T-SHIRT",
    name: "SLEEVE STRIPED T-SHIRT",
    rating: "5.0/5",
    ratingImage: fourhalfstar,
    price: "$70",
    originalPrice: "$160",
    discount: "-60%",
  },
  {
    id: 6,
    image: image6,
    alt: "VERTICAL STRIPED SHIRT",
    name: "VERTICAL STRIPED SHIRT",
    rating: "5.0/5",
    ratingImage: fourhalfstar,
    price: "$320",
    originalPrice: "$470",
    discount: "-50%",
  },
  {
    id: 7,
    image: image7,
    alt: "COURAGE GRAPHIC T-SHIRT",
    name: "COURAGE GRAPHIC T-SHIRT",
    rating: "5.0/5",
    ratingImage: fourhalfstar,
    price: "$180",
    originalPrice: "$190",
    discount: "-10%",
  },
  {
    id: 8,
    image: image8,
    alt: "LOOSE FIT BERMUDA SHORTS",
    name: "LOOSE FIT BERMUDA SHORTS",
    rating: "5.0/5",
    ratingImage: fourhalfstar,
    price: "$10",
    originalPrice: "$150",
    discount: "-30%",
  },
  {
    id: 9,
    image: image5,
    alt: "One Life Graphic T-shirt",
    name: "One Life Graphic T-shirt",
    rating: "5.0/5",
    ratingImage: fourhalfstar,
    price: "$220",
    originalPrice: "$360",
    discount: "-40%",
  },
];
export default function page() {
  return (
    <>
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
              {cards.map((card, i) => {
                return (
                  <div className="bg-cardbg h-[220px] rounded-lg shadow-lg relative">
                    {/* Image */}
                    <div className="flex items-center justify-center h-full">
                      <Image
                        src={card.image}
                        alt="Gaming Monitor"
                        className="h-[150px] w-[150px] object-contain"
                      />
                    </div>
                    <div className="mt-2">
                      <p>{card.name}</p>
                      <div className="flex items-center">
                        <Image
                          src={card.ratingImage}
                          alt="five star"
                          className="h-5 w-20"
                        />
                        <p className="text-Text1 ml-2">{card.rating}</p>
                      </div>
                      <p className="text-Secondary2 text-xl font-medium">
                        {card.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
