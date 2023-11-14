import React from "react";
import { FaCheck, FaPlayCircle } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores ipsa",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores ipsa",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores ipsa",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores ipsa",
    },
  ];

  return (
    <div className="container">
      <div className="video mb-32 relative">
        <video className="w-full h-full object-cover aspect-w-16 aspect-h-9 bg-[#E4E8EC]"></video>

        <FaPlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#A0ADB9] text-9xl" />
      </div>
      <div className="details">
        <h2 className="font-bold text-5xl mb-12 text-center">Features</h2>
        <div className="max-w-lg flex flex-col gap-4">
          {features.map((feature, i) => (
            <div key={i} className="flex gap-4 mx-auto">
              <span className="flex justify-center items-center px-2 text-lg py-2 bg-[#4F5C69] text-white">
                <FaCheck />
              </span>

              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
