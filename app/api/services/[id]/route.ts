import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth-options";
import {NextResponse} from "next/server";
import prisma from "@/lib/db";

export const PATCH = async (req:Request, res:Request) => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({error: 'Unauthorized'},
            {status: 401, headers: {'Content-Type': 'application/json'}});
    }
    try {
        const body = req ? await req.json() : null

        if (!body) {
            return NextResponse.json({error: 'No body'},
                {status: 400, headers: {'Content-Type': 'application/json'}});
        }

        const service = await prisma.service.update({
            where: {
                id: body.id
            },
            data:{
                ...body,

            }
        })

        return NextResponse.json({service, message: 'Service mis à jour' }, { status: 200 });

    }catch (error){
        console.log(error)
        return NextResponse.json({error: error},
            {status: 500, headers: {'Content-Type': 'application/json'}});
    }

}