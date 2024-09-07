import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold uppercase lg:text-5xl">
        Is this you?
      </h1>
      {/* SLOT 1 */}
      <div className="mt-10 flex flex-col-reverse items-center justify-center lg:flex-row">
        {/* Left Side */}
        <div className="max-w-[22rem] flex-1 text-center md:max-w-md lg:mr-10 lg:max-w-3xl lg:text-left">
          <h1 className="pt-4 text-2xl font-semibold md:text-3xl lg:pt-0">
            Want to be the first dermat to pop up on Google? 😍
          </h1>
          <p className="text-lg md:text-xl lg:max-w-2xl">
            <br />
            By following the best practices Google shows your website in the top
            search results.
            <br />
            <br />
            <em>
              The first dermatologist a patient sees is the dermatologist that
              the patient visits.
            </em>
          </p>
        </div>
        {/* Right side */}
        <div className="flex-shrink-0">
          {/* container for aspect ratio 16:9 */}
          <div className="relative h-60 w-96">
            <Image
              src="/images/mrbean.gif"
              layout="fill"
              objectFit="cover"
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* SLOT 2 */}
      <div className="mt-16 flex flex-col-reverse items-center justify-center lg:flex-row-reverse">
        {/* Right Side */}
        <div className="max-w-[22rem] flex-1 text-center md:max-w-md lg:max-w-3xl lg:text-left">
          <h1 className="pt-4 text-2xl font-semibold md:text-3xl lg:pt-0">
            Want visitors to turn into a loyal patients? 😌
          </h1>
          <p className="text-lg md:text-xl lg:max-w-2xl">
            <br />
            We build our websites with just one goal in mind.
            <br />
            <br />
            Get <em>more patients than you can fill in you waiting room.</em>
          </p>
        </div>
        {/* Left side */}
        <div className="flex-shrink-0 lg:mr-10">
          {/* container for aspect ratio 16:9 */}
          <div className="relative h-60 w-96">
            <Image
              src="/images/waiting.gif"
              layout="fill"
              objectFit="cover"
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* SLOT 3 */}
      <div className="mt-16 flex flex-col-reverse items-center justify-center lg:flex-row">
        {/* Left Side */}
        <div className="max-w-[22rem] flex-1 text-center md:max-w-md lg:mr-10 lg:max-w-3xl lg:text-left">
          <h1 className="pt-4 text-2xl font-semibold md:text-3xl lg:pt-0">
            Tired of your old website taking forever to load? ⌚{" "}
          </h1>
          <p className="text-lg md:text-xl lg:max-w-2xl">
            <br />
            The more time your website takes to load, the more you lose
            patients. <br />
            Why? Because nobody wants to wait nowadays
            <br />
            <br />
            Your new website will{" "}
            <em>
              load faster than the time it takes you to jump on your bed at
              night.
            </em>
          </p>
        </div>
        {/* Right side */}
        <div className="flex-shrink-0">
          {/* container for aspect ratio 16:9 */}
          <div className="relative h-60 w-96">
            <Image
              src="/images/headbang.gif"
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
