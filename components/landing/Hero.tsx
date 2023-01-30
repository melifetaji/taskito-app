import React from "react";
import Button from "../utils/Button";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto border-[2px] border-blue-200 bg-neutral-50 shadow-lg rounded-2xl flex flex-col md:flex-row my-8 p-[2em] bg-gradient-to-br from-red-50 to-blue-100">
        <div className="flex justify-center flex-col ml-0 md:ml-10">
          <motion.h1
            className="text-6xl font-semibold md:text-8xl text-slate-900"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get more done in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400">
              less time
            </span>
          </motion.h1>
          <motion.p
            className="text-lg py-5 max-w-[80%] text-slate-700"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            nisi rerum quis atque non nam magni dolores ab assumenda nesciunt!
          </motion.p>
          <motion.div
            className="flex flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button type="primary" size="large" className="mr-3" hover={true}>
              Get Started
            </Button>
            <Button size="large">Learn More</Button>
          </motion.div>
        </div>
        <div className="hidden md:block">
          <Image src="/3D.png" width={1000} height={1000} alt="" />
        </div>
      </div>
      <Image
        src="/3D.png"
        width={1000}
        height={1000}
        alt=""
        className="block md:hidden"
      />
    </div>
  );
};

export default Hero;
