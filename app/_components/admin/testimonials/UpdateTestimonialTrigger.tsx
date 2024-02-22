'use client'
import {useDispatch} from "react-redux";
import {Button} from "@/app/_components/ui/button";
import {open } from "@/stores/dialog-slice";

import { Testimonial} from "@prisma/client";
import React from "react";

export function UpdateTestimonialTrigger({children,testimonial, handleOpen, handleTestimonialData} : {children : React.ReactNode,testimonial: Testimonial|undefined, handleOpen: any, handleTestimonialData: any}) {


    return (
        <div className="cursor-pointer" onClick={() => {
            handleOpen(true)
            handleTestimonialData(testimonial)
        }}>
            {children}
        </div>
    );
}