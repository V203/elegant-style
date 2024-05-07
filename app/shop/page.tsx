// import Image from "next/image";
import SearchPillField from "../../components/SearchPillField"
import Filter from "@/components/Filter";
// import Link from "next/link";
import Card from "@/components/Cards";

const Shop = () => {

    

    return (<>
    <div className="flex flex-row items-center justify-end mt-12 gap-x-12 px-12">

        <SearchPillField />
        <Filter />
    
    </div>
    
        <Card />
        


          

        
    </>
        
    )
}
export default Shop
            