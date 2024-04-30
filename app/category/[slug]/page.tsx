"use client"
import { useParams } from 'next/navigation';
import { storeItems as items } from '@/app/db';
import { Iitems } from "@/app/interfaces/Iitems"
import Image from 'next/image';
import Card from '@/components/Cards';


const Page = () => {
    const { slug } = useParams();
    const filteredItems = items.filter((item: Iitems) => item.category === slug);

    // console.log(slug)


    return <>
    <div className='flex flex-row mt-6  justify-between px-12 gap-x-2'>

    <div className=" p-0 grid justify-end grid-cols-3 gap-y-8  gap-4">
                {items.map(el => <div className=" h-[auto]">
                    <div className="bg-primary-color text-white text-center m-0 h-10 flex justify-center items-center">
                        {el.itemName}
                    </div>
                    

                    <Image src={"/" + el.itemName + ".png"} height={320} width={240} alt={`${el.category} item image`} />
                    <div className="bg-label-color relative float-right bottom-10   w-20 h-10 text-white  justify-center items-center flex">
                        {`$${el.price.toFixed(2)}`}
                    </div>
                    
                </div>
                )}

            </div>
      
    </div>
    </>


};

export default Page