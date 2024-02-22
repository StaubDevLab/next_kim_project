import React from 'react';
import {Testimonial} from "@prisma/client";
import {Avatar, AvatarFallback} from "@/app/_components/ui/avatar";
import {format} from "@formkit/tempo";

type Props = {
    testimonial: Testimonial
}
export default function TestimonialComponent({testimonial}: Props) {
    function getInitials(str: string): string {

        const lowerCaseStr = str.toUpperCase();


        const words = lowerCaseStr.split(' ');


        const initials = words.map((word) => word[0]);


        return initials.join('');
    }

    return (
        <div className="p-6 rounded-lg shadow-lg border">
            <p>{testimonial.opinion}</p>
            <div className="flex items-center mt-4 space-x-4">
                <Avatar className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
                    <AvatarFallback>{getInitials(testimonial.name)}</AvatarFallback>
                </Avatar>

                <div>
                    <p className="text-lg font-semibold">{testimonial.name}</p>
                    <p className="text-sm dark:text-gray-400">{testimonial.subject} du {format(testimonial.date as Date, "short", 'fr-FR')} </p>
                </div>
            </div>
        </div>
    );
};