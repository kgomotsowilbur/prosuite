"use client";

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
        <div className="w-full h-auto pt-2 xl:pt-4 flex flex-col justify-center gap-2 xl:gap-4">
            <div className="w-full h-fit flex flex-row justify-center gap-1 md:gap-2">
                <h1 className="border-l-4 md:border-l-8 pl-0.5 md:pl-1 border-suite gradientText text-3xl md:text-4xl font-bold">Our</h1>
                <h1 className="gradientText text-3xl md:text-4xl font-normal">Solutions</h1>
            </div>
            <div className="flex flex-col w-full min-h-[40%] h-fit">
                <div className="grid grid-cols-2 md:grid-cols-3 h-full w-full gap-y-2 md:gap-y-8 xl:gap-y-14 md:gap-x-4 xl:pt-4">
                    {
                        arrSolutions?.map((sol, index) => (
                            <div key={index} className="flex flex-row gap-1 md:gap-2 h-52 md:min-h-44 xl:h-40">
                                {/* space before every tile on the right side of the screen */}
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
                                <div className="flex flex-col">
                                    <div className="flex flex-col h-[30%] md:h-[35%] xl:h-[25%] md:w-[75%] xl:w-full justify-center">
                                        <h1 className="font-opensans font-bold gradientText text-xl md:text-2xl">{sol.title}</h1>
                                    </div>
                                    <div className="flex flex-col h-[50%] md:h-[40%] xl:h-fit">
                                        <h1 className="font-opensans text-grey text-sm md:text-base">{sol.paragraph}</h1>
                                    </div>
                                    <div className="flex flex-col h-[20%] md:h-[25%] xl:mt-4">
                                        <LearnMoreButton/>
                                    </div>
                                </div>
                                {/* large screens tiles lines between columns */}
                                {index !== 2 && index !== 5 &&
                                    <div className="hidden md:flex flex-col justify-center h-full w-0.5">
                                        <div className="h-[50%] bg-grey w-0.5"></div>
                                    </div>
                                }
                                {/* mobile tiles lines between columns */}
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