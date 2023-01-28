import React from "react";
import { FaRegGem, FaRegFileAlt, FaRegFolderOpen } from "react-icons/fa";

type Props = {};

const WhyUs = (props: Props) => {
  return (
    <section className="container mx-auto mb-[3em]">
      <h3 className="text-4xl font-bold text-slate-900 my-[1em] text-center">
        Why Choose Us
      </h3>

      <div className="flex flex-col md:flex-row justify-evenly py-[1em]">
        <div className="block p-3 md:p-6 max-w-sm py-4  rounded-xl">
          <FaRegFileAlt className="text-5xl mx-auto mb-7 text-blue-600" />
          <h5 className="text-slate-900 font-semibold text-lg text-center">
            Scheduled Tasks
          </h5>
          <p className="text-slate-600 text-base my-1 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
            accusamus?
          </p>
        </div>
        <div className="block p-3 md:p-6 max-w-sm py-4 shadow-none md:shadow-xl rounded-xl">
          <FaRegGem className="text-5xl mx-auto mb-7 text-blue-600" />
          <h5 className="text-slate-900 font-semibold text-lg text-center">
            Scheduled Tasks
          </h5>
          <p className="text-slate-600 text-base my-1 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
            accusamus?
          </p>
        </div>
        <div className="block p-3 md:p-6 max-w-sm py-4 rounded-xl">
          <FaRegFolderOpen className="text-5xl mx-auto mb-7 text-blue-600" />
          <h5 className="text-slate-900 font-semibold text-lg text-center">
            Scheduled Tasks
          </h5>
          <p className="text-slate-600 text-base my-1 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
            accusamus?
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
