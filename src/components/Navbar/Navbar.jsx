import Container from "../Container/Container";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

export default function Navbar() {
  return (
    <div className="fixed w-full bg-white z-10">
      <div className="py-5 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* logo*/}
            <div>
              <Link>
                <img
                  className="w-28 hidden md:block cursor-pointer"
                  src={logo}
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
          </div>
        </Container>
      </div>
    </div>
  );
}
