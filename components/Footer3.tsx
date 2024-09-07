import { socialMedia2, socialMedia1, socialMedia } from "@/data/index2";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerCol2 = {
    title: "Help",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Why Us", href: "/#testimonials" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "About Us", href: "/about" },
    ],
  };

  const footerCol3 = {
    title: "Get in touch",
    links: [
      {
        img: "/images/call-white.svg",
        label: "+91 63628-40780",
        href: "tel:+6362840780",
      },
      {
        img: "/images/whatsapp-white.svg",
        label: "+91 95570-88564",
        href: "https://wa.me/9557088564",
      },
      {
        img: "/images/email-white.svg",
        label: "hello@celesteconsulting.in",
        href: "mailto:hello@celesteconsulting.in",
      },
    ],
  };

  return (
    <div className="relative mx-auto mt-20 flex max-w-[85rem] flex-col items-center justify-center overflow-clip px-5 text-white sm:px-10">
      <div className="font-lexendDeca relative w-full pb-10" id="footer">
        {/* <div className="absolute left-0 top-0 flex h-[20rem] w-full items-center justify-center bg-white bg-grid-black/[0.05] dark:bg-black-100 dark:bg-grid-white/[0.05]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div> */}

        <div className="relative flex flex-col lg:flex-1 lg:flex-row">
          <div>
            <Link href="/">
              <Image
                src="/images/footer-logo.webp"
                width={450}
                height={112.5}
                alt="Logo of celeste consulting"
              />
            </Link>
            <br />
            <br className="hidden md:block" />
            <div className="flex items-center justify-center gap-3 pt-5 md:gap-4 md:pt-0 lg:hidden lg:justify-start lg:pt-12">
              {socialMedia.map((profile) => (
                <div
                  key={profile.id}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 saturate-150 backdrop-blur-lg backdrop-filter"
                >
                  <Link
                    href={profile.link}
                    target="_blank"
                    rel="noopener"
                    className="transition ease-in-out hover:scale-110"
                  >
                    <Image
                      src={profile.img}
                      alt={profile.alt}
                      width={profile.width}
                      height={profile.height}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* <br className="block md:hidden" />
        <br className="block md:hidden" /> */}
          <div className="hidden flex-1 flex-wrap justify-start gap-10 md:justify-evenly lg:flex">
            {/* Map over footerCol2 */}
            {/* <div>
              <ul>
                {footerCol2.links.map((item) => (
                  <li
                    className="mt-3 cursor-pointer text-sm leading-normal text-white-400 transition-all hover:scale-110 hover:text-purple md:text-base"
                    key={item.label}
                  >
                    <Link href={item.href} target="_blank" rel="noopener">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
            {/* Map over footerCol3 */}
            <div>
              <ul>
                {footerCol3.links.map((item) => (
                  <li
                    className="mt-3 cursor-pointer text-sm leading-normal text-white-400 transition-all hover:scale-110 hover:text-purple md:text-base"
                    key={item.label}
                  >
                    <Image
                      src={item.img}
                      width={25}
                      height={25}
                      alt=""
                      className="mr-3 inline-flex flex-shrink-0"
                    />
                    <Link href={item.href} target="_blank" rel="noopener">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* footerCol4 */}
            <div className="flex flex-row space-x-3">
              <div className="hidden flex-col items-center justify-center space-y-3 lg:flex">
                {socialMedia1.map((profile) => (
                  <div
                    key={profile.id}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-100 bg-opacity-75 saturate-150 backdrop-blur-lg backdrop-filter"
                  >
                    <Link
                      href={profile.link}
                      target="_blank"
                      rel="noopener"
                      className="transition ease-in-out hover:scale-110"
                    >
                      <Image
                        src={profile.img}
                        alt={profile.alt}
                        width={profile.width}
                        height={profile.height}
                      />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="hidden flex-col items-center justify-center space-y-3 lg:flex">
                {socialMedia2.map((profile) => (
                  <div
                    key={profile.id}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-100 bg-opacity-75 saturate-150 backdrop-blur-lg backdrop-filter"
                  >
                    <Link
                      href={profile.link}
                      target="_blank"
                      rel="noopener"
                      className="transition ease-in-out hover:scale-110"
                    >
                      <Image
                        src={profile.img}
                        alt={profile.alt}
                        width={profile.width}
                        height={profile.height}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
