"use client"
import type { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



interface LandingBodyProps { }

const LandingBody: FC<LandingBodyProps> = ({ }) => {

    let router = useRouter();
    

    
    return (

        <div className="flex flex-row px-12">

            <div className="flex flex-col gap-16 w-1/2">
                <div>
                    <p className="text-secondary-color text-5xl">
                        Unleashing Your <br />
                        <span className="text-primary-color "> Fashion</span> sense...


                    </p>

                </div>

                <span className=" text-primary-color text-wrap w-1/2">
                    Embark on a journey of sartorial splendor as you navigate through our exclusive designer collaborations and insider interviews. Let us be your guide as you elevate your wardrobe to new heights of chic sophistication.

                </span>

                <div className=' flex gap-2 justify-start'>
                    <button onClick={() => router.push("/shop")} className='w-48 h-12 bg-primary-color text-white'><span className='flex gap-1 justify-center'> Shop Now  <Image src={"/arrow.svg"} width={36} height={24}alt="Arrow image pointing to the right"/></span> </button>
                    <button className='w-48 h-12 text-primary-color border-primary-color border-solid border-2'> Register </button>

                </div>

            </div>

            <div className='flex flex-col w-1/2 gap-2'>
                <Image className='animate-translate delay-100 ease-linear' src={"/pradaBangLanding.png"} width={"568"} height={"180"} alt='Image Of a class prada bag'/>
                <div className='flex flex-row gap-2 w-1/2'>
                    <Image className='animate-translate delay-100 ease-linear'  src={"/watchPngLanding.png"} width={"280"} height={"180"} alt='Image Of a class prada bag'/>
                    <Image className='animate-translate delay-100 ease-linear'  src={"/madamRougeJacketLanding.png"} width={"280"} height={"180"} alt='Image Of a class prada bag'/>
                </div>
                <Image className='animate-translate delay-100 ease-linear' src={"/HotSaleJeans.png"} width={"568"} height={"180"} alt='Image Of a class prada bag'/>
            </div>
        </div>
    );
}
export default LandingBody;


