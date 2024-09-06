import Image from "next/image";
import React from "react";
import LitUpButton from "./ui/LitUpButton";
import { FaLocationArrow } from "react-icons/fa6";
import LitUpButtonBg from "./ui/LitUpButtonBg";

const Hero3 = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      {/* Left side */}
      <div className="mt-4 text-xl">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, et?
        </p>
        <h1 className="text-5xl font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          numquam eaque rem.
        </h1>
        <div className="mt-8">
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <ul className="space-y-2">
            <li>✦ Lorem ipsum dolor sit amet.</li>
            <li>✦ Lorem ipsum dolor sit amet.</li>
            <li>✦ Lorem ipsum dolor sit amet.</li>
            <li>✦ Lorem ipsum dolor sit amet.</li>
            <li>✦ Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
        <div className="mt-24">
          <LitUpButtonBg
            title="GET MY FREE WEBSITE NOW!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
        <p className="mt-4 text-lg max-w-lg">
          It&apos;s genuinely 100% free forever with ongoing support for a year, we promise! 😊
        </p>
      </div>

      {/* Right side */}
      <div className="flex-shrink-0">
        <Image
          src="/images/graphic.webp"
          width={450}
          height={450}
          alt=""
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Hero3;
