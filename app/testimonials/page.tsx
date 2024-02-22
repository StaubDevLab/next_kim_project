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
    const {data: testimonials} = useTestimonials()
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
            <Separator/>
            <div className="container px-6  mx-auto">
                <div className="grid grid-cols-1 grid-rows-1 items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl font-bold text-primary">Ils témoignent ...</h2>

                    </div>
                    <div className="p-6  xl:col-span-3">
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
                                            <TestimonialComponent key={testimonial.id} testimonial={testimonial}/>
                                        </CarouselItem>

                                    );
                                })}
                                {/*<CarouselItem className={"block md:hidden"}>*/}

                                {/*</CarouselItem>*/}
                                {/*{testimonials &&*/}
                                {/*<CarouselItem className={"hidden md:block"}>*/}
                                {/*    <div className="grid gap-4 md:grid-cols-2">*/}

                                {/*         <div className="grid content-center gap-4">*/}
                                {/*            {testimonials?.map((testimonial: Testimonial) => {*/}
                                {/*                return (*/}
                                {/*                    <TestimonialComponent key={testimonial.id} testimonial={testimonial}/>*/}
                                {/*                );*/}
                                {/*            })}*/}

                                {/*        </div>*/}

                                {/*        /!*<div className="grid content-center gap-4">*!/*/}
                                {/*        /!*    <div className="p-6 rounded shadow-md dark:bg-gray-900">*!/*/}
                                {/*        /!*        <p>Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea*!/*/}
                                {/*        /!*            id justo*!/*/}
                                {/*        /!*            errem elaboraret. Agam mollis scripserit ea his, ut nec postea*!/*/}
                                {/*        /!*            verear persecuti.*!/*/}
                                {/*        /!*            Ea noster senserit eam, ferri omittantur ei nec. Id mel solet libris*!/*/}
                                {/*        /!*            efficiantur, commune explicari et eos. Case movet ad est, sed tota*!/*/}
                                {/*        /!*            vocent*!/*/}
                                {/*        /!*            appetere ea.</p>*!/*/}
                                {/*        /!*        <div className="flex items-center mt-4 space-x-4">*!/*/}
                                {/*        /!*            <img src="https://source.unsplash.com/50x50/?portrait?3" alt=""*!/*/}
                                {/*        /!*                 className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"/>*!/*/}
                                {/*        /!*            <div>*!/*/}
                                {/*        /!*                <p className="text-lg font-semibold">Leroy Jenkins</p>*!/*/}
                                {/*        /!*                <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>*!/*/}
                                {/*        /!*            </div>*!/*/}
                                {/*        /!*        </div>*!/*/}
                                {/*        /!*    </div>*!/*/}
                                {/*        /!*    <div className="p-6 rounded shadow-md dark:bg-gray-900">*!/*/}
                                {/*        /!*        <p>Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo*!/*/}
                                {/*        /!*            denique*!/*/}
                                {/*        /!*            ocurreret vix, eu cum pertinax mandamus vituperatoribus. Solum nihil*!/*/}
                                {/*        /!*            luptatum*!/*/}
                                {/*        /!*            per ex, ei amet viderer eos. Ea illum labitur mnesarchum pro. Eius*!/*/}
                                {/*        /!*            meis*!/*/}
                                {/*        /!*            salutandi ei nam, alterum expetenda et nec. Expetenda intellegat at*!/*/}
                                {/*        /!*            eum, per*!/*/}
                                {/*        /!*            mazim sanctus honestatis ad. Ei noluisse invenire vix. Te ancillae*!/*/}
                                {/*        /!*            patrioque*!/*/}
                                {/*        /!*            qui, probo bonorum vivendum ex vim.</p>*!/*/}
                                {/*        /!*        <div className="flex items-center mt-4 space-x-4">*!/*/}
                                {/*        /!*            <img src="https://source.unsplash.com/50x50/?portrait?4" alt=""*!/*/}
                                {/*        /!*                 className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"/>*!/*/}
                                {/*        /!*            <div>*!/*/}
                                {/*        /!*                <p className="text-lg font-semibold">Leroy Jenkins</p>*!/*/}
                                {/*        /!*                <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>*!/*/}
                                {/*        /!*            </div>*!/*/}
                                {/*        /!*        </div>*!/*/}
                                {/*        /!*    </div>*!/*/}
                                {/*        /!*</div>*!/*/}
                                {/*    </div>*/}

                                {/*</CarouselItem>*/}
                                {/*}*/}
                                {/*<CarouselItem>*/}

                                {/*    <div className="grid gap-4 md:grid-cols-2">*/}

                                {/*        <div className="grid content-center gap-4">*/}
                                {/*            <div className="p-6 rounded shadow-md dark:bg-gray-900">*/}
                                {/*                <p>An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota*/}
                                {/*                    aliquip*/}
                                {/*                    democritum pro in, nec democritum intellegam ne. Propriae volutpat*/}
                                {/*                    dissentiet ea*/}
                                {/*                    sit, nec at lorem inani tritani, an ius populo perfecto*/}
                                {/*                    vituperatoribus. Eu cum*/}
                                {/*                    case modus salutandi, ut eum vocent sensibus reprehendunt.</p>*/}
                                {/*                <div className="flex items-center mt-4 space-x-4">*/}
                                {/*                    <img src="https://source.unsplash.com/50x50/?portrait?1" alt=""*/}
                                {/*                         className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"/>*/}
                                {/*                    <div>*/}
                                {/*                        <p className="text-lg font-semibold">Leroy Jenkins</p>*/}
                                {/*                        <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*            <div className="p-6 rounded shadow-md dark:bg-gray-900">*/}
                                {/*                <p>Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu*/}
                                {/*                    hinc*/}
                                {/*                    fabulas. Nam meliore minimum et, regione convenire cum id. Ex pro*/}
                                {/*                    eros mucius*/}
                                {/*                    consectetuer, pro magna nulla nonumy ne, eam putent iudicabit*/}
                                {/*                    consulatu cu.</p>*/}
                                {/*                <div className="flex items-center mt-4 space-x-4">*/}
                                {/*                    <img src="https://source.unsplash.com/50x50/?portrait?2" alt=""*/}
                                {/*                         className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"/>*/}
                                {/*                    <div>*/}
                                {/*                        <p className="text-lg font-semibold">Leroy Jenkins</p>*/}
                                {/*                        <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}

                                {/*        <div className="grid content-center gap-4">*/}
                                {/*            <div className="p-6 rounded shadow-md dark:bg-gray-900">*/}
                                {/*                <p>Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea*/}
                                {/*                    id justo*/}
                                {/*                    errem elaboraret. Agam mollis scripserit ea his, ut nec postea*/}
                                {/*                    verear persecuti.*/}
                                {/*                    Ea noster senserit eam, ferri omittantur ei nec. Id mel solet libris*/}
                                {/*                    efficiantur, commune explicari et eos. Case movet ad est, sed tota*/}
                                {/*                    vocent*/}
                                {/*                    appetere ea.</p>*/}
                                {/*                <div className="flex items-center mt-4 space-x-4">*/}
                                {/*                    <img src="https://source.unsplash.com/50x50/?portrait?3" alt=""*/}
                                {/*                         className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"/>*/}
                                {/*                    <div>*/}
                                {/*                        <p className="text-lg font-semibold">Leroy Jenkins</p>*/}
                                {/*                        <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*            <div className="p-6 rounded shadow-md dark:bg-gray-900">*/}
                                {/*                <p>Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo*/}
                                {/*                    denique*/}
                                {/*                    ocurreret vix, eu cum pertinax mandamus vituperatoribus. Solum nihil*/}
                                {/*                    luptatum*/}
                                {/*                    per ex, ei amet viderer eos. Ea illum labitur mnesarchum pro. Eius*/}
                                {/*                    meis*/}
                                {/*                    salutandi ei nam, alterum expetenda et nec. Expetenda intellegat at*/}
                                {/*                    eum, per*/}
                                {/*                    mazim sanctus honestatis ad. Ei noluisse invenire vix. Te ancillae*/}
                                {/*                    patrioque*/}
                                {/*                    qui, probo bonorum vivendum ex vim.</p>*/}
                                {/*                <div className="flex items-center mt-4 space-x-4">*/}
                                {/*                    <img src="https://source.unsplash.com/50x50/?portrait?4" alt=""*/}
                                {/*                         className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"/>*/}
                                {/*                    <div>*/}
                                {/*                        <p className="text-lg font-semibold">Leroy Jenkins</p>*/}
                                {/*                        <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</CarouselItem>*/}
                                {/*<CarouselItem>*/}
                                {/*    <div className="grid gap-4 md:grid-cols-2">*/}

                                {/*        <div className="grid content-center gap-4">*/}
                                {/*            <div className="p-6 rounded shadow-md dark:bg-gray-900">*/}
                                {/*                <p>An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota*/}
                                {/*                    aliquip*/}
                                {/*                    democritum pro in, nec democritum intellegam ne. Propriae volutpat*/}
                                {/*                    dissentiet ea*/}
                                {/*                    sit, nec at lorem inani tritani, an ius populo perfecto*/}
                                {/*                    vituperatoribus. Eu cum*/}
                                {/*                    case modus salutandi, ut eum vocent sensibus reprehendunt.</p>*/}
                                {/*                <div className="flex items-center mt-4 space-x-4">*/}
                                {/*                    <img src="https://source.unsplash.com/50x50/?portrait?1" alt=""*/}
                                {/*                         className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"/>*/}
                                {/*                    <div>*/}
                                {/*                        <p className="text-lg font-semibold">Leroy Jenkins</p>*/}
                                {/*                        <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*            <div className="p-6 rounded shadow-md dark:bg-gray-900">*/}
                                {/*                <p>Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu*/}
                                {/*                    hinc*/}
                                {/*                    fabulas. Nam meliore minimum et, regione convenire cum id. Ex pro*/}
                                {/*                    eros mucius*/}
                                {/*                    consectetuer, pro magna nulla nonumy ne, eam putent iudicabit*/}
                                {/*                    consulatu cu.</p>*/}
                                {/*                <div className="flex items-center mt-4 space-x-4">*/}
                                {/*                    <img src="https://source.unsplash.com/50x50/?portrait?2" alt=""*/}
                                {/*                         className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"/>*/}
                                {/*                    <div>*/}
                                {/*                        <p className="text-lg font-semibold">Leroy Jenkins</p>*/}
                                {/*                        <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}

                                {/*        <div className="grid content-center gap-4">*/}
                                {/*            <div className="p-6 rounded shadow-md dark:bg-gray-900">*/}
                                {/*                <p>Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea*/}
                                {/*                    id justo*/}
                                {/*                    errem elaboraret. Agam mollis scripserit ea his, ut nec postea*/}
                                {/*                    verear persecuti.*/}
                                {/*                    Ea noster senserit eam, ferri omittantur ei nec. Id mel solet libris*/}
                                {/*                    efficiantur, commune explicari et eos. Case movet ad est, sed tota*/}
                                {/*                    vocent*/}
                                {/*                    appetere ea.</p>*/}
                                {/*                <div className="flex items-center mt-4 space-x-4">*/}
                                {/*                    <img src="https://source.unsplash.com/50x50/?portrait?3" alt=""*/}
                                {/*                         className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"/>*/}
                                {/*                    <div>*/}
                                {/*                        <p className="text-lg font-semibold">Leroy Jenkins</p>*/}
                                {/*                        <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*            <div className="p-6 rounded shadow-md dark:bg-gray-900">*/}
                                {/*                <p>Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo*/}
                                {/*                    denique*/}
                                {/*                    ocurreret vix, eu cum pertinax mandamus vituperatoribus. Solum nihil*/}
                                {/*                    luptatum*/}
                                {/*                    per ex, ei amet viderer eos. Ea illum labitur mnesarchum pro. Eius*/}
                                {/*                    meis*/}
                                {/*                    salutandi ei nam, alterum expetenda et nec. Expetenda intellegat at*/}
                                {/*                    eum, per*/}
                                {/*                    mazim sanctus honestatis ad. Ei noluisse invenire vix. Te ancillae*/}
                                {/*                    patrioque*/}
                                {/*                    qui, probo bonorum vivendum ex vim.</p>*/}
                                {/*                <div className="flex items-center mt-4 space-x-4">*/}
                                {/*                    <img src="https://source.unsplash.com/50x50/?portrait?4" alt=""*/}
                                {/*                         className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"/>*/}
                                {/*                    <div>*/}
                                {/*                        <p className="text-lg font-semibold">Leroy Jenkins</p>*/}
                                {/*                        <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</CarouselItem>*/}
                            </CarouselContent>
                            <CarouselPrevious className={"bg-primary"}/>
                            <CarouselNext className={"bg-primary"}/>
                        </Carousel>
                        <div className="py-2 w-full flex justify-center items-center">
                            {pages}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};