import prisma from "@/lib/db";
import {NextResponse} from "next/server";

export const GET = async (res: Request) => {

    try {
        console.log("test")
        const testimonials = await prisma.testimonial.findMany()
        return NextResponse.json(testimonials, {status: 200});

    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error},
            {status: 500, headers: {'Content-Type': 'application/json'}});
    }

}