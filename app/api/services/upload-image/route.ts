import {NextResponse} from "next/server";
import path from "node:path";
import {writeFile} from "node:fs/promises";

export const POST = async (req: Request) => {

    const data = await req.formData()

    const file: File | null = data.get('file') as File
    if (!file) return NextResponse.json({error: 'No file'}, {status: 500})
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const imageUrl = `/img/services/${new Date().getTime()}-${file.name}`
    const imagePath = path.join(process.cwd(), '/public', imageUrl)

    try{
        await writeFile(imagePath, buffer)

        return NextResponse.json({imageUrl}, {status: 201})
    }catch (e) {
        console.log(e)
        return NextResponse.json({error: 'Problème upload image'}, {status: 500})
    }


}