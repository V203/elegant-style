"use client"
import { runSignIn, runSignOut } from "@/lib/actions/actions";

import Image from "next/image";
import { useState, useEffect } from "react";
import { getAuthSession } from "@/lib/actions/actions";
import { Session } from "next-auth";

export default  function OurUI() {
    let [session, setSession] = useState<any | null | Session>();
    
    useEffect(() => {
        let authSessionCheck = async () => {

            let sess = await getAuthSession();
            setSession(sess);
    
        }
        authSessionCheck()
    }, [])


    return (<>
        {session && session.user ? (
            <form action={runSignOut}>

                <button type="submit" className="text-primary-color flex justify-end pl-2 flex-row items-center border-solid border-2 border-primary-color rounded-3xl h-8 w-fit">

                    Sign Out
                    <Image className="rounded-full mr-0" alt="Shopping bag image" src={session?.user?.image as string} width={28} height={28} referrerPolicy="no-referrer" />

                </button>
            </form>

        )
            : (
                <form action={runSignIn}>

                    <button type="submit" className="text-primary-color flex justify-between p-2 flex-row items-center border-solid border-2 border-primary-color rounded-3xl h-8 w-24">

                        Sign In

                        <Image alt="Shopping bag image" src={"/loginIcon.svg"} width={18} height={18} />
                    </button>
                </form>
            )

        }
    </>
    )




}