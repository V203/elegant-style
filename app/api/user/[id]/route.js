import { User } from "../../../../models/user";
import { connectdb } from "../../../../lib/mongodb";
import { NextResponse } from "next/server";


export async function GET( NextResponse,{ params }) {
    try {
        // console.log(params + " This is it");
        const { id } = params
        console.log(id)

        await connectdb()
        const shopItem = await User.findOne({ _id: id });
        
        return NextResponse.json({ shopItem }, { status: 200 });

    } catch (error) {
        console.log(error);
    }
}


post