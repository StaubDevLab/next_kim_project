import {Services} from "@/app/_components/services/Services";
import SectionSeparator from "@/app/_components/ui/section-separator";



export default function ServicesPage() {

    return (
        <div className=" flex flex-col justify-center items-center py-3 px-4">

            <SectionSeparator title={"Mes services"}/>
            <Services/>

        </div>
    );
}