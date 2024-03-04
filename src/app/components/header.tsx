"use client";

import Image from "next/image";
import Link from "next/link";
import DemoButton from "./reqDemoButton";

export default function Header() {
    const arrHead = [{name: "Home", link: "#home"},
    {name: "About", link: "#about"},
    {name: "Solutions", link: "#solutions"},
    {name: "Contact", link: "#contact"},]

    return (
      <div className="sticky top-6 flex flex-row w-full px-24 h-16">
        <div className="flex flex-col h-full justify-center">
            <Image
                alt=""
                src="/logo.png"
                width={190}
                height={110}
                className="h-auto w-auto"
            />
        </div>
        <div className="w-full flex flex-row justify-end gap-10">
            {
                arrHead?.map((value) => (
                    <div className="flex flex-col justify-center h-full">
                        <Link href={value.link} className="font-montserrat font-bold font-base">{value.name}</Link>
                    </div>
                ))
            }
            <div className="flex flex-col h-full justify-center">
                <DemoButton/>
            </div>
        </div>
      </div>
    );
  }
  