"use client"

import Image from "next/image"
import { useContext } from "react"
import { ItemContext } from "@/context/ItemContext"

const SearchPillField = () => {

    let { searchItem, setSearchItem } = useContext(ItemContext);


    
    let handleSearchItem = (e: any) => {

        setSearchItem(e.target.value)
        console.log(searchItem);


    }

    return (<>
        <div className="flex w-fit  flex-row border-primary-color border-2 rounded-3xl  gap-4 border-solid h-10 border-collapse items-center justify-end" >
            <input value={searchItem} onChange={handleSearchItem} className=" ml-3 my-1 mr-4 bg-opacity-0 border-none focus:outline-none focus:border-primary-color p-1" placeholder="Search" type="search" name="name" id="" />
            <span className="flex rounded-r-3xl mr-1 bg-primary-color w-10 h-8 justify-center items-center ">
                <Image src="/searchIcon.svg" width={20} height={20} alt="search Icon" />
            </span>
        </div>


    </>)
}

export default SearchPillField