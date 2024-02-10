import prisma from "@/lib/db";
import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth-options";

export const GET = async (res:Request) => {

    try {
        const {searchParams} = new URL(res.url)
        const catSlug = searchParams.get('category') || ''
        const services = await prisma.service.findMany({
            where: {

                category : {
                   ...(catSlug && {slug: catSlug})

                }
            },

        })
        return NextResponse.json(services, {status: 200});

    }catch (error){
        console.log(error)
        return NextResponse.json({error: error},
            {status: 500, headers: {'Content-Type': 'application/json'}});
    }

}


export const POST = async (req:Request, res:Request) => {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({error: 'Unauthorized'},
            {status: 401, headers: {'Content-Type': 'application/json'}});
    }
    try {
        const body = req ? await req.json() : null
        console.log(body)
        return NextResponse.json({ message: 'Requête POST traitée' }, { status: 200 });

    }catch (error){
        console.log(error)
        return NextResponse.json({error: error},
            {status: 500, headers: {'Content-Type': 'application/json'}});
    }

}

