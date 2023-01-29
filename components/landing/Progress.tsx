import React from "react";
import Card from "../utils/GradientCard";
import { motion } from "framer-motion";

type Props = {};

const Progress = (props: Props) => {
  return (
    <section className="container mx-auto md:px-0">
      <div className="font-semibold my-[1.5em] text-center">
        <motion.p
          className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400"
          animate={{ scale: [1.0, 1.03, 1.0] }}
          transition={{
            repeat: Infinity,
          }}
        >
          We Save Your Time
        </motion.p>
        <h3 className="text-4xl font-bold text-slate-900">
          Say goodbye to missed deadlines
        </h3>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly my-[2em] gap-4">
        <Card title={"+20M"} subtitle={"TRUSTED USERS"} />
        <Card title={"400M"} subtitle={"TASKS COMPLETED"} />
        <Card title={"350%"} subtitle={"GROWTH"} />
      </div>
    </section>
  );
};

export default Progress;
