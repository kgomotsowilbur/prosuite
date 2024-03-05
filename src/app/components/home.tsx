"use client";

import Image from "next/image";
import DemoButton from "./reqDemoButton";
import GetStartedButton from "./getStartedButton";

export default function HomePage() {
    return (
      <div className="w-full h-auto pt-2 md:pt-4 flex flex-col justify-center md:flex-row">
        <div className="grid md:hidden place-items-center h-52 xl:h-full">
            <Image
                alt=""
                src={"/pro.png"}
                width={1245}
                height={601}
                className="w-auto h-52 xl:h-full"
            />
        </div>
        <div className="flex flex-col md:h-full justify-center md:w-[80%]">
            <div className="flex flex-col h-fit gap-4">
                <div className="flex flex-col">
                    <h1 className="font-opensans text-suite text-xl md:text-2xl">Welcome to Prosuite</h1>
                    <h1 className="hidden md:flex gradientText text-7xl xl:text-8xl font-bold">Discover<br/>the power of<br/>Software</h1>
                    <h1 className="md:hidden flex gradientText text-6xl font-bold">Discover<br/>the power<br/>of Software</h1>
                </div>
                <h1 className="hidden xl:flex font-opensans text-grey text-base w-[80%]">Every day, our clients are faced with challenges and opportunities.<br/>We help them solve their problems by connecting them to information technology. We offer solutions that grow,<br/>empower and help businesses.</h1>
                <h1 className="flex xl:hidden font-opensans text-grey text-sm md:w-[50%] w-[95%]">Every day, our clients are faced with challenges and opportunities. We help them solve their problems by connecting them to information technology. We offer solutions that grow, empower and help businesses.</h1>
                <div className="flex flex-row gap-4">
                    <GetStartedButton/>
                    <DemoButton/>
                </div>
            </div>
        </div>
        <div className="hidden md:grid place-items-center h-full w-1/2">
            <Image
                alt=""
                src={"/pro.png"}
                width={1245}
                height={601}
                className="w-full h-auto xl:w-auto xl:h-full"
            />
        </div>
      </div>
    );
  }