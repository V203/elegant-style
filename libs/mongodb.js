import mongoose from "mongoose";



export const  connectdb = async  () => { 
    try {
      await  mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to mongodb");
    } catch (error) {
        console.log(`Error connecting to mongodb : ${error}`)
    }
}


export const getItems = async () => {
    try {
        await connectdb()
        const response = await fetch("http://localhost:3000/api/shopitems", { cache: "no-store" });

        if (!response.ok) {
            throw new Error("Error retrieving items from the database");
        }
        
        // const { shopitems }: { shopitems: Iitems[] } = await response.json();
        // console.log(shopitems)
        return await response.json();
    } catch (error) {
        console.error("Error fetching shop items:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
};