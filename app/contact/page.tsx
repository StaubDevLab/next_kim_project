

import SectionSeparator from "@/app/_components/ui/section-separator";

import {Contact} from "@/app/_components/contact/Contact";



export default function ContactPage() {

    return (
        <div className=" flex flex-col justify-center items-center py-10 px-4">

            <SectionSeparator title={"Contact"}/>
            <Contact/>

        </div>
    );
}