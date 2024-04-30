"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { Iitems } from "@/app/interfaces/Iitems";
import React from "react"
import ItemModalDisplay from "./ItemModalDisplay";


const Cards: React.FC =   () => {

    let itemsArray:Iitems[] = []

    let [animate, setAnimate] = useState(true);
    
    let [item, setItem] = useState<Iitems | object>({});
    let [items, setItems] = useState<Iitems[]>([]);
    let [display,setDisplay] = useState(false);

useEffect(()=> {
    const getItems = async (): Promise<void> => {
        try {
            const response = await fetch("http://localhost:3000/api/shopitems", { cache: "no-store" });
    
            if (!response.ok) {
                throw new Error("Error retrieving items from the database");
            }
    
            const { shopItems }: { shopItems: Iitems[] } = await response.json();
            setItems(shopItems);
            console.log(shopItems)
       
        } catch (error) {
            console.error("Error fetching shop items:", error);
            throw error; // Re-throw the error to be handled by the caller
        }
    };

    getItems()

},[])


    
    

    
// async () => const {shopItems} = await getItems()
    return (<div className='flex flex-row mt-6  justify-center  gap-x-2'>
{
    <div className=" p-0 grid justify-end grid-cols-4 gap-y-8 opacity-100  gap-4">
            {items && items.map((el:Iitems) => <div onClick={() => setDisplay(prevDisplay => !prevDisplay)}  key={el._id} className={`${animate ? "animate-translate" : "opacity-0 translate-y-7"} `}>
                <div className="bg-primary-color  text-white text-center m-0 h-10 flex justify-center items-center ">
                    {el.itemName}
                </div>

                <div>

                    <Image className="hover:cursor-pointer" src={"/" + el.itemName + ".png"} height={320} width={240} alt={`${el.category} item image`} />
                </div>
                <div className="bg-label-color relative float-right bottom-10   w-20 h-10 text-white  justify-center items-center flex">
                    {`$${el.price.toFixed(2)}`}
                </div>

            <ItemModalDisplay item={el} display={display} />
            </div>
            )}

        </div> }

    </div>
    )

}

export default Cards

