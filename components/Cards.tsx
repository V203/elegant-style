"use client"

import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Iitems } from "@/app/interfaces/Iitems";
import React from "react"
import ItemModalDisplay from "./ItemModalDisplay";
import { useContext } from "react";
import { ItemContext } from "@/context/ItemContext";


const Cards: React.FC = () => {


let {setSearchItem, searchItem}: {setSearchItem:Dispatch<SetStateAction<any> | undefined>,searchItem: string} = useContext(ItemContext);

let handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchItem(e.target.value)

}

    let [animate, setAnimate] = useState(true);


    let [items, setItems] = useState<Iitems[]>([]);
    let [display, setDisplay] = useState(false);
    let [selectedItem, setSelectedItem] = useState<Iitems | null>(null);

    
    
    console.log(searchItem)
    useEffect(() => {
        const getItems = async (): Promise<void> => {
            try {
                const response = await fetch("http://localhost:3000/api/shopitems", { cache: "no-store" });

                if (!response.ok) {
                    throw new Error("Error retrieving items from the database");
                }

                const { shopItems }: { shopItems: Iitems[] } = await response.json();
                setItems(shopItems);
                

            } catch (error) {
                console.error("Error fetching shop items:", error);
                throw error; 
            }
        };

        getItems()

    }, [])

    
    
    let handleItemClick = (selectedItem: Iitems | any | null | undefined) => {
        setSelectedItem(selectedItem)
        
    }
    
  

    return (

        <div className="p-0 grid grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 opacity-100 gap-4  pt-12 xs:grid-cols-1">

            {
            
            searchItem === "" ? items && items.map((el: Iitems) => (
                <div key={el._id} onClick={() => { handleItemClick(el); setDisplay(prev => !prev) }} className={`${animate ? "animate-translate" : "opacity-0 translate-y-7"} relative flex flex-col justify-self-center`}>

                    <div className="bg-primary-color text-white text-center z-10 h-10 flex justify-center items-center absolute w-full top-0">
                        {el.itemName}
                    </div>

                    <div className="relative">
                        <Image className="hover:cursor-pointer" src={"/" + el.itemName + ".png"} height={320} width={240} alt={`${el.category} item image`} />

                        <div className="bg-label-color absolute bottom-0 right-0 m-0 w-1/3  h-10 text-white flex justify-center items-center">
                            {`$${el.price.toFixed(2)}`}
                        </div>
                    </div>

                    {selectedItem && <ItemModalDisplay selectedItem={selectedItem} display={display} />}
                </div>
            )):items && items.filter((el:Iitems) => el.itemName.toLocaleUpperCase().includes(searchItem.toLocaleUpperCase())).map((el: Iitems) => (
                <div key={el._id} onClick={() => { handleItemClick(el); setDisplay(prev => !prev) }} className={`${animate ? "animate-translate" : "opacity-0 translate-y-7"} relative flex flex-col justify-self-center`}>

                    <div className="bg-primary-color text-white text-center z-10 h-10 flex justify-center items-center absolute w-full top-0">
                        {el.itemName}
                    </div>

                    <div className="relative">
                        <Image className="hover:cursor-pointer" src={"/" + el.itemName + ".png"} height={320} width={240} alt={`${el.category} item image`} />

                        <div className="bg-label-color absolute bottom-0 right-0 m-0 w-1/3  h-10 text-white flex justify-center items-center">
                            {`$${el.price.toFixed(2)}`}
                        </div>
                    </div>

                    {selectedItem && <ItemModalDisplay selectedItem={selectedItem} display={display} />}
                </div>
            ))
            
            }
            
        </div>



    )

}

export default Cards