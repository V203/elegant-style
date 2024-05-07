"use client"
import Image from "next/image";
import Link from "next/link";
import { quintessential } from "./fonts";

import { usePathname,useRouter } from 'next/navigation';

const Header = () => {
    const path = usePathname();
    let router  = useRouter();


    const handleClick =() => router.push("/signin")

    
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

        <div className="flex flex-row gap-2">
            <Image alt="Shopping bag image" src={"/cartImg.svg"} width={18} height={18} />
            <button onClick={handleClick} className="text-primary-color flex justify-between p-2 flex-row items-center border-solid border-2 border-primary-color rounded-3xl h-8 w-24">
                <p>
                    Sign In
                </p>
                <Image alt="Shopping bag image" src={"/loginIcon.svg"} width={18} height={18} />
            </button>
        </div>

    </div>)
}


export default Header;