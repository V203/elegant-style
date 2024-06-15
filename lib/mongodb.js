import mongoose from "mongoose";

export const  connectdb = async  () => { 
    try {
      await  mongoose.connect(process.env.MONGODB_URI);
       
    } catch (error) {
        console.log(`Error connecting to mongodb : ${error}`);
    }
}


export const getItems = async () => {
    try {
        await connectdb();
        const response = await fetch("http://localhost:3000/api/shopitems", { cache: "no-cache" });

        if (!response.ok) {
            throw new Error("Error retrieving items from the database");
        }
        
        return await response.json();
    } catch (error) {
        console.error("Error fetching shop items:", error);
        throw error;
    }
};