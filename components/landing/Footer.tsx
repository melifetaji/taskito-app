import React from "react";
import { useRouter } from "next/router";

type Props = {};

const Footer = (props: Props) => {
  const router = useRouter();

  if (router.pathname === "/about") {
    return null;
  }
  return (
    <footer className="bg-black py-2 flex items-center justify-center absolute w-full ">
      <div className="container mx-auto">
        <h6 className="text-zinc-300 text-center">🎉 Meli Fetaji &copy;2023</h6>
      </div>
    </footer>
  );
};

export default Footer;
