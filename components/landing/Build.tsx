import React from "react";
import Button from "../utils/Button";

type Props = {};

const Build = (props: Props) => {
  return (
    <div className="bg-[url('/BG.svg')] bg-no-repeat bg-cover min-h-[35em] flex justify-center items-center">
      <div className="container mx-auto flex-col p-4 md:max-w-[55%]">
        <h1 className="text-zinc-100 text-4xl md:text-7xl font-extrabold text-center mb-3">
          Achieve your goals and stay on track
        </h1>
        <p className="text-center text-zinc-100 text-xl max-w-[70%] my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo
          doloremque nam commodi reiciendis. Accusantium?
        </p>
        <Button className="bg-black px-6 py-2 hover:bg-gradient-to-r from-violet-600 to-orange-400 box-border border-2 border-transparent hover:border-violet-700 ">
          Get started for free
        </Button>
      </div>
    </div>
  );
};

export default Build;
