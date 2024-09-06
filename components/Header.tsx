import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="relative z-[10] flex w-full flex-row justify-start space-x-4 pt-4">
      <Image
        src="/images/logo.png"
        width={40}
        height={40}
        alt="logo of celeste consulting"
      />
      <Image
        src="/images/text-logo.png"
        width={100}
        height={100}
        alt="logo of celeste consulting"
      />
    </div>
  );
};

export default Header;
