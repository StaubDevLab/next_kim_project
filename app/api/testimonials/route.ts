import prisma from "@/lib/db";
import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth-options";


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

export const POST = async (req: Request, res: Request) => {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({error: 'Unauthorized'},
            {status: 401, headers: {'Content-Type': 'application/json'}});
    }
    try {
        const body = req ? await req.json() : null
        const testimonial = await prisma.testimonial.create(
            {
                data: {
                   ...body
                }
            }
        )
        return NextResponse.json({message: 'Avis ajouté avec succès'}, {status: 200});

    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error},
            {status: 500, headers: {'Content-Type': 'application/json'}});
    }

}