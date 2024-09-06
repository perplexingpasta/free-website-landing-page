import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import LitUpButton from "./ui/LitUpButton";
import Link from "next/link";
import LitUpButtonBg from "./ui/LitUpButtonBg";

const ReadyTo = () => {
  return (
    <div className="mb-32 md:mb-16 flex flex-col items-center" id="readyto">
      <h1 className="text-center text-4xl font-light tracking-wider text-white md:text-5xl lg:max-w-[45vw]">
        Ready to learn, engage & ascend?
      </h1>
      <p className="my-5 text-center text-white-200 md:mb-10">
        Register for Asclepius 2024 today to...
      </p>
      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener"
        >
          <LitUpButtonBg
            title="Register Now"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
        <a
          href="/images/elden.png" // Path to the PDF file in the public directory
          download="EldenRing.png" // The name of the file when downloaded
          target="_blank"
          rel="noopener"
        >
          <LitUpButton
            title="View Brochure"
            icon={<IoIosDocument />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default ReadyTo;
