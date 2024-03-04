"use client";

import Image from "next/image";
import DemoButton from "./reqDemoButton";
import GetStartedButton from "./getStartedButton";

export default function HomePage() {
    return (
      <div className="w-full h-full py-4 flex flex-row">
        <div className="flex flex-col h-full w-[55%] justify-center">
            <div className="flex flex-col h-fit w-full gap-8">
                <div className="flex flex-col">
                    <h1 className="font-opensans text-suite text-2xl">Welcome to Prosuite</h1>
                    <h1 className="gradientText">Discover<br/>the power of<br/>Software</h1>
                </div>
                <h1 className="font-opensans text-grey text-base w-[80%]">Every day, our clients are faced with challenges and opportunities.<br/>We help them solve their problems by connecting them to information technology. We offer solutions that grow,<br/>empower and help businesses.</h1>
                <div className="flex flex-row gap-4">
                    <GetStartedButton/>
                    <DemoButton/>
                </div>
            </div>
        </div>
        <div className="grid place-items-center w-[45%] h-full">
            <Image
                alt=""
                src={"/pro.png"}
                width={400}
                height={500}
                className="w-auto h-full"
            />
        </div>
      </div>
    );
  }