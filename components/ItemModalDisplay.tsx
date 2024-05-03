"use client"

import { Iitems } from "@/app/interfaces/Iitems";
import Image from "next/image";


let ItemModalDisplay = ({selectedItem,display} :{ selectedItem:Iitems, display:boolean}) => {



    return (
        <div className={`fixed top-0 left-0 w-full h-full ${display ? "flex" : "hidden"} items-center justify-center bg-black bg-opacity-5 z-50 `} >
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
                            ${selectedItem.price.toFixed(2)}
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
        </div>
    )
}

export default ItemModalDisplay

