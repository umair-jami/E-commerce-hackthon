import { Poppins } from "next/font/google";
import Image from "next/image";
import cart1 from "@/public/assets/cart/cart1.png";
import cart2 from "@/public/assets/cart/cart2.png";
import cart3 from "@/public/assets/cart/cart3.png";
import delte from "@/public/assets/cart/delete.png";
import plus from "@/public/assets/tshirst/plus.png";
import minus from "@/public/assets/tshirst/minus.png";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Cart() {
  return (
    <>

      <section
        id="cart"
        className={`${poppins.className} container mx-auto px-4 sm:px-6 lg:px-8 my-12`}
      >
        <p className="text-Text1 text-sm my-10 text-center sm:text-left">
          Home / <span className="text-Text2">Casual</span>
        </p>

        <h1 className="text-3xl font-extrabold text-center sm:text-left">
          YOUR CART
        </h1>
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left Section */}
          <div className="w-full lg:basis-[65%] border rounded-lg">
            {/* Cart Item 1 */}
            <div className="flex flex-col sm:flex-row justify-between h-auto sm:h-[130px] p-4 sm:p-6">
              <div className="flex">
                <Image
                  src={cart1}
                  alt="cart1"
                  className="w-20 h-20 sm:w-auto sm:h-auto"
                />
                <div className="ml-4 my-2 sm:my-6">
                  <h1 className="text-lg sm:text-xl font-semibold">
                    Gradient Graphic T-shirt
                  </h1>
                  <p className="text-sm sm:text-base font-light">
                    Size: <span className="text-Text1">Large</span>
                  </p>
                  <p className="text-sm sm:text-base font-light">
                    Color: <span className="text-Text1">White</span>
                  </p>
                  <p className="text-base sm:text-lg font-bold">$145</p>
                </div>
              </div>
              <div className="flex flex-col justify-between mt-4 sm:mt-0 items-end">
                <Image
                  src={delte}
                  alt="delete"
                  className="w-6 h-6 sm:w-auto sm:h-auto"
                />
                <div className="flex items-center justify-between w-full sm:w-[200px] px-4 h-10 sm:h-12 bg-cardbg text-center rounded-full">
                  <Image
                    src={minus}
                    alt="minus"
                    className="w-4 h-4 sm:w-auto sm:h-auto"
                  />
                  <p>1</p>
                  <Image
                    src={plus}
                    alt="plus"
                    className="w-4 h-4 sm:w-auto sm:h-auto"
                  />
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="flex flex-col sm:flex-row justify-between h-auto sm:h-[130px] p-4 sm:p-6">
              <div className="flex">
                <Image
                  src={cart2}
                  alt="cart1"
                  className="w-20 h-20 sm:w-auto sm:h-auto"
                />
                <div className="ml-4 my-2 sm:my-6">
                  <h1 className="text-lg sm:text-xl font-semibold">
                    Checkered Shirt
                  </h1>
                  <p className="text-sm sm:text-base font-light">
                    Size: <span className="text-Text1">Large</span>
                  </p>
                  <p className="text-sm sm:text-base font-light">
                    Color: <span className="text-Text1">Red</span>
                  </p>
                  <p className="text-base sm:text-lg font-bold">$145</p>
                </div>
              </div>
              <div className="flex flex-col justify-between mt-4 sm:mt-0 items-end">
                <Image
                  src={delte}
                  alt="delete"
                  className="w-6 h-6 sm:w-auto sm:h-auto"
                />
                <div className="flex items-center justify-between w-full sm:w-[200px] px-4 h-10 sm:h-12 bg-cardbg text-center rounded-full">
                  <Image
                    src={minus}
                    alt="minus"
                    className="w-4 h-4 sm:w-auto sm:h-auto"
                  />
                  <p>1</p>
                  <Image
                    src={plus}
                    alt="plus"
                    className="w-4 h-4 sm:w-auto sm:h-auto"
                  />
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="flex flex-col sm:flex-row justify-between h-auto sm:h-[130px] p-4 sm:p-6">
              <div className="flex">
                <Image
                  src={cart3}
                  alt="cart1"
                  className="w-20 h-20 sm:w-auto sm:h-auto"
                />
                <div className="ml-4 my-2 sm:my-6">
                  <h1 className="text-lg sm:text-xl font-semibold">
                    Skinny Fit Jeans
                  </h1>
                  <p className="text-sm sm:text-base font-light">
                    Size: <span className="text-Text1">Large</span>
                  </p>
                  <p className="text-sm sm:text-base font-light">
                    Color: <span className="text-Text1">Blue</span>
                  </p>
                  <p className="text-base sm:text-lg font-bold">$145</p>
                </div>
              </div>
              <div className="flex flex-col justify-between mt-4 sm:mt-0 items-end">
                <Image
                  src={delte}
                  alt="delete"
                  className="w-6 h-6 sm:w-auto sm:h-auto"
                />
                <div className="flex items-center justify-between w-full sm:w-[200px] px-4 h-10 sm:h-12 bg-cardbg text-center rounded-full">
                  <Image
                    src={minus}
                    alt="minus"
                    className="w-4 h-4 sm:w-auto sm:h-auto"
                  />
                  <p>1</p>
                  <Image
                    src={plus}
                    alt="plus"
                    className="w-4 h-4 sm:w-auto sm:h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="w-full my-6"></div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:basis-[35%] border rounded-lg p-4 sm:p-5">
            <h1 className="text-lg sm:text-xl font-semibold text-center sm:text-left">
              Order Summary
            </h1>
            <div className="flex justify-between items-center my-5">
              <p className="text-Text1">Subtotal</p>
              <p className="font-medium">$656</p>
            </div>
            <div className="flex justify-between items-center my-5">
              <p className="text-Text1">Discount(-20%)</p>
              <p className="font-medium text-red">$113</p>
            </div>
            <div className="flex justify-between items-center my-5">
              <p className="text-Text1">Delivery Fee</p>
              <p className="font-medium">$15</p>
            </div>
            <div className="w-full border-t my-4"></div>
            <div className="flex justify-between items-center my-5">
              <p className="text-Text1">Total</p>
              <p className="font-medium">$467</p>
            </div>

            <div className="flex flex-col gap-4 mt-10">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border border-gray-300 p-2 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-red-600">
                  Apply
                </button>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-full w-full hover:bg-red-600">
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
