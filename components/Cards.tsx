"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { Iitems } from "@/app/interfaces/Iitems";
import React from "react"
import ItemModalDisplay from "./ItemModalDisplay";


const Cards: React.FC = () => {

    let itemsArray: Iitems[] = []

    let [animate, setAnimate] = useState(true);

    let [item, setItem] = useState<Iitems | object>({});
    let [items, setItems] = useState<Iitems[]>([]);
    let [display, setDisplay] = useState(false);
    let [selectedItem, setSelectedItem] = useState(null);


    useEffect(() => {
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

    }, [])

    let handleClick = async (id: string) => {
        console.log(id)
        let res = await fetch("http://localhost:3000/api/shopitems/" + id, {
            method: "GET",
            "cache": "default",

        });
        let { shopItem } = await res.json();

        if (display) {
            setDisplay(!display)
            setItem(shopItem)
        }
        console.log(shopItem)



    }

    let handleItemClick = (selectedItem: Iitems | any | null | undefined) => {
        setSelectedItem(selectedItem)

    }






    // async () => const {shopItems} = await getItems()
    return (<div className='flex flex-row mt-6  justify-center  gap-x-2'>
        {
            <div className=" p-0 grid justify-end grid-cols-4 gap-y-8 opacity-100  gap-4">
                {items && items.map((el: Iitems) => <div key={el._id} onClick={() => { handleItemClick(el); setDisplay(prev => !prev) }} className={`${animate ? "animate-translate" : "opacity-0 translate-y-7"} `}>
                    <div className="bg-primary-color  text-white text-center m-0 h-10 flex justify-center items-center ">
                        {el.itemName}
                    </div>

                    <div>

                        <Image className="hover:cursor-pointer" src={"/" + el.itemName + ".png"} height={320} width={240} alt={`${el.category} item image`} />
                    </div>
                    <div className="bg-label-color relative float-right bottom-10   w-20 h-10 text-white  justify-center items-center flex">
                        {`$${el.price.toFixed(2)}`}
                    </div>

                    {selectedItem && <div className={`fixed top-0 left-0 w-full h-full ${display ? "flex" : "hidden"} items-center justify-center bg-black bg-opacity-5 z-50 `} >
                        <div className={`flex flex-col place-self-center w-[500px] rounded-xl animate-translate delay-75  duration-100 ease-linear`}>
                            <div className="flex h-12 min-w-max place-content-center place-items-center rounded-t-xl bg-primary-color text-white">
                                <p className="font-bold text-4xl">

                                    Shoes
                                </p>
                            </div>

                            <div className="flex  flex-row bg-white rounded-b-xl">

                                <div className="relative bg-white rounded-b-xl">

                                    <Image className="hover:cursor-pointer rounded-bl-lg" src={"/" + `${selectedItem.itemName}` + ".png"} height={400} width={320} alt={`item image`} />

                                    <div className="bg-label-color absolute float-right bottom-0 right-0   w-20 h-auto text-white  justify-center items-center flex">
                                        ${selectedItem.price}
                                    </div>


                                </div>

                                <div className="flex flex-col justify-between bg-white items-start w-full rounded-b-xl px-8">
                                    <span>

                                        <p className="text-3xl font-bold">
                                            Your Cart
                                        </p>
                                        <p className="text-secondary-color text-[12px]  w-full">
                                            1 items
                                        </p>
                                    </span>
                                    <hr className="bg-secondary-color w-full text-[16px] text-bold" />
                                    <span>

                                        <p className="m-0">
                                            {selectedItem.itemName}
                                        </p>
                                        <p className="text-secondary-color text-[12px] text-end">
                                            By Jimmy choo
                                        </p>
                                    </span>
                                    <hr className="bg-secondary-color w-full" />
                                    <button className="bg-primary-color w-full mx-auto mb-4 text-white  rounded-lg">
                                        Add to Cart
                                    </button>

                                </div>
                            </div>



                        </div>
                    </div>}
                </div>
                )}

            </div>}

    </div>
    )

}

export default Cards

//<ItemModalDisplay item={item} display={display} />