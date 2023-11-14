import React from "react";

type ImageCardProps = {
  heading: string;
  description: string;
  imageUrl: string;
};

export const ImageCard = ({
  heading,
  description,
  imageUrl,
}: ImageCardProps) => {
  return (
    <div className="bg-[#F2F5F7] border-[#D3D6DD] border-2 p-4 py-6">
      <div className="px-6">
        <img src={imageUrl} className="w-60 h-52 object-cover" />
      </div>
      <div className="text-center">
        <h3 className="my-4 font-bold text-lg">{heading}</h3>
        <p className="cart-paragraph">{description}</p>
      </div>
    </div>
  );
};
