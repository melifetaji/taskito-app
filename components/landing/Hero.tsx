import React from "react";
import Button from "../utils/Button";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="">
      {/* bg-[url('../public/Hero_1.png') rounded-2xl] */}
      <div className="container mx-auto flex flex-col md:flex-row my-8 p-[2em] ">
        <div className="flex justify-center flex-col ml-0 md:ml-10">
          <h1 className="text-6xl font-semibold md:text-8xl text-slate-900">
            Get more done in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400">
              less time
            </span>
          </h1>
          <p
            className="text-lg py-5 max-w-[80%] text-slate-700
          "
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            nisi rerum quis atque non nam magni dolores ab assumenda nesciunt!
          </p>
          <div className="flex flex-row">
            <Button type="primary" size="medium" className="mr-3">
              Get Started
            </Button>
            <Button type="secondary" size="medium">
              Learn More
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <Image src="/3D.png" width={1000} height={1000} alt="" />
        </div>
      </div>
      <Image
        src="/3D.png"
        width={2000}
        height={2000}
        alt=""
        className="block md:hidden"
      />
    </div>
  );
};

export default Hero;
