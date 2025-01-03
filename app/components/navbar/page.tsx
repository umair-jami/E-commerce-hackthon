"use client";
import Link from "next/link";
import React, { useState } from "react";
import searchIcon from "@/public/assets/navphoto/search.png";
import cart from "@/public/assets/navphoto/cart.png";
import user from "@/public/assets/navphoto/user.png";
import cancel from "@/public/assets/navphoto/cancel.png";
import review from "@/public/assets/navphoto/review.png";
import order from "@/public/assets/navphoto/order.png";
import logout from "@/public/assets/navphoto/logout.png";
import manage from "@/public/assets/navphoto/manage.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for user dropdown
  const router = useRouter();

  // Toggle user dropdown
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (!event.target.closest(".user-dropdown")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav
      className={` ${poppins.className} container mx-auto flex flex-nowrap items-center justify-between h-[5rem] sticky top-0 z-30 bg-white px-4 sm:px-6 md:px-12 shadow-md `}
    >
      <div className="flex items-center justify-between gap-4 w-full md:w-auto">
        {/* Menu Toggle Button */}
        <button
          className="text-2xl md:hidden focus:outline-none z-50"
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl sm:text-3xl font-black">SHOP.CO</h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen
            ? "fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-40"
            : "hidden"
        } md:flex md:flex-row md:gap-8 md:relative md:bg-transparent md:inset-auto md:z-auto`}
      >
        {/* Shop Link */}
        <Link
          href="/"
          className="text-white md:text-black hover:text-gray-300 md:hover:text-gray-700 text-lg mb-4 md:mb-0"
        >
          Shop
        </Link>

        {/* Carts Link */}
        <Link
          href="/components/Carts"
          className="text-white md:text-black hover:text-gray-300 md:hover:text-gray-700 text-lg mb-4 md:mb-0"
        >
          Carts
        </Link>

        {/* Casual Link */}
        <Link
          href="/components/Casual"
          className="text-white md:text-black hover:text-gray-300 md:hover:text-gray-700 text-lg mb-4 md:mb-0"
        >
          Casual
        </Link>

        {/* T-Shirts Link */}
        <Link
          href="/components/Tshirts"
          className="text-white md:text-black hover:text-gray-300 md:hover:text-gray-700 text-lg mb-4 md:mb-0"
        >
          T-Shirts
        </Link>
      </div>

      {/* Search Bar and User Actions */}
      <div className="flex gap-4 items-center justify-end mt-4 md:mt-0 w-full md:w-auto">
        <div className="relative w-auto">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-gray-100 hidden lg:block w-full pl-10 pr-12 py-2 rounded-md focus:outline-none"
          />
          <Image
            src={searchIcon}
            alt="Search"
            className="lg:absolute mt-6 lg:mt-0 left-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
          />
        </div>

        {/* Cart and User Dropdown */}
        <div className="flex items-center gap-4">
          <Image
            src={cart}
            alt="Cart"
            onClick={() => router.push("/components/carts")}
            className="w-5 h-5 cursor-pointer"
          />
          <div className="relative user-dropdown">
            <Image
              src={user}
              alt="User"
              onClick={toggleDropdown}
              className="w-5 h-5 cursor-pointer"
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-md">
                <ul className="py-2 text-white">
                  <li className="px-4 py-2 flex items-center gap-2 cursor-pointer">
                    <Image src={manage} alt="Manage Account" />
                  </li>
                  <li className="px-4 py-2 flex items-center gap-2 cursor-pointer">
                    <Image src={order} alt="My Orders" />
                  </li>
                  <li className="px-4 py-2 flex items-center gap-2 cursor-pointer">
                    <Image src={cancel} alt="Cancellations" />
                  </li>
                  <li className="px-4 py-2 flex items-center gap-2 cursor-pointer">
                    <Image src={review} alt="Reviews" />
                  </li>
                  <li className="px-4 py-2 flex items-center gap-2 cursor-pointer">
                    <Image src={logout} alt="Logout" />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
