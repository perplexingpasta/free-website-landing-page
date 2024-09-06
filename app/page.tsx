"use client";
import React from "react";

import dynamic from "next/dynamic";
import GridAndDotBg from "@/components/ui/GridAndDotBg";
// import Home from "@/components/Home";
import Hero from "@/components/Hero3";
import Header from "@/components/Header";
import Section2 from "@/components/Section2";
import CTAsection from "@/components/CTAsection";

const DynamicFooter = dynamic(() => import("@/components/Footer3"), {
  ssr: false,
});
// const DynamicFlipCardSection = dynamic(
//   () => import("../components/FlipCardSection"),
//   {
//     ssr: false,
//   },
// );
// const DynamicReadyTo = dynamic(() => import("../components/ReadyTo"), {
//   ssr: false,
// });
const DynamicWhatsapp = dynamic(() => import("@/components/Whatsapp"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="overflow-clip bg-black-100">
      <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip px-5 sm:px-10">
        <div className="w-full max-w-7xl">
          <Header />
          <GridAndDotBg />
          <section className="relative my-24">
            <Hero />
          </section>
          <div className="relative border-t-4 border-gray-200" />
          <section className="relative my-24">
            <Section2 />
          </section>
          <div className="relative border-t-4 border-gray-200" />
          <section className="relative my-24 mt-24">
            <CTAsection />
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
