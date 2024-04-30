import Image from "next/image"

const SearchPillField = () => {


    return (<>
        <div className="flex w-fit flex-row border-primary-color border-2 rounded-r-3xl  border-solid h-10 border-collapse items-center justify-center" >
            <input className=" ml-1 my-1  border-none focus:outline-none focus:border-primary-color p-1" placeholder="Search" type="search" name="name" id="" /> 
            <span className="flex rounded-r-3xl mr-1 bg-primary-color w-10 h-8 justify-center items-center ">
                <Image  src="/searchIcon.svg" width={20} height={20} alt="search Icon" />
            </span>
        </div>


    </>)
}

export default SearchPillField