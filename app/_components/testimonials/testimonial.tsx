import React from 'react';
import PropTypes from 'prop-types';
import {Testimonial} from "@prisma/client";
import {Avatar, AvatarFallback} from "@/app/_components/ui/avatar";
type Props = {
   testimonial:Testimonial
}
export default function TestimonialComponent  ({testimonial} : Props)  {
    return (
        <div className="p-6 rounded-lg shadow-lg border">
            <p>An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota
                aliquip
                democritum pro in, nec democritum intellegam ne. Propriae volutpat
                dissentiet ea
                sit, nec at lorem inani tritani, an ius populo perfecto
                vituperatoribus. Eu cum
                case modus salutandi, ut eum vocent sensibus reprehendunt.</p>
            <div className="flex items-center mt-4 space-x-4">
                <Avatar className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div>
                    <p className="text-lg font-semibold">Leroy Jenkins</p>
                    <p className="text-sm dark:text-gray-400">Atelier méditation du 12/01/2024</p>
                </div>
            </div>
        </div>
    );
};