import { connectdb } from "../../../../libs/mongodb";
import { NextResponse } from "next/server";
import ShopItems from "../../../../models/shopItems"


// pages/api/shopitems/[id].ts

export async function generateStaticParams() {
    try {
        const response = await fetch("http://localhost:3000/api/shopitems", { cache: "no-store" });

        let { shopItems } = await response.json();
        // Generate static params for each ID
        return shopItems.map((el) => (
            { params: { id: el._id } }
        )
        );
    } catch (error) {
        console.log(error)
    }


}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectdb();
    await ShopItems.findByIdAndDelete(id)
    return NextResponse.json({ message: "deleted successfully" }, { status: 201 })

}

export async function GET(request, { params }) {
    console.log(params);
    const { id } = params;
    console.log(id)

    await connectdb()
    const shopItem = await ShopItems.findOne({ _id: id });
    return NextResponse.json({ shopItem }, { status: 200 });

}