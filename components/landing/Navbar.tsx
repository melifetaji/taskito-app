import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/utils/Button";
import { HiX } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    // TODO make navbar fixed, change bg on scroll
    <nav>
      <div className="px-[10em] border-gray-200 hidden md:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Image
            src="/Logo.svg"
            alt=""
            width={130}
            height={100}
            className="cursor-pointer"
          />
          <ul>
            <li className="inline-block px-4 py-2 text-gray-700 hover:text-gray-900">
              <Link href="/">Home</Link>
            </li>
            <li className="inline-block px-4 py-2 text-gray-700 hover:text-gray-900">
              <Link href="/">About Us</Link>
            </li>
            <li className="inline-block px-4 py-2 text-gray-700 hover:text-gray-900">
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <Button type="primary">
            <Link href="/">Get Started &gt;</Link>
          </Button>
        </div>
      </div>

      <div className={`block md:hidden`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Image src="/Logo.svg" alt="" width={130} height={100} />
          <button onClick={handleClick}>
            {isOpen ? (
              <HiX className="text-3xl text-blue-900 cursor-pointer" />
            ) : (
              <HiOutlineMenuAlt3 className="text-3xl text-blue-900 cursor-pointer" />
            )}
          </button>
          {isOpen && (
            <div
              className="w-full absolute left-0 top-[55px] p-5 text-lg border-2 rounded-xl shadow-lg bg-white"
              ref={menuRef}
            >
              <ul>
                <li className="px-4 py-2 text-gray-700 hover:text-gray-900 ">
                  <Link href="/">Home</Link>
                </li>
                <li className="px-4 py-2 text-gray-700 hover:text-gray-900">
                  <Link href="/">About Us</Link>
                </li>
                <li className="px-4 py-2 text-gray-700 hover:text-gray-900 ">
                  <Link href="/">Contact</Link>
                </li>
                <li>
                  <Button type="primary">
                    <Link href="/dashboard">Get Started &gt;</Link>
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
