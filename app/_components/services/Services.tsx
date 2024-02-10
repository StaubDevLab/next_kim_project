'use client'
import PageContainer from "@/components/page-container";
import ServiceCard from "@/components/services/ServiceCard";
import {useServices} from "@/utils/hooks/useServices";
import { Skeleton } from "@/components/ui/skeleton"
import {Service} from ".prisma/client";
import SectionSeparator from "@/components/ui/section-separator";
import ServiceCardSkeleton from "@/components/services/ServiceCardSkeleton";
import {useSearchParams} from "next/navigation";

export function Services() {
    const searchParams = useSearchParams()

    const category = searchParams.get('category')

    const {data: services, isFetching, error} = useServices(category||'');

    if (isFetching) {
        return (
            <PageContainer>
                <div className={"flex flex-col"}>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto">
                        <ServiceCardSkeleton/>
                        <ServiceCardSkeleton/>
                    </div>
                </div>
            </PageContainer>
        )
    }

    return (
        <PageContainer>
            <div className={"flex flex-col"}>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto">
                    {services && services?.map((service : Service) => service.active && <ServiceCard service={service} key={service.id}/>)}

                </div>
            </div>
        </PageContainer>
    );
}