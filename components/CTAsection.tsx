import React from "react";
import LitUpButtonBg from "./ui/LitUpButtonBg";
import { FaLocationArrow } from "react-icons/fa6";
import { AnimatedModalDemo } from "./AnimatedModalDemo";

const CTAsection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center text-4xl font-semibold tracking-wide md:text-5xl">
        <h1>Get a website </h1>
        <h1 className="mt-4 md:mt-7 lg:mt-10">that does all that</h1>
        <h1 className="mt-4 md:mt-7 lg:mt-10">
          and <em>more</em>, for
        </h1>
        <h1 className="mt-4 font-black text-indigo-500 md:mt-7 lg:mt-10">
          FREE
        </h1>
      </div>
      <div className="mt-12 text-center text-xl md:text-xl lg:text-left">
        {/* <a
          href={"https://forms.gle/mfPgVKy1jjT8KqHU6"}
          target="_blank"
          rel="noopener"
        >
          <LitUpButtonBg
            title="GET MY FREE WEBSITE NOW!"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="align-middle"
          />
        </a> */}
        <AnimatedModalDemo />
      </div>
      <div className="mx-auto mb-8 mt-2 max-w-[70%] text-center text-sm font-medium opacity-50 md:mt-4 md:text-base lg:mt-3 lg:max-w-[50%]">
        100% Free. No Strings Attached.
      </div>
    </div>
  );
};

export default CTAsection;
