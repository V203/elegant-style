
import { connectdb } from "../../../lib/mongodb";
import {ShopItems} from "../../../models/user";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectdb();
        const shopItems  = await ShopItems.find({}) ;
      
        return NextResponse.json({shopItems});
    } catch (error) {
        console.log(error)
    }
}

export async function POST(request) {
    try {
        const { itemName, price, category } = await request.json();
        await connectdb();
        await ShopItems.create({ itemName, price, category });
        return NextResponse.json({ message: "Item added to store" }, { status: 201 });
        
    } catch (error) {
        console.log(error);
    }

}

export async function DELETE(request){
    try{

        const id = request.nextUrl.searchParams.get("id");
        await connectdb();
        await ShopItems.findByIdAndDelete(id)
        return NextResponse.json({message: "deleted successfully"},{status: 201})
    }catch(error){
        console.log(error);

    }

}

export async function PUT(request){
   try {
    const id = request.nextUrl.searchParams.get("id");
    await connectdb();
    await ShopItems.findByIdAndDelete(id)
    return NextResponse.json({message: "deleted successfully"},{status: 201})
   } catch (error) {
    console.log(error);
   }

}


