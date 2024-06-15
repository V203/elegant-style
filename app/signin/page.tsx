

import { quintessential } from "@/components/fonts";
import Image from "next/image";
import { useFormState, useFormStatus } from 'react-dom';
// import { signIn } from "@/auth";
import { useState } from "react";
import { signOut,signIn } from "@/auth";


const SignIn = () => {



    // const [errorMessage, dispatch] = useFormState(authenticate, undefined);



    return (

        <main className="flex flex-col items-center justify-center">
            <div className="flex flex-col shadow items-center justify-center shadow-primary-color w-1/3 rounded-2xl gap-2 p-6">



                <div className={`${quintessential.className} flex flex-col items-center justify-center text-xl w-80 gap-2 `}>
                    <p className="text-2xl ">
                        Sign In
                    </p>
                    <Image src={"/VectorloginLogo.svg"} alt="" width={"60"} height={"60"} />
                </div>

                <div className="flex flex-col w-11/12 mx-3 justify-start gap-2  ">
                    <p className="text-lg">
                        Email
                    </p>
                    <input className=" h-10  rounded-xl outline outline-2 outline-primary-color px-4" type="text" name="" id="" />

                    <p className="text-lg">
                        Password
                    </p>
                    <input className=" h-10  rounded-xl outline outline-2 outline-primary-color px-4" type="password" name="" id="" />
                    <p className="underline text-sm text-[#73C3DC]">
                        Forgot password?
                    </p>
                </div>
                <div className="flex gap-3 justify-between">
                    <button className="w-[176px] rounded-lg  h-10 bg-primary-color text-white" >Login</button>
                    <button className="w-[176px] rounded-lg h-10 outline-primary-color  outline-1 outline text-primary-color">Register</button>

                </div>

                <div className="flex flex-row  justify-center mt-3 w-fit">
                    <Image src={"/line.svg"} alt="" width={"196"} height={"1"} />
                    <p className={`${quintessential.className} mx-2`}>
                        Or
                    </p>
                    <Image src={"/line.svg"} alt="" width={"196"} height={"1"} />
                </div>

                <div className="flex flex-row gap-x-8">
                    <form className="p-0 m-0" action={async () => {
                        "use server"
                        await signIn("google")
                    }} >

                        <button type="submit">

                            <Image src={"/googleIcon.svg"} alt="" width={"36"} height={"36"} />
                        </button>
                    </form>

                    <form action={async ()=> {
                        "use server"
                        await  signOut()
                    }}>

                    <button type="submit" className="bg-primary-color p-3">
                        Sign Out
                    </button>
                    
                    </form>
                    <Image src={"/facebookIcon.svg"} alt="" width={"36"} height={"36"} />

                </div>




            </div>
        </main>

    );
}
export default SignIn;