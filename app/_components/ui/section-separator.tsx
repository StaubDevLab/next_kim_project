import React from 'react';
import {Separator} from "@/app/_components/ui/separator";

function SectionSeparator({title}: { title: string }) {
    return (
        <div className={"mb-6 w-full mx-auto text-center"}>
            <Separator className={"my-5 bg-primary w-1/3 h-[3px] mx-auto"}/>
            <h1 className={"text-4xl mx-auto text-primary mb-4 font-bold"}>{title}</h1>

        </div>
    );
}

export default SectionSeparator;