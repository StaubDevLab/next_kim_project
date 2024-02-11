

import SectionSeparator from "@/app/_components/ui/section-separator";
import {About} from "@/app/_components/about/About";



export default function AboutPage() {

    return (
        <div className=" flex flex-col justify-center items-center py-10 px-4">

            <SectionSeparator title={"À propos"}/>
            <About/>

        </div>
    );
}