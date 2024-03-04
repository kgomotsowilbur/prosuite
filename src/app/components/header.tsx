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
      <div className="sticky top-0 md:top-6 flex flex-row w-full rounded bg-white/75 backdrop-blur-2xl px-4 md:px-24 h-16 z-40">
        <div className="flex flex-col h-full justify-center">
            <Image
                alt=""
                src="/logo.png"
                width={199}
                height={70}
                className="h-auto w-48"
            />
        </div>
        <div className="w-full md:hidden flex flex-row justify-end">
            <div className="h-full flex flex-col justify-center">
                <div className="grid place-items-center w-7 h-7 rounded-full border border-black cursor-pointer hover:shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-list w-4 h-4 fill-black" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className="w-full hidden md:flex flex-row justify-end gap-10">
            {
                arrHead?.map((value) => (
                    <div className="flex flex-col justify-center h-full">
                        <Link href={value.link} className="font-montserrat font-bold text-base hover:text-lg text-black">{value.name}</Link>
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
  