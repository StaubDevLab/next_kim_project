
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Service} from ".prisma/client";

const getServiceBySlug = async (slug: string)  => {
    const {data} = await axios.get(`/api/services/slug/${slug}`)

    return data;
}
export const useServiceBySlug = (slug: string)  => {
    return useQuery({
        queryKey: ['service', slug],
        queryFn:  () => getServiceBySlug(slug),
        enabled: true

    })
}

