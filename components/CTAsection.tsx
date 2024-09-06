import React from "react";
import LitUpButtonBg from "./ui/LitUpButtonBg";
import { FaLocationArrow } from "react-icons/fa6";

const CTAsection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-5xl font-bold uppercase">Is this you?</h1>
      <div className="mt-20">
        <LitUpButtonBg
          title="GET MY FREE WEBSITE NOW!"
          icon={<FaLocationArrow />}
          position="right"
        />
      </div>
    </div>
  );
};

export default CTAsection;
