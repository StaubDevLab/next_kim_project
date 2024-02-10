import * as React from "react"

import {Button} from "@/app/_components/ui/button"
import {
    Card,
    CardContent,

    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/_components/ui/card"
import Image from "next/image";
import {Service} from "@/prisma/client";
import {Badge} from "@/app/_components/ui/badge";
import {Users, BadgeEuro, Timer} from "lucide-react";



export default function ServiceCard({service}: { service: Service }) {

    return (
        <Card className="max-w-[30rem] flex flex-col justify-start ">
            <CardHeader className={"p-0 pb-4 "}>
              
                    <Image width={500} height={500} src={service.image || ""} alt={"Image d'un cheval"}
                           className={"h-80 rounded-t-lg"}/>


            </CardHeader>
            <div className={"flex flex-col justify-between flex-1"}>
                <CardContent className={"flex flex-col"}>
                    <div className={"mb-4 flex flex-wrap sm:flex-row gap-3"}>
                        <Badge><Users className={"inline mr-1"}/>{service.public}</Badge>
                        <Badge><BadgeEuro className={"inline mr-1"}/>{service.price}€</Badge>
                        <Badge><Timer className={"inline mr-1"}/>{service.duration}</Badge>
                    </div>
                    <CardTitle className={"text-primary text-1xl sm:text-2xl "}>{service.title}</CardTitle>

                    <div className="flex flex-col mt-2">
                        <p className="text-muted-foreground quill-content"
                           dangerouslySetInnerHTML={{__html: service.shortDescription || ""}}>

                        </p>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">

                    <Button>En savoir plus</Button>
                </CardFooter>
            </div>
        </Card>
    )
}
