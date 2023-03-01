import React from "react";
import Image from "next/image";
import FadeInRight from "@/components/animations/FadeInRight";
import FadeInLeft from "@/components/animations/FadeInLeft";
type Props = {};

const AboutMain = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto md:mt-[8em] border-[2px] border-blue-200 bg-neutral-50 shadow-lg rounded-2xl flex flex-col md:flex-row p-[2em] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex justify-center flex-col ml-0 md:ml-10">
          <FadeInLeft>
            <h1 className="text-6xl font-semibold md:text-8xl text-zinc-100">
              What makes us different?
            </h1>
            <p className="text-lg py-5 max-w-[80%] text-zinc-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              nisi rerum quis atque non nam magni dolores ab assumenda nesciunt!
            </p>
          </FadeInLeft>
        </div>
        <div className="flex justify-center items-center">
          <FadeInRight>
            <Image src="/3Ddark1.png" width={1000} height={1000} alt="Image" />
          </FadeInRight>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
