import Image from "next/image";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import LitUpButtonBg from "./ui/LitUpButtonBg";
import Link from "next/link";

const Hero3 = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center lg:flex-row lg:justify-between">
      {/* Left side */}
      <div className="mt-12 text-center text-xl md:text-xl lg:mt-4 lg:text-left">
        <p>
          Are you a <span className="underline">dermatologist</span> looking to
          be the best in your city?
        </p>

        <h1 className="mt-8 font-montserrat text-3xl font-semibold leading-snug md:mt-8 md:text-4xl md:leading-tight lg:max-w-4xl">
          Get your <span className="text-violet-500 underline">FREE</span>{" "}
          website and become the first dermatologist that pops up on Google
        </h1>

        <div className="mx-auto mt-10 max-w-[23rem] text-left md:mt-16 md:max-w-xl lg:mx-0 lg:max-w-4xl">
          <p className="mb-2 md:mb-4">Imagine a website that:</p>
          <ul className="space-y-2 text-lg md:space-y-4 md:text-xl">
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
            <li className="pl-5 -indent-5">
              ✦ Ranks among the top results on Google, when people search for
              &quot;best dermatologist in the city&quot; 🌍
            </li>
          </ul>
        </div>

        {/* <p className="mt-12 max-w-3xl">
          All you need to do is fill out a quick Google form and give us a week
          to code your website from scratch. That&apos;s it! 🎊
        </p> */}

        <div className="mt-16 grid place-items-center">
          <Link
            href={"https://forms.gle/mfPgVKy1jjT8KqHU6"}
            target="_blank"
            rel="noopener"
          >
            <LitUpButtonBg
              title="GET MY FREE WEBSITE NOW!"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
          <p className="mx-auto mt-4 max-w-xs text-base md:text-lg lg:mx-0 lg:max-w-md lg:text-xl">
            It&apos;s genuinely 100% free forever with 1 year support, we
            promise! 😊
          </p>
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
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
