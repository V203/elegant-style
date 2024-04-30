import { storeItems as items } from "../db";
import Image from "next/image";
import SearchPillField from "../../components/SearchPillField"
import Filter from "@/components/Filter";
import Link from "next/link";
import { category } from "../db";
import Card from "@/components/Cards";

const Shop = () => {

    

    return (<>
    <div className="flex flex-row items-center justify-end px-8 gap-x-4">

        <SearchPillField />
        <Filter />
    
    </div>
        <Card />
        


          

        
    </>
        
    )
}
export default Shop
            // <div className=" p-0 grid justify-end grid-cols-3 gap-y-8  gap-4">
            //     {items.map(el => <div className=" h-[auto]">
            //         <div className="bg-primary-color text-white text-center m-0 h-10 flex justify-center items-center">
            //             {el.itemName}
            //         </div>
                    

            //         <Image src={"/" + el.itemName + ".png"} height={320} width={240} alt={`${el.category} item image`} />
            //         <div className="bg-label-color relative float-right bottom-10   w-20 h-10 text-white  justify-center items-center flex">
            //             {`$${el.price.toFixed(2)}`}
            //         </div>
                    
            //     </div>
            //     )}

            // </div>