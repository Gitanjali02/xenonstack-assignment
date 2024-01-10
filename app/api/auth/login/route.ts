import { NextResponse } from "next/server";
import prisma from "@/prisma";

export async function POST(req: Request) {
    const data = await req.json();
    // return NextResponse.json(data);
    try {
        const response = await prisma.user.findMany({
            where: {
                email: data.email,
                password: data.password,
            }
        })
        if (!response) return NextResponse.error();

        return NextResponse.json(response, { status: 200 });
    } catch (error) {

    }
}