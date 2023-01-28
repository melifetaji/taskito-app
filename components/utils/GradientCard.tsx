import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const GradientCard = ({ title, subtitle }: Props) => {
  return (
    <div className="flex justify-center ">
      <div className="block p-3 md:p-6 rounded-lg max-w-sm">
        <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400 font-black text-6xl">
          {title}
        </h5>
        <p className="text-gray-700 text-lg my-1 text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default GradientCard;
