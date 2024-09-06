import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <div>
        <h1 className="text-center text-5xl font-bold uppercase">Is this you?</h1>
      {/* SLOT 1 */}
      <div className="flex flex-row items-center justify-between mt-10">
        {/* Left Side */}
        <div className="flex-1 max-w-3xl">
          <h1 className="font-semibold text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            facilis.
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque est suscipit ad corporis ex! Odio molestias, illum possimus alias perferendis excepturi maxime? Quibusdam incidunt reiciendis odit sed perferendis quaerat quis.
          </p>
        </div>
        {/* Right side */}
        <div className="flex-shrink-0">
            {/* container for aspect ratio 16:9 */}
          <div className="relative h-60 w-96">
            <Image
              src="/images/graphic.webp"
              layout="fill"
              objectFit="cover"
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
      
      
      {/* SLOT 2 */}
      <div className="flex flex-row-reverse items-center justify-between mt-16">
        {/* Right Side */}
        <div className="flex-1 max-w-3xl">
          <h1 className="font-semibold text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            facilis.
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque est suscipit ad corporis ex! Odio molestias, illum possimus alias perferendis excepturi maxime? Quibusdam incidunt reiciendis odit sed perferendis quaerat quis.
          </p>
        </div>
        {/* Left side */}
        <div className="flex-shrink-0">
            {/* container for aspect ratio 16:9 */}
          <div className="relative h-60 w-96">
            <Image
              src="/images/graphic.webp"
              layout="fill"
              objectFit="cover"
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
      
      
      {/* SLOT 3 */}
      <div className="flex flex-row items-center justify-between mt-16">
        {/* Left Side */}
        <div className="flex-1 max-w-3xl">
          <h1 className="font-semibold text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            facilis.
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque est suscipit ad corporis ex! Odio molestias, illum possimus alias perferendis excepturi maxime? Quibusdam incidunt reiciendis odit sed perferendis quaerat quis.
          </p>
        </div>
        {/* Right side */}
        <div className="flex-shrink-0">
            {/* container for aspect ratio 16:9 */}
          <div className="relative h-60 w-96">
            <Image
              src="/images/graphic.webp"
              layout="fill"
              objectFit="cover"
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
