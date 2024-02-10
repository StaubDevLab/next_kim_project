import {Services} from "@/app/_components/services/Services";
import SectionSeparator from "@/app/_components/ui/section-separator";
import {Suspense} from "react";

function SearchBarFallback() {
    return <p className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-primary"/>
}

export default function ServicesPage() {

    return (
        <div className=" flex flex-col justify-center items-center py-3 px-4">

            <SectionSeparator title={"Mes services"}/>
            <Suspense fallback={<SearchBarFallback />}>
                <Services/>
            </Suspense>

        </div>
    );
}