// import Image from "next/image";
import SearchPillField from "../../components/SearchPillField"
import Filter from "@/components/Filter";
// import Link from "next/link";
import Cards from "@/components/Cards"; "@/components/Cards";
import { getItems } from "@/lib/mongodb";


const Shop = async  () => {
    
    let {shopItems} = await getItems()

    return (<>
        <div className="flex flex-row items-center justify-end mt-12 gap-x-12 px-12">
           
            <SearchPillField />
            <Filter />

        </div>

        <Cards items={shopItems} />






    </>

    )
}
export default Shop
