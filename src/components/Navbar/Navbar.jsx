import Container from "../Container/Container";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import avatar from "../../assets/placeholder.jpg";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="fixed w-full bg-white z-10">
      <div className="py-5 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* logo*/}
            <div>
              <Link>
                <img
                  className="w-28 hidden lg:block cursor-pointer"
                  src={logo}
                  alt="logo"
                />
              </Link>
              <Link>
                <img
                  className="w-10 hidden md:block lg:hidden cursor-pointer bg-white"
                  src="https://cdn.iconscout.com/icon/free/png-256/free-airbnb-4-432491.png?f=webp"
                  alt="logo"
                />
              </Link>
            </div>
            {/* search */}
            <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="flex flex-row items-center justify-between">
                <div className="text-sm font-semibold px-6">Anywhere</div>
                <div className="hidden md:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
                  Any week
                </div>
                <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                  <div className="hidden sm:block">Add guests</div>
                  <div className="p-2 bg-rose-500 rounded-full text-white">
                    <BiSearch size={18} />
                  </div>
                </div>
              </div>
            </div>
            {/* profile  */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                  Airbnb your home
                </div>
                <div
                  onClick={toggleOpen}
                  className="p-4 md:py-2 md:px-4 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                    <img
                      className="w-8 rounded-full"
                      src={avatar}
                      alt="avatar"
                    />
                  </div>
                </div>
              </div>
              {/* menu item */}
              {isOpen && (
                <div className="absolute rounded-xl shadow-lg w-[45vw] md:w-full bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    <p className="font-semibold px-4 py-4 hover:bg-neutral-100">
                      Sign up
                    </p>
                    <p className="font-semibold px-4 py-4 hover:bg-neutral-100">
                      Log in
                    </p>
                    <hr />
                    <p className="font-semibold px-4 py-4 hover:bg-neutral-100">
                      Airbnb your home
                    </p>
                    <p className="font-semibold px-4 py-4 hover:bg-neutral-100">
                      Help Center
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
