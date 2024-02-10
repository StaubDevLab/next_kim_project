import prisma from "@/lib/db";
import {NextResponse} from "next/server";

export const GET = async (res: Request, {params}: { params: { slug: string } }) => {

    try {
        const {slug} = params

        const service = await prisma.service.findUnique({
            where: {

                slug: slug
            },

        })
        return NextResponse.json(service, {status: 200});

    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error},
            {status: 500, headers: {'Content-Type': 'application/json'}});
    }

}