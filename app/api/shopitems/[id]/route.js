import { connectdb } from "../../../../libs/mongodb";
import { NextResponse } from "next/server";
import ShopItems from "../../../../models/shopItems"

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectdb();
    await ShopItems.findByIdAndDelete(id)
    return NextResponse.json({ message: "deleted successfully" }, { status: 201 })

}

export async function GET(request,{params}) {
    console.log()
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectdb();
        let item = await ShopItems.findById({id});
        
        return NextResponse.json({ item }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}