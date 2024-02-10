

import SectionSeparator from "@/components/ui/section-separator";
import {About} from "@/components/about/About";



export default function AboutPage() {

    return (
        <div className=" flex flex-col justify-center items-center py-10 px-4">

            <SectionSeparator title={"À propos"}/>
            <About/>

        </div>
    );
}