import { User } from "../../../models/user";
import { connectdb } from "../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name, email } = await request.json();
        await connectdb();
        await User.create({ name, email });
      
        return NextResponse.json({ message: "User successfully created" }, { status: 201 });

    } catch (error) {
        console.log(error);
    }

}


export async function GET() {
    try {
        await connectdb();
        const user = await User.find({});

        return NextResponse.json({ user });
    } catch (error) {
        console.log(error)
    }
}