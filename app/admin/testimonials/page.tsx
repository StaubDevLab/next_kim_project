'use client'
import React, {useState} from "react";

import {Testimonial} from "@prisma/client";
import {columns} from "@/app/admin/testimonials/columns";
import {DataTable} from "@/app/admin/testimonials/data-table";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {toast} from "@/app/_components/ui/use-toast";
import {Toaster} from "@/app/_components/ui/toaster";
import {Button} from "@/app/_components/ui/button";
import UpdateTestimonial from "@/app/_components/admin/testimonials/UpdateTestimonial";
import {useTestimonials} from "@/utils/hooks/useTestimonial";


export default function AdminPage() {

    const [open, setOpen] = useState(false);
    const [testimonial, setTestimonial] = useState(undefined as Testimonial | undefined);
    const handleOpen = (open: boolean) => {

        setOpen(open)
    }
    const handleTestimonialData = (testimonial: Testimonial) => {

        setTestimonial(testimonial)
    }
    const router = useRouter()

    const session = useSession({
        required: true, onUnauthenticated: () =>
            router.push("/api/auth/signin")
    })

    const {data: testimonials, isFetching, error} = useTestimonials();

    if (isFetching) {

        toast({
            description: (
                <div className={"flex justify-start gap-2 items-center"}>

                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 rounded-full animate-pulse dark:bg-white"></div>
                        <div className="w-3 h-3 rounded-full animate-pulse dark:bg-white"></div>
                        <div className="w-3 h-3 rounded-full animate-pulse dark:bg-white"></div>
                    </div>
                    <p className={"inline"}>Les témoignages sont en cours de chargement...</p>
                </div>
            ),

        })
    }


    return (

        <div className={"p-10 flex flex-col gap-2 items-center flex-grow"}>

            {session.status === "authenticated" && testimonials && (<>
                <h1 className={"text-4xl"}>Gestion des témoignages</h1>
                <Button onClick={() => {
                    setTestimonial(undefined)
                    setOpen(true)

                }}>Ajouter un témoignage</Button>
                <div className={"w-full px-4"}>
                    <DataTable columns={columns} data={testimonials as any}
                               handleTestimonialData={handleTestimonialData} handleOpen={handleOpen}/>
                </div>
            </>)
            }
            {session.status === "authenticated" && testimonials &&
                <UpdateTestimonial testimonial={testimonial} open={open} handleOpen={handleOpen}/>}

            <Toaster/>
        </div>


    )
}