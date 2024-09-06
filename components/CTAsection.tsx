import React from "react";
import LitUpButtonBg from "./ui/LitUpButtonBg";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

const CTAsection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-4xl font-medium tracking-wide md:text-5xl">
      <h1>Get a website </h1>
      <h1 className="mt-4 md:mt-20">that does all that</h1>
      <h1 className="mt-4 md:mt-20">
        and <em>more</em>, for
      </h1>
      <h1 className="mt-4 text-violet-500 underline md:mt-20">FREE!</h1>
      <div className="mt-12 md:mt-20">
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
    </div>
  );
};

export default CTAsection;
