"use client";

import AboutTiles from "./about-tiles";

export default function About() {
    return (
      <div className="w-full h-full pt-2 md:pt-4 flex flex-col gap-2 md:gap-4">
        <div className="w-full flex flex-row justify-center gap-1 md:gap-2">
            <h1 className="border-l-4 md:border-l-8 pl-0.5 md:pl-1 border-suite gradientText text-3xl md:text-4xl font-bold">Why</h1>
            <h1 className="gradientText text-3xl md:text-4xl font-normal">ProSuite?</h1>
        </div>
        <div className="w-full h-full hidden md:flex flex-col justify-center">
          <div className="flex flex-row gap-4">
            <AboutTiles/>
          </div>
        </div>
        <div className="flex flex-wrap md:hidden gap-2">
           <AboutTiles/>
        </div>
      </div>
    );
  }