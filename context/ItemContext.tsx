

import {createContext, Dispatch, SetStateAction } from "react";


   
    



type contextType = {
    searchItem : string,
    setSearchItem: Dispatch<SetStateAction<string>>

    
}


 export const ItemContext = createContext<contextType | undefined>(undefined);
 
