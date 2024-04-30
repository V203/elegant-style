import CartAddComponent from "@/components/CartAddComponent";
import ItemModalDisplay from "@/components/ItemModalDisplay";
import { Iitems } from "../interfaces/Iitems";
import { useState } from "react";


const page = (item:Iitems) => {
    let [dispay,setDisplay] = useState(false);
    
    return (
        <>
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50" >

        {/* <CartAddComponent /> */}
        <ItemModalDisplay item = {item} />
        </div>
        
        </>
    )

}


export default page