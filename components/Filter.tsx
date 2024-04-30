import Image from "next/image";
const Filter = () => {


    return (
        <div className="flex flex-row w-fit gap-4 justify-center items-center ">
            <p className="text-primary-color text-3xl">
                Filter
            </p>
            <Image  className={"hover:rotate-180 cursor-pointer"} src={"/filterIcon.svg"} width={36} height={36} alt="Filter Icon"/>
        </div>
    )
}

export default Filter;