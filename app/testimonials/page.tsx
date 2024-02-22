'use client'
import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselApi,
    CarouselPrevious,
    CarouselNext
} from "@/app/_components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import {Separator} from "@/app/_components/ui/separator";
import TestimonialComponent  from "@/app/_components/testimonials/testimonial";
import {useTestimonials} from "@/utils/hooks/useTestimonial";
import {Testimonial} from "@prisma/client";
import { Dot } from 'lucide-react';
type Props = {
    params: {}
}
export default function Page({params}: Props) {
    const {data: testimonials, isFetching} = useTestimonials()
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const pages = []
    for(let i = 1; i < count + 1 ; i++) {
        pages.push(<Dot  key={i} className={`w-16 h-16 ${i === current ? "text-primary" : "text-gray-400"}`} data-value={i} />)
    }
 
    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length + 1)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
        api.on("resize", () => {
            setCount(api.scrollSnapList().length)

        })
    }, [api])

    return (
        <section className="">

            <div className="container px-6  mx-auto">
                <div className="grid grid-cols-1 grid-rows-1 items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl font-bold text-primary">Ils témoignent ...</h2>

                    </div>
                    <div className="p-6  xl:col-span-3">
                        {isFetching &&
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-3 h-3 rounded-full animate-pulse bg-primary"></div>
                                <div className="w-3 h-3 rounded-full animate-pulse bg-primary"></div>
                                <div className="w-3 h-3 rounded-full animate-pulse bg-primary"></div>
                            </div>
                        }
                        {testimonials && testimonials?.length > 0 ?
                            <>
                                <Carousel
                                    setApi={setApi}
                                    opts={{
                                        align: "start",
                                        loop: true,
                                    }}
                                    plugins={[Autoplay({
                                        delay: 20000,
                                        stopOnInteraction: false,
                                        stopOnMouseEnter: true,
                                    }),]}>
                                    <CarouselContent className={"-ml-1"}>
                                        {testimonials?.map((testimonial: Testimonial) => {
                                            return (
                                                <CarouselItem key={testimonial.id} className={"pl-1 md:basis-1/2 "}>
                                                    <TestimonialComponent key={testimonial.id}
                                                                          testimonial={testimonial}/>
                                                </CarouselItem>

                                            );
                                        })}

                                    </CarouselContent>
                                    <CarouselPrevious className={"bg-primary"}/>
                                    <CarouselNext className={"bg-primary"}/>
                                </Carousel>
                                <div className="py-2 w-full flex justify-center items-center">
                                    {pages}
                                </div>
                            </> : !isFetching && <div className="text-center text-3xl">Aucun témoignages encore ...</div>
                        }


                </div>
                </div>
            </div>
        </section>
    );
};