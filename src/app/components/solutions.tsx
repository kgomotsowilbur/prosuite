"use client";

import Image from "next/image";
import LearnMoreButton from "./learnMoreButton";

export default function Solutions() {
    const arrSolutions = [
        {title: "Asset Management", paragraph: "Gain control of your asset with Software that helps you keep track of your physical assets."},
        {title: "Risk Management", paragraph: "Identify, capture and monitor enterprise risks with ease."},
        {title: "Documents Management", paragraph: "Easy-to-use solution that enables your firm to convert paper into electronic files."},
        {title: "Perfomance Management", paragraph: "Achieve business stragetic goals with a solution ensuring organizations are running effenciently"},
        {title: "Audit ", paragraph: "Streamline your audit processes and comply with regulations or internal policies."},
        {title: "Compliance Management", paragraph: "Manage and meet legal requirements and comply with applicable laws and regulations."}
    ]

    return (
        <div className="w-full h-full pt-2 md:pt-4 flex flex-col gap-2 md:gap-4">
            <div className="w-full flex flex-row justify-center gap-1 md:gap-2">
                <h1 className="border-l-4 md:border-l-8 pl-0.5 md:pl-1 border-suite gradientText text-3xl md:text-4xl font-bold">Our</h1>
                <h1 className="gradientText text-3xl md:text-4xl font-normal">Solutions</h1>
            </div>
            <div className="flex flex-col justify-center h-full w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 h-full w-full md:gap-4 md:pt-12">
                    {
                        arrSolutions?.map((sol, index) => (
                            <div className="flex flex-row gap-1 md:gap-2 h-48 md:h-40">
                                {index === 1 &&
                                    <div className="flex md:hidden flex-col justify-center h-full w-2">
                                        <div className="flex bg-transparent w-2"></div>
                                    </div>
                                }
                                {index === 3 &&
                                    <div className="flex md:hidden flex-col justify-center h-full w-2">
                                        <div className="flex bg-transparent w-2"></div>
                                    </div>
                                }
                                {index === 5 &&
                                    <div className="flex md:hidden flex-col justify-center h-full w-2">
                                        <div className="flex bg-transparent w-2"></div>
                                    </div>
                                }
                                <div className="flex flex-col gap-1.5 md:gap-3">
                                    <h1 className="h-52 font-opensans font-bold gradientText text-xl md:text-2xl">{sol.title}</h1>
                                    <h1 className="font-opensans text-grey text-sm md:text-base">{sol.paragraph}</h1>
                                    <div className="flex flex-col h-full justify-end">
                                        <LearnMoreButton/>
                                    </div>
                                </div>
                                {index !== 2 && index !== 5 &&
                                    <div className="hidden md:flex flex-col justify-center h-full w-0.5">
                                        <div className="h-[60%] bg-grey w-0.5"></div>
                                    </div>
                                }
                                {index !== 1 && index !== 3 && index !== 5 &&
                                    <div className="flex md:hidden flex-col justify-center h-full w-0.5">
                                        <div className="h-[60%] bg-grey w-0.5"></div>
                                    </div>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
  }