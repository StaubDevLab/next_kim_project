import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Service} from ".prisma/client";

const getServices = async (categoryId?: string) => {
    const {data} = await axios.get(`/api/services?category=${categoryId || ''}`, {
        params: {
            sort: {"order": "desc"},
        },
    })
    return data.sort((a: Service, b: Service) => a.order - b.order)

}
export const useServices = (categoryId?: string) => {
    return useQuery({
        queryKey: ['services'],
        queryFn: () => getServices(categoryId),
        enabled: true

    })
}

