import {EmailClientTemplate} from '@/app/_components/email/email-client-template';
import { Resend } from 'resend';
import {EmailInfoTemplate} from "@/app/_components/email/email-info-template";
import {EmailToClientTemplateCustom} from "@/app/_components/email/email-client-template-custom";
import { render } from '@react-email/render';
import sendgrid from '@sendgrid/mail';
sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY ||"");
export async function POST(req:Request, res:Request) {
    const body = req ? await req.json() : null
    const { name, email, tel,subject,message } = body
    // @ts-ignore
    const emailHtml = render(EmailToClientTemplateCustom({name}));
    const optionsToClient = {
        from: process.env.NEXT_PUBLIC_EMAIL ||"contact@kimremy.com",
        to: email,
        subject: 'Kim Remy - Prise en compte de votre demande',
        html: emailHtml,
    };
    const emailHtmlToInfos = render(EmailInfoTemplate({ name, email, tel, subject, message }));
    const optionsToInfos = {
        from:  process.env.NEXT_PUBLIC_EMAIL ||"contact@kimremy.com",
        to:  process.env.NEXT_PUBLIC_EMAIL ||"contact@kimremy.com",
        subject: 'Kim Remy - Nouvelle demande',
        html: emailHtmlToInfos,
    };
    try {
        await sendgrid.send(optionsToClient).then(res =>  sendgrid.send(optionsToInfos)).catch(err => console.log(err));
        // await sendgrid.send(optionsToInfos).then(res => console.log(res)).catch(err => console.log(err));

        return Response.json({ }, { status: 200 });
    } catch (error) {
        return Response.json({ error });
    }
}