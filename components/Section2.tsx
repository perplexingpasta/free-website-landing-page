import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold uppercase md:text-5xl">
        Is this you?
      </h1>
      {/* SLOT 1 */}
      <div className="mt-10 flex flex-col-reverse items-center justify-between md:flex-row">
        {/* Left Side */}
        <div className="max-w-3xl flex-1">
          <h1 className="pt-4 text-2xl font-semibold md:pt-0 md:text-3xl">
            Want to be the first dermat to pop up on Google? 😍
          </h1>
          <p className="mt-2 text-lg md:mt-4">
            We use some really cool tools and follow the best practices so that
            Google shows your website in the top search results.
            <br />
            The first dermatologist a patient sees is the one that he visits.
          </p>
        </div>
        {/* Right side */}
        <div className="flex-shrink-0">
          {/* container for aspect ratio 16:9 */}
          <div className="relative h-60 w-96">
            <Image
              src="/images/graphic.webp"
              layout="fill"
              objectFit="cover"
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* SLOT 2 */}
      <div className="mt-16 flex flex-col-reverse items-center justify-between md:flex-row-reverse">
        {/* Right Side */}
        <div className="max-w-3xl flex-1">
          <h1 className="pt-4 text-2xl font-semibold md:pt-0 md:text-3xl">
            Want a potential patient to turn into a loyal patient? 😌
          </h1>
          <p className="mt-2 text-lg md:mt-4">
            We build our websites with just one goal in mind.
            <br />
            Get more patients than you can fill in you waiting room.
          </p>
        </div>
        {/* Left side */}
        <div className="flex-shrink-0">
          {/* container for aspect ratio 16:9 */}
          <div className="relative h-60 w-96">
            <Image
              src="/images/graphic.webp"
              layout="fill"
              objectFit="cover"
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* SLOT 3 */}
      <div className="mt-16 flex flex-col-reverse items-center justify-between md:flex-row">
        {/* Left Side */}
        <div className="max-w-3xl flex-1">
          <h1 className="pt-4 text-2xl font-semibold md:pt-0 md:text-3xl">
            Tired of your website taking forever to load? ⌚{" "}
          </h1>
          <p className="mt-2 text-lg md:mt-4">
            The more time your website takes to load, the more you lose
            patients. Why? Because who wants to wait nowadays?
            <br /> And so, our website loads faster than the time it takes you
            to jump on your bed after a long day.
          </p>
        </div>
        {/* Right side */}
        <div className="flex-shrink-0">
          {/* container for aspect ratio 16:9 */}
          <div className="relative h-60 w-96">
            <Image
              src="/images/graphic.webp"
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
