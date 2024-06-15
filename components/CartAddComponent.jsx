
"use client"
import { Nunito } from "next/font/google";
import Image from "next/image";
import { getUserCart } from "@/lib/actions/actions";
import { useEffect, useState } from "react";


let CartAddComponent = (props) => {

    let [itemsInCart,setItemsInCart] = useState([]);

    useEffect(
        () => {
            let fetchItemsInCart = async () => {
                let currentCartItems = await getUserCart();
                setItemsInCart(currentCartItems)
                // console.log(currentCartItems);
            }

            fetchItemsInCart()
        },[]
    )



    // const itemsInCart = storeItems.slice(0, 3);

    return (

        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 " >

        

        <div className=" flex flex-col shadow place-self-center rounded-xl w-[581px] bg-white z-50">
            <div className="flex p-3 items-start">
                <p className={`text-start text-primary-color font-bold text-5xl`}   >
                    Your Cart
                </p>
            </div>
            <hr className="w-full" />



            {itemsInCart.map(el =>

                <div className="flex flex-row gap-y-8   w-full p-4 justify-between  border-solid pb-4 border-b-[1px]">
                    <div>

                        <Image src={"/" + el.itemName + ".png"} width={80} height={80} alt="" />
                    </div>
                    <span className="flex flex-col justify-center items-start text-lg">

                        <p>{el._id}</p>
                        <p className="text-sm text-secondary-color font-thin">
                            By Jimmy Woo
                        </p>

                        <span className="flex flex-row">
                            <button className="text-center bg-primary-color text-white w-8 rounded-l-xl font-bold">
                                -
                            </button>

                            <span className="text-center bg-white text-black w-8 font-bold">
                                0
                            </span>

                            <button className="text-center bg-primary-color text-white w-8 rounded-r-xl font-bold">
                                +
                            </button>
                        </span>
                    </span>


                    <div className="flex flex-col justify-between float-right ">
                        <div className="flex justify-end">

                            <Image src={"/trash.svg"} width={18} height={18} alt="trash Icon" />
                        </div >


                        <div className="flex flex-col">
                            <p className="font-bold text-3xl text-right">
                                ${el.price}
                            </p>
                        </div>


                    </div>



                </div>
            )}

            <div className="flex flex-row justify-between p-4 gap-4 border-b">



                <p className="text-3xl font-bold">
                    Total :
                </p>



                <p className="text-3xl font-bold">
                    $200.00
                </p>



            </div>
            <div className="p-4">

                <button className="bg-primary-color text-white w-full  h-10 rounded-xl text-center text-3xl px-4 place-self-center ">
                    Proceed to checkout
                </button>
            </div>



        </div>

        </div>

    )
}

export default CartAddComponent