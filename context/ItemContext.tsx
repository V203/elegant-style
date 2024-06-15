import {createContext, Dispatch, SetStateAction } from "react";

interface searchContextProps {
    searchItem : string,
    setSearchItem: Dispatch<SetStateAction<string>>
   
}

 export const ItemContext = createContext<searchContextProps |  Dispatch<SetStateAction<string>> | string | any>("");
 
