import { connectdb } from "../../../../libs/mongodb";
import { NextResponse } from "next/server";
import ShopItems from "../../../../models/shopItems"

export async function generateStaticParams() {
    let { shopItems } = await fetch("http://localhost:3000/api/shopitems").then((res) => res.json());
    return shopItems.map((item) => ({
        params: {
            id: item._id, // Make sure to use "id" here instead of "_id"
        }
    }));
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");

    await connectdb();
    await ShopItems.findByIdAndDelete(id)
    return NextResponse.json({ message: "deleted successfully" }, { status: 201 })

}

export async function GET( request,{params} ) {
    // console.log(params + " This is it");
    const id = params
    console.log(id)

    await connectdb()
    // const shopItem = await ShopItems.findOne({ _id: params._id });
    return NextResponse.json({  }, { status: 200 });
    // shopItem
}