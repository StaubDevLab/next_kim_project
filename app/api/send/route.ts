import {EmailClientTemplate} from '@/app/_components/email/email-client-template';
import { Resend } from 'resend';
import {EmailInfoTemplate} from "@/app/_components/email/email-info-template";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req:Request, res:Request) {
    const body = req ? await req.json() : null
   const { name, email, tel,subject,message } = body
    try {
        const dataClient = await resend.emails.send({
            from: 'Kim REMY <onboarding@resend.dev>',
            to: [email],
            subject: 'Kim REMY - Prise en compte de votre demande',
            react: EmailClientTemplate({ name: name }),
            text: 'Hello world',
        });
        const dataInfo = await resend.emails.send({
            from: 'Kim REMY <onboarding@resend.dev>',
            to: ["guillaume@staub.pro"],
            subject: `Nouvelle demande depuis le site de ${name}`,
            react: EmailInfoTemplate({ name: name, email: email, tel: tel, subject: subject, message: message }),
            text: 'Hello world',
        })

        return Response.json({ dataClient, dataInfo}, { status: 200 });
    } catch (error) {
        return Response.json({ error });
    }
}