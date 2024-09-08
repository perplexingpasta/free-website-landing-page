// import Image from "next/image";
// import React from "react";
// import { FaLocationArrow } from "react-icons/fa6";
// import Link from "next/link";
// import LitUpButton from "./ui/LitUpButton";

// const Header2 = () => {
//   return (
//     <>
//       <div className="fixed z-[10] flex w-full flex-row bg-white py-5">
//         <div className="flex flex-row justify-center space-x-4">
//           <Image
//             src="/images/logo.png"
//             width={40}
//             height={40}
//             alt="logo of celeste consulting"
//           />
//           <Image
//             src="/images/text-logo.png"
//             width={100}
//             height={100}
//             alt="logo of celeste consulting"
//           />
//         </div>
//         <Link
//           href={"https://forms.gle/mfPgVKy1jjT8KqHU6"}
//           target="_blank"
//           rel="noopener"
//           className="flex w-full flex-row justify-around"
//         >
//           <LitUpButton
//             title="GET MY FREE WEBSITE NOW!"
//             icon={<FaLocationArrow />}
//             position="right"
//           />
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Header2;

import Image from "next/image";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import LitUpButton from "./ui/LitUpButton";

const Header = () => {
  return (
    <div className="fixed z-[10] flex w-full bg-white px-4 py-5 md:px-8">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="mx-auto ml-auto flex flex-row justify-center space-x-4 md:ml-0 md:justify-start lg:ml-52">
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
        <div className="hidden flex-grow justify-end md:flex lg:mr-52">
          <Link
            href={"https://forms.gle/mfPgVKy1jjT8KqHU6"}
            target="_blank"
            rel="noopener"
          >
            <LitUpButton
              title="GET MY FREE WEBSITE NOW!"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
