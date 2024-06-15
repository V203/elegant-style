// "use client"
import Image from "next/image";
import Link from "next/link";
import { quintessential } from "./fonts";
import { getAuthSession } from "../lib/actions/actions"
import { usePathname, useRouter } from 'next/navigation';
import { auth, signIn } from "auth";
import { getUserCart } from "../lib/actions/actions";
import OurUI from "./OurUI";
import { useEffect, useState } from "react";
import CartComponent from "./CartComponent";



let Header = () => {


 

    const path = usePathname();


    return (<div className="flex flex-row z-40 w-full bg-white mb-6 justify-between h-14 items-center border-solid border-primary-color border-b-2  px-12">
        <span className={` ${quintessential.className} text-primary-color text-3xl `}>
            Élégance Éclatante
        </span>

        <div className="flex flex-row text-secondary-color gap-4">
            <Link href={"/"}>
                <p className={`flex flex-col ${path === "/" ? "text-primary-color font-bold" : ""}`}>
                    Home
                    {path === "/" ? <span className="bg-primary-color w-full h-1 rounded-xl transition-all duration-300">

                    </span> : <span className="bg-white w-0 h-1 rounded-xl">

                    </span>}
                </p>
            </Link>
            <Link href={"/shop"}>
                <p className={`flex flex-col ${path === "/shop" ? "text-primary-color font-bold" : ""}`}>
                    Shop
                    {path === "/shop" ? <span className="bg-primary-color w-full h-1 rounded-xl transition-all duration-300 ">

                    </span> : <span className="bg-white w-0  h-1 rounded-xl">

                    </span>}
                </p>
            </Link>
            <Link href={""}>
                <p className={`${path === ""}`}>
                    Contact
                </p>

            </Link>



        </div>

        <span className="relative">


            <Image src="/cartImg.svg" alt="" width={25} height={25} />

            <CartComponent  />

        </span>

        <div className="flex gap-3">
            <OurUI />
        </div>

    </div>)
}


export default Header;