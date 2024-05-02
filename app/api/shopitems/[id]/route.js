import { connectdb } from "../../../../libs/mongodb";
import { NextResponse } from "next/server";
import ShopItems from "../../../../models/shopItems"

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectdb();
    await ShopItems.findByIdAndDelete(id)
    return NextResponse.json({ message: "deleted successfully" }, { status: 201 })

}

export async function GET(request, { params }) {

    const { id } = params;
    console.log(id)

    await connectdb()
    const shopItem = await ShopItems.findOne({ _id: id });
    return NextResponse.json({ shopItem }, { status: 200 });

}