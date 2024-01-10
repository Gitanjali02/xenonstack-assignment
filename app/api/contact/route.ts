import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const response = await prisma?.contact.create({
            data: {
                fullName: data.fullName,
                email: data.email,
                message: data.message
            }
        })
        if(!response) return NextResponse.error();
        return NextResponse.json(response, {status: 200})
    } catch (error) {
        return NextResponse.error();
    }
}