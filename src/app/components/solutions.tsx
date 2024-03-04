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
        <div className="w-full h-full pt-4 flex flex-col gap-4">
            <div className="w-full flex flex-row justify-center gap-2">
                <h1 className="border-l-8 pl-1 border-suite gradientText text-4xl font-bold">Our</h1>
                <h1 className="gradientText text-4xl font-normal">Solutions</h1>
            </div>
            <div className="flex flex-col justify-center h-full w-full">
                <div className="grid grid-cols-3 h-full w-full gap-4 pt-12">
                    {
                        arrSolutions?.map((sol, index) => (
                            <div className="flex flex-row gap-2 h-40">
                                <div className="flex flex-col gap-3">
                                    <h1 className="font-opensans font-bold gradientText text-2xl">{sol.title}</h1>
                                    <h1 className="font-opensans text-grey text-base">{sol.paragraph}</h1>
                                    <LearnMoreButton/>
                                </div>
                                {index !== 2 && index !== 5 &&
                                    <div className="flex flex-col justify-center h-full w-0.5">
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