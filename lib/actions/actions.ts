"use server"
import { Iitems } from "@/app/interfaces/Iitems";
import { auth, signIn, signOut } from "auth";
import { Session } from "next-auth";
import { User } from "@/models/user";
import ShopItems from "@/models/shopItems"
import { connectdb } from "../mongodb";

let runSignIn = async () => {

    await signIn();

}

let runSignOut = async () => {

    try {
        await signOut()
    } catch (error) {
        console.log(error);
    }
}

let getAuthSession = async () => {
    try {

        return await auth();
    } catch (error) {
        console.log(error);

    }
}

let addProduct = async (product: Iitems) => {

    let session: Session | null | any = await auth();
    if (session) {

        var { user: { email } } = session;
    }

    let ourUser = await User.findOne({ email: email });

    if (!ourUser && !session) {
        await signIn();
    }

    await ourUser.products.push(product);

    await ourUser.save();

}

let getUserCart = async () => {

    try {

        let session: Session | null | any = await auth();


        if (session) {
            let { user: { email } } = session

            let { products } = await User.findOne({ email: email });

            return products
        } else {
            return []
        }

    } catch (error) {

        console.log("get User cart error");

    }

}

let getUser = async () => {

    try {

        let session: Session | null | any = await auth();

        if (session) {

            var { user: { email } } = session;
        }

        let ourUser = await User.findOne({ email: email });

        return ourUser
    } catch (error) {
        console.log("get User error");
    }
}

const getItems = async () => {
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
    
export { getAuthSession, runSignIn, runSignOut, addProduct, getUserCart, getUser,getItems }