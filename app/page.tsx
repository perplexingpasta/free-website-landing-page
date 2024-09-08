"use client";
import React from "react";

import dynamic from "next/dynamic";
import GridAndDotBg from "@/components/ui/GridAndDotBg";
import Hero from "@/components/Hero3";
import Header from "@/components/Header";
import Header2 from "@/components/Header2";

const DynamicFooter = dynamic(() => import("@/components/Footer3"), {
  ssr: false,
});
const DynamicWhatsapp = dynamic(() => import("@/components/Whatsapp"), {
  ssr: false,
});
const DynamicSection2 = dynamic(() => import("@/components/Section2"), {
  ssr: false,
});
const DynamicCTA = dynamic(() => import("@/components/CTAsection"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="overflow-clip bg-black-100">
      <nav className="w-full">
        <Header2 />
      </nav>
      <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip px-5 sm:px-10">
        <div className="w-full max-w-[90rem]">
          <GridAndDotBg />
          <section className="relative my-16 mt-24 md:mt-32 lg:mt-40">
            <Hero />
          </section>
          {/* <div className="relative border-t-4 border-gray-200" /> */}
          <section className="relative my-12 md:my-24">
            <DynamicSection2 />
          </section>
          <div className="relative border-t-4 border-gray-200" />
          <section className="relative my-12 md:my-24 md:mt-24">
            <DynamicCTA />
          </section>
          <DynamicWhatsapp />
        </div>
      </main>
      <footer>
        <DynamicFooter />
      </footer>
    </div>
  );
};

export default page;
