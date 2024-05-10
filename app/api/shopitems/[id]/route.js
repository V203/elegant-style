import { connectdb } from "../../../../libs/mongodb";
import { NextResponse } from "next/server";
import ShopItems from "../../../../models/shopItems"


// export async function generateStaticParams(){
  

//        try{
//             let {shopItems} = await fetch("http://localhost:3000/api/shopitems").then((res) => res.json());
//             return shopItems.map((el) => ({id:el._id})) ;
            
            
//         } catch (error) {
//             console.log(error);
            
//         }

    
    
// }

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");

        await connectdb();
        await ShopItems.findByIdAndDelete(id)
        return NextResponse.json({ message: "deleted successfully" }, { status: 201 })

    } catch (error) {
        console.log(error);
    }

}

export async function GET( NextResponse,{ params }) {
    try {
        // console.log(params + " This is it");
        const { id } = params
        console.log(id)

        await connectdb()
        const shopItem = await ShopItems.findOne({ _id: id });
        console.log(shopItem);
        return NextResponse.json({ shopItem }, { status: 200 });

    } catch (error) {
        console.log(error);
    }
}