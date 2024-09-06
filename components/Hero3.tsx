import Image from "next/image";
import React from "react";
import LitUpButton from "./ui/LitUpButton";
import { FaLocationArrow } from "react-icons/fa6";
import LitUpButtonBg from "./ui/LitUpButtonBg";
import Link from "next/link";

const Hero3 = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center md:flex-row md:justify-between">
      {/* Left side */}
      <div className="mt-12 text-center text-xl md:mt-4 md:text-left md:text-2xl">
        <p>
          Are you a <span className="underline">dermatologist</span> looking to
          be the best in your city?
        </p>

        <h1 className="font-montserrat mt-8 text-3xl font-medium leading-tight md:max-w-4xl md:text-4xl md:font-semibold">
          Get your professional website today and become the first dermatologist
          that shows up on Google for{" "}
          <span className="text-violet-500 underline">FREE!</span>
        </h1>

        <div className="mt-10 max-w-4xl text-left">
          <p className="mb-2 font-medium">Imagine a website that:</p>
          <ul className="space-y-2 text-lg">
            <li className="pl-5 -indent-5">
              ✦ Ranks among the top results on Google, when people search for
              &quot;best dermatologist in the city&quot; 🌍
            </li>
            <li className="pl-5 -indent-5">
              ✦ Loads under half a second, making it super fast! 🚀
            </li>
            <li className="pl-5 -indent-5">
              ✦ Is designed to turn website visitors into loyal patients for
              years to come 💖
            </li>
            <li className="pl-5 -indent-5">
              ✦ Is hand-coded, which Google absolutely loves! 💻
            </li>
          </ul>
        </div>

        {/* <p className="mt-12 max-w-3xl">
          All you need to do is fill out a quick Google form and give us a week
          to code your website from scratch. That&apos;s it! 🎊
        </p> */}

        <div className="mt-16">
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
        </div>
        <p className="mt-4 text-lg md:max-w-md md:text-xl">
          It&apos;s genuinely 100% free forever with 1 year support, we promise!
          😊
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
