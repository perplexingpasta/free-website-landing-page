import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import LitUpButton from "./ui/LitUpButton";

const Header = () => {
  return (
    <div className="fixed z-[10] flex w-full bg-white px-4 py-5 md:px-8">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="mx-auto ml-auto flex flex-row justify-center space-x-4 lg:ml-56 lg:justify-start">
          {/* <Image
            src="/images/celeste logo.png"
            width={40}
            height={40}
            alt="logo of celeste consulting"
          />
          <Image
            src="/images/text-logo.png"
            width={100}
            height={100}
            alt="logo of celeste consulting"
          /> */}
          <a href="https://www.celesteconsulting.in/" target="_blank">
            <div className="font-lexendDeca flex-col items-center justify-center text-center">
              <h1 className="text-3xl font-extrabold tracking-wide md:text-5xl lg:text-4xl">
                céleste
              </h1>
              <p className="-mt-2 text-lg font-light tracking-widest md:mt-0 md:text-2xl lg:-mt-2 lg:text-lg">
                consulting
              </p>
            </div>
          </a>
        </div>
        {/* <div className="hidden flex-grow justify-end md:flex lg:mr-52">
          <a
            href={"https://forms.gle/mfPgVKy1jjT8KqHU6"}
            target="_blank"
            rel="noopener"
          >
            <LitUpButton
              title="GET MY FREE WEBSITE NOW!"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
