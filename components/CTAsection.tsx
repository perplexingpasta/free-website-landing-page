import React from "react";
import LitUpButtonBg from "./ui/LitUpButtonBg";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

const CTAsection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-4xl font-semibold tracking-wide md:text-5xl">
      <h1>Get a website </h1>
      <h1 className="mt-4 md:mt-7 lg:mt-10">that does all that</h1>
      <h1 className="mt-4 md:mt-7 lg:mt-10">
        and <em>more</em>, for
      </h1>
      <h1 className="mt-4 text-violet-500 underline md:mt-7 lg:mt-10">FREE!</h1>
      <div className="mt-12">
        <Link
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
        </Link>
      </div>
    </div>
  );
};

export default CTAsection;
