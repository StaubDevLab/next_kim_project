import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth-options";
import {NextResponse} from "next/server";
import prisma from "@/lib/db";

export const PATCH = async (req:Request,  {params}: { params: { id: string } }) => {
    const session = await getServerSession(authOptions);
    const {id} = params

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

        const testimonial = await prisma.testimonial.update({
            where: {
                id: id
            },
            data:{
                ...body,

            }
        })

        return NextResponse.json({testimonial, message: 'Avis mis à jour' }, { status: 200 });

    }catch (error){
        console.log(error)
        return NextResponse.json({error: 'Echec de la mise à jour'},
            {status: 500, headers: {'Content-Type': 'application/json'}});
    }

}

export const DELETE = async (req:Request,  {params}: { params: { id: string } }) => {
    const session = await getServerSession(authOptions);
    const {id} = params

    if (!session) {
        return NextResponse.json({error: 'Unauthorized'},
            {status: 401, headers: {'Content-Type': 'application/json'}});
    }
    try {

        const testimonial = await prisma.testimonial.delete({
            where: {
                id: id
            }
        })
        return NextResponse.json({message: 'Avis supprimée'}, { status: 200 });
    }catch (e) {
        console.log(e)
        return NextResponse.json({error: 'Echec de la suppression'},
            {status: 500, headers: {'Content-Type': 'application/json'}});

    }
}