'use client'
import {useServiceBySlug} from "@/utils/hooks/useServiceBySlug";
import PageContainer from "../ui/page-container";
import Image from "next/image";
import {Badge} from "@/app/_components/ui/badge";
import {BadgeEuro, Timer, Users} from "lucide-react";
import * as React from "react";
import {notFound, useRouter} from "next/navigation";
import ServiceCardSkeleton from "@/app/_components/services/ServiceCardSkeleton";
import ServiceSkeleton from "@/app/_components/services/ServiceSkeleton";
export default function ServiceUniqueComponent({slug}: { slug: string }) {
    const router = useRouter()
    const {data: service, isFetching, error, isError} = useServiceBySlug(slug)

    if (error || isError) {
        notFound()
    }
    if (isFetching) {
        return (
            <PageContainer>
                <div className={"flex flex-col items-center gap-4"}>
                    <ServiceSkeleton/>
                </div>
            </PageContainer>
        )
    }
    return (
        <>
            <PageContainer>
                <div className={"flex flex-col items-center gap-4"}>
                    <h1 className={"text-2xl text-primary text-center font-bold "}>{service?.title}</h1>
                    <div className={"mb-4 flex flex-wrap sm:flex-row gap-3"}>
                        <Badge><Users className={"inline mr-1"}/>{service?.public}</Badge>
                        <Badge><BadgeEuro className={"inline mr-1"}/>{service?.price}€</Badge>
                        <Badge><Timer className={"inline mr-1"}/>{service?.duration}</Badge>
                    </div>
                    <Image width={400} height={400} className={"rounded-lg "} src={service?.image}
                           alt={"Image d'un cheval"}/>
                    <div>
                        <div className="flex flex-col mt-2">
                            <p className="text-muted-foreground quill-content"
                               dangerouslySetInnerHTML={{__html: service?.description || ""}}>
                            </p>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </>
    );
}