import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth-options";
import prisma from "@/lib/db";
import {NextResponse} from "next/server";

export const GET = async (res:Request) => {


    try {

        const categories = await prisma.category.findMany()
        return NextResponse.json(categories, {status: 200});

    }catch (error){
        console.log(error)
        return NextResponse.json({error: error},
            {status: 500, headers: {'Content-Type': 'application/json'}});
    }

}