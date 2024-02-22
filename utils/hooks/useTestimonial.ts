import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Testimonial} from ".prisma/client";

const getTestimonials = async () => {
    const {data} = await axios.get(`/api/testimonials`, )
    return data

}
export const useTestimonials = () => {
    return useQuery({
        queryKey: ['testimonials'],
        queryFn: () => getTestimonials(),
        enabled: true

    })
}

