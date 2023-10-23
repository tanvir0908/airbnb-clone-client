import { SiAirbnb } from "react-icons/si";
import { BiSearch } from "react-icons/bi";
import { FiGlobe } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <div className="xl:px-20 lg:px-12 md:px-8 px-2 border-b-[1px] py-4 bg-white z-10 w-full">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="font-poppins hidden md:block  text-2xl font-[700] text-pink">
          <Link className="flex items-center gap-1">
            <SiAirbnb size={32} />
            <p className="hidden lg:block">airbnb</p>
          </Link>
        </div>
        {/* search */}
        <div className="border-[1px] cursor-pointer shadow-sm transition hover:shadow-md rounded-full pl-5 pr-2 py-2 flex items-center">
          <div className="font-semibold mr-3">Anywhere</div>
          <div className="font-semibold border-x-[1px] px-3">Any week</div>
          <div className="flex items-center gap-2 ml-3 text-gray-500 font-medium">
            Add guests
            <div className="p-2 bg-pink rounded-full text-white">
              <BiSearch size={16} />
            </div>
          </div>
        </div>
        {/* profile */}
        <div className="flex relative items-center justify-center">
          <div className="font-semibold hidden lg:block hover:bg-neutral-100 px-3 py-2 cursor-pointer rounded-full">
            Airbnb your home
          </div>
          <div className="hover:bg-neutral-100 hidden lg:block text-gray-700 px-3 py-2 cursor-pointer rounded-full">
            <FiGlobe size={18} />
          </div>
          <div
            onClick={handleMenuClick}
            className="flex items-center border-[1px] cursor-pointer hover:shadow-md transition text-gray-600 gap-2 ml-3 rounded-full p-3 md:p-0 md:px-4 md:py-2"
          >
            <HiMenu size={20} />
            <FaUserCircle className="hidden md:block" size={30} />
          </div>
          {open && (
            <div className="absolute top-14 right-0 w-[12rem] md:w-[14rem] lg:w-3/4 shadow-md border border-gray-100  rounded-xl bg-white">
              <p className="py-4 hover:bg-neutral-100 px-4 rounded-t-xl cursor-pointer">
                Sign up
              </p>
              <p className="py-4 hover:bg-neutral-100 px-4 cursor-pointer">
                Log in
              </p>
              <hr />
              <p className="py-4 hover:bg-neutral-100 px-4 cursor-pointer">
                Airbnb your home
              </p>
              <p className="py-4 hover:bg-neutral-100 px-4 rounded-b-xl cursor-pointer">
                Help Center
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
