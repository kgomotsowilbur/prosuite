"use client";

import Image from "next/image";
import Link from "next/link";
import DemoButton from "./reqDemoButton";
import { useState } from "react";

export default function Header() {
    const arrHead = [{name: "Home", link: "#home"},
    {name: "About", link: "#about"},
    {name: "Solutions", link: "#solutions"},
    {name: "Contact", link: "#contact"},]

    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="sticky relative top-0 md:top-6 flex flex-row w-full rounded bg-white/75 backdrop-blur-2xl px-4 md:px-8 xl:px-24 h-16 z-40">
        <div className="flex flex-col h-full justify-center">
            <Image
                alt=""
                src="/logo.png"
                width={199}
                height={70}
                className="h-auto w-44 md:w-48"
            />
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="w-full md:hidden flex flex-row justify-end">
            <div className="h-full flex flex-col justify-center">
                <div className="grid place-items-center w-7 h-7 rounded-full border border-black cursor-pointer hover:shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-list w-4 h-4 fill-black" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>
            </div>
        </div>
        {/* small screens links */}
        {isOpen &&
            <div className="absolute top-16 right-4 md:hidden flex flex-col gap-2 p-2 bg-white rounded">
                <div onClick={() => setIsOpen(false)} className="absolute top-2 right-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-x-lg fill-black w-4 h-4" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>
                {
                    arrHead?.map((value, index) => (
                        <div key={index} className="flex flex-col justify-center h-full">
                            <Link href={value.link} className="font-montserrat font-bold text-base hover:text-lg text-black">{value.name}</Link>
                        </div>
                    ))
                }
                <div className="flex flex-row justify-center">
                    <DemoButton/>
                </div>
            </div>
        }
        {/* medium to big screens links */}
        <div className="w-full hidden md:flex flex-row justify-end gap-10">
            {
                arrHead?.map((value, index) => (
                    <div key={index} className="flex flex-col justify-center h-full">
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
  