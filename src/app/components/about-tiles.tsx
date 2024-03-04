"use client";

import Image from "next/image";

export default function AboutTiles() {
    const arrAbout = [
        {title: "Comprehensive Management Suite", paragraph: "ProSuite is a one-stop solution for enterprise operations, offering services from asset tracking to compliance management."},
        {title: "User-Friendly Design", paragraph: "With its emphasis on user experience and easy-to-use tools, ProSuite transforms complex tasks into simple operations."},
        {title: "Cloud-Based Solution", paragraph: "As a flexible, cloud-based suite, ProSuite ensures business continuity and scalability, allowing businesses to manage their operations anytime, anywhere."},
    ]

    return (
        <>
            {
                arrAbout.map((abt) => (
                    <div className="rounded flex flex-col w-full md:h-full p-6 md:p-8 gap-2 md:gap-4 mix-blend-multiply shadow-md bg-white">
                        <div className="flex flex-row justify-center w-full">
                            <Image
                                alt=""
                                src={"/pro2.png"}
                                width={96.18}
                                height={150}
                                className="w-auto md:w-32 h-40 md:h-auto"
                            />
                        </div> 
                        <h1 className="text-center font-opensans font-bold text-grey text-xl md:text-2xl">{abt.title}</h1>
                        <h1 className="text-center font-opensans text-grey text-sm md:text-base">{abt.paragraph}</h1>
                    </div>
                ))
            }
      </>
    );
  }