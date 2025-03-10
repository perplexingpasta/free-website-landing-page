import Image from "next/image";
import React from "react";
import { AnimatedModalDemo } from "./AnimatedModalDemo";
// import { FaLocationArrow } from "react-icons/fa6";
// import LitUpButtonBg from "./ui/LitUpButtonBg";
// import Link from "next/link";

const Hero3 = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center lg:mb-48 lg:flex-row lg:justify-between">
      {/* Left side */}
      <div className="mt-12 text-center text-xl md:text-xl lg:mt-4 lg:text-left">
        <p>Are you a dermatologist looking to be the best in your city?</p>

        <h1 className="leading mt-8 text-3xl font-semibold text-neutral-700 md:mt-8 md:max-w-xl md:text-4xl md:leading-tight lg:max-w-4xl lg:tracking-wide">
          Get your <span className="font-black text-indigo-500">FREE</span>{" "}
          website <br className="hidden md:block" /> and become the first
          dermatologist <br className="hidden md:block" />
          that pops up on Google
        </h1>

        <div className="mx-auto mt-10 max-w-[95%] text-left text-base md:mt-16 md:max-w-xl md:text-xl lg:mx-0 lg:max-w-3xl">
          <p className="mb-2 md:mb-4">Imagine a website that</p>
          <ul className="space-y-2 md:space-y-4">
            <li className="pl-5 -indent-5">
              ✦ Is a patient-oriented medical website 🩺
            </li>
            <li className="pl-5 -indent-5">
              ✦ Is hand-coded, which Google absolutely loves! 💻
            </li>
            <li className="pl-5 -indent-5">
              ✦ Loads under half a second, making it super fast! 🚀
            </li>
            <li className="pl-5 -indent-5">
              ✦ Is designed to turn website visitors into loyal patients for
              years to come 💖
            </li>
            <li className="pl-5 -indent-5 lg:leading-relaxed">
              ✦ Ranks among the top results on Google, when people search for
              &quot;best dermatologist in the city&quot; 🌍
            </li>
          </ul>
        </div>

        <div className="mt-4 grid place-items-center md:mt-10 lg:mt-16">
          {/* <a
            href={"https://forms.gle/mfPgVKy1jjT8KqHU6"}
            target="_blank"
            rel="noopener"
          >
            <LitUpButtonBg
              title="GET MY FREE WEBSITE NOW!"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a> */}
          <AnimatedModalDemo />
          <div className="mx-auto mb-8 mt-2 max-w-[70%] text-center text-sm font-medium opacity-50 md:mt-4 md:text-base lg:mt-3 lg:max-w-[50%]">
            100% Free. No Strings Attached.
          </div>
          {/* <p className="mx-auto mt-4 max-w-xs text-center text-base md:text-lg lg:max-w-md lg:text-xl">
            It&apos;s genuinely 100% free forever with 1 year support, we
            promise! 😊
          </p> */}
        </div>
      </div>

      {/* Right side */}
      <div className="flex-shrink-0">
        <div className="relative h-60 w-96 md:h-[24rem] md:w-[36rem] lg:h-[36rem] lg:w-[32rem]">
          <Image
            src="/images/topdoctor.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
            className="md:rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
