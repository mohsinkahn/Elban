import { Bell, Search, User, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Header({ setIsOpen }) {
  return (
    <>

      <header className="flex items-center justify-between bg-[#F9FAFB] p-4 sm:p-6 sticky top-0 z-[3] w-full">
        {/* Left Section: Hamburger + Logo */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          {/* Logo */}
          <div className="shrink-0">
            <Image src="/logo.png" alt="Logo" width={150} height={30} className="object-contain" />
          </div>
        </div>

        {/* Search (hidden on mobile, visible on md+) */}
        <div className="hidden md:block md:flex-1 md:px-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="w-full border border-[#D9D9D9] p-2 pr-10 rounded-lg focus:outline-none focus:border-[#D9D9D9]"
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 15.75L11.2501 11.25M12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75C4.6005 12.75 2.25 10.3995 2.25 7.5C2.25 4.6005 4.6005 2.25 7.5 2.25C10.3995 2.25 12.75 4.6005 12.75 7.5Z"
                  stroke="#333333"
                  strokeOpacity="0.6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center gap-3 ml-2 sm:gap-4">
          {/* Plus icon (visible on md+) */}
          <Link href="#">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99984 6.66666V13.3333M6.6665 10H13.3332M18.3332 10C18.3332 14.6024 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6024 1.6665 10C1.6665 5.39762 5.39746 1.66666 9.99984 1.66666C14.6022 1.66666 18.3332 5.39762 18.3332 10Z"
                stroke="#333333"
                strokeOpacity="0.64"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Notification bell */}
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.79496 17.5C8.38257 18.0186 9.15444 18.3333 9.99981 18.3333C10.8452 18.3333 11.6171 18.0186 12.2047 17.5M14.9998 6.66666C14.9998 5.34058 14.473 4.06881 13.5353 3.13113C12.5977 2.19345 11.3259 1.66666 9.99981 1.66666C8.67373 1.66666 7.40196 2.19345 6.46428 3.13113C5.5266 4.06881 4.99981 5.34058 4.99981 6.66666C4.99981 9.24182 4.3502 11.005 3.62453 12.1712C3.01242 13.1549 2.70636 13.6468 2.71758 13.784C2.73001 13.9359 2.7622 13.9938 2.88463 14.0846C2.99519 14.1667 3.49364 14.1667 4.49052 14.1667H15.5091C16.506 14.1667 17.0044 14.1667 17.115 14.0846C17.2374 13.9938 17.2696 13.9359 17.282 13.784C17.2933 13.6468 16.9872 13.1549 16.3751 12.1712C15.6494 11.005 14.9998 9.24182 14.9998 6.66666Z"
              stroke="#333333"
              strokeOpacity="0.64"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* User Icon */}
          {/* <User className="w-8 h-8 rounded-full bg-gray-200 p-1 cursor-pointer" /> */}
          <div>
             <Image src="/avatar.png" alt="avatar" width={40} height={40}   className=" rounded-2xl" />
          </div>
          
        

          {/* ✅ Logout icon — now visible on all screens */}
          <Link href="#">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5"
                stroke="#333333"
                strokeOpacity="0.64"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </header>
    </>
  );
}
