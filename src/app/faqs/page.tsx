import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Faqs() {
  const faqs = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores ipsa",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores ipsa",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores ipsa",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores ipsa",
    },
  ];

  return (
    <div className="container">
      <div className="mb-32 relative bg-[#E4E8EC] min-h-[500px] flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-center mb-10">Headline</h1>
        <p className="text-center text-xl mb-10">Subheading</p>

        <button className="min-w-[200px] text-white focus:ring-4 focus:outline-none font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-primary">
          CTA
        </button>
      </div>
      <div className="details">
        <h2 className="font-bold text-5xl mb-12 text-center">FAQS</h2>
        <div className="max-w-lg flex flex-col gap-4 mx-auto">
          {faqs.map((feature, i) => (
            <details className="bg-[#F2F5F7] border-2 border-[#DBE0E6] p-2">
              <summary className="flex gap-4 items-center">
                <span className="flex justify-center items-center px-2 text-lg py-2 bg-[#4F5C69] text-white">
                  <FaPlus />
                </span>

                <p>{feature.title}</p>
              </summary>
              <p>{feature.text}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
