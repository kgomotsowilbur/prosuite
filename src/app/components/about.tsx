"use client";

import Image from "next/image";

export default function About() {
    const arrAbout = [
        {title: "Comprehensive Management Suite", paragraph: "ProSuite is a one-stop solution for enterprise operations, offering services from asset tracking to compliance management."},
        {title: "User-Friendly Design", paragraph: "With its emphasis on user experience and easy-to-use tools, ProSuite transforms complex tasks into simple operations."},
        {title: "Cloud-Based Solution", paragraph: "As a flexible, cloud-based suite, ProSuite ensures business continuity and scalability, allowing businesses to manage their operations anytime, anywhere."},
    ]

    return (
      <div className="w-full h-full pt-4 flex flex-col gap-4">
        <div className="w-full flex flex-row justify-center gap-2">
            <h1 className="border-l-8 pl-1 border-suite gradientText text-4xl font-bold">Why</h1>
            <h1 className="gradientText text-4xl font-normal">ProSuite?</h1>
        </div>
        <div className="flex flex-row gap-4">
            {
                arrAbout.map((abt) => (
                    <div className="rounded flex flex-col w-full h-full p-8 gap-4 mix-blend-multiply shadow-md bg-white">
                        <div className="flex flex-row justify-center w-full">
                            <Image
                                alt=""
                                src={"/pro2.png"}
                                width={96.18}
                                height={150}
                                className="w-32 h-auto"
                            />
                        </div> 
                        <h1 className="text-center font-opensans font-bold text-grey text-2xl">{abt.title}</h1>
                        <h1 className="text-center font-opensans text-grey text-base">{abt.paragraph}</h1>
                    </div>
                ))
            }
        </div>
      </div>
    );
  }