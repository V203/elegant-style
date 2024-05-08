
import { connectdb } from "../../../libs/mongodb";
import ShopItems from "../../../models/shopItems";
import { NextResponse } from "next/server";


export async function generateStaticParams() {
   try {
    let { shopItems } = await fetch("http://localhost:3000/api/shopitems").then((res) => res.json());
    return shopItems.map((item) => ({
        params: {
            id: item._id, // Make sure to use "id" here instead of "_id"
        }
    }));
   } catch (error) {
    console.log(error);
   }
}


export async function GET({params}) {
    try {
        await connectdb();
        const shopItems  = await ShopItems.find({}) ;
        return NextResponse.json({shopItems});
    } catch (error) {
        console.log(error)
    }
 
}

export async function POST(request,{params}) {
    try {
        const { itemName, price, category } = await request.json();
        await connectdb();
        await ShopItems.create({ itemName, price, category });
        return NextResponse.json({ message: "Item added to store" }, { status: 201 });
        
    } catch (error) {
        console.log(error);
    }

}

export async function DELETE(request,{params}){
    const id = request.nextUrl.searchParams.get("id");
    await connectdb();
    await ShopItems.findByIdAndDelete(id)
    return NextResponse.json({message: "deleted successfully"},{status: 201})

}

export async function PUT(request,{params}){
   try {
    const id = request.nextUrl.searchParams.get("id");
    await connectdb();
    await ShopItems.findByIdAndDelete(id)
    return NextResponse.json({message: "deleted successfully"},{status: 201})
   } catch (error) {
    console.log(error);
   }

}


