"use client";

import Image from "next/image";
import AboutTiles from "./about-tiles";

export default function About() {
    const arrAbout = [
        {title: "Comprehensive Management Suite", paragraph: "ProSuite is a one-stop solution for enterprise operations, offering services from asset tracking to compliance management."},
        {title: "User-Friendly Design", paragraph: "With its emphasis on user experience and easy-to-use tools, ProSuite transforms complex tasks into simple operations."},
        {title: "Cloud-Based Solution", paragraph: "As a flexible, cloud-based suite, ProSuite ensures business continuity and scalability, allowing businesses to manage their operations anytime, anywhere."},
    ]

    return (
      <div className="w-full h-full pt-2 md:pt-4 flex flex-col gap-2 md:gap-4">
        <div className="w-full flex flex-row justify-center gap-1 md:gap-2">
            <h1 className="border-l-6 md:border-l-8 pl-1 border-suite gradientText text-3xl md:text-4xl font-bold">Why</h1>
            <h1 className="gradientText text-3xl md:text-4xl font-normal">ProSuite?</h1>
        </div>
        <div className="hidden md:flex flex-row gap-4">
           <AboutTiles/>
        </div>
        <div className="flex flex-wrap md:hidden gap-2">
           <AboutTiles/>
        </div>
      </div>
    );
  }