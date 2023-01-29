import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/utils/Button";
import { HiX } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<string>("transparent");
  const menuRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 20) {
        setScroll("bg-[#fcfcfc] shadow-md");
      } else {
        setScroll("bg-transparent");
      }
    };
  }, []);

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
    <motion.nav
      className="fixed w-[100%] top-0 z-10"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className={`px-[10em] border-gray-200 hidden md:block ${scroll}`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/">
            <Image
              src="/Logo.svg"
              alt=""
              width={130}
              height={100}
              className="cursor-pointer"
            />
          </Link>

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
          <Button type="primary" hover={true}>
            <Link href="/">Get Started &gt;</Link>
          </Button>
        </div>
      </div>

      <div className={`block md:hidden ${scroll}`}>
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Image src="/Logo.svg" alt="" width={130} height={100} />
          <button onClick={handleClick}>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <HiX className="text-3xl text-blue-900 cursor-pointer" />
              ) : (
                <HiOutlineMenuAlt3 className="text-3xl text-blue-900 cursor-pointer" />
              )}
            </motion.div>
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                transition={{ duration: 0.2 }}
                className="w-full absolute left-0 top-[55px] p-5 text-lg border-2 rounded-xl shadow-lg bg-white "
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
                    <Button type="primary" hover={true}>
                      <Link href="/dashboard">Get Started &gt;</Link>
                    </Button>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
