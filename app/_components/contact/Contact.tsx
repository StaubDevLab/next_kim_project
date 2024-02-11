
import {ContactForm} from "@/app/_components/contact/ContactForm";
import {useMemo} from "react";
import dynamic from "next/dynamic";
import {Card} from "@/app/_components/ui/card";

export function Contact() {
    const Map = useMemo(() => dynamic(
        () => import('@/app/_components/contact/ContactMap'),
        {
            loading: () => <p className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-primary"/>,
            ssr: false
        }
    ), [])
    return (
        <Card className={"flex flex-col lg:flex-row gap-5 w-full p-10 shadow-lg  "}>
            <Map/>
            <ContactForm/>

        </Card>
    );
}