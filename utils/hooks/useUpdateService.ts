import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Service} from ".prisma/client";
import {queryClient} from '@/providers/query-provider'


const updateService = async (data : Service ): Promise<Service[]> => {
    console.log(data)

    const {data: services} = await axios.patch(`/api/services/${data.id}`, data)
    return services
}
export const useServices = () => {
    return useMutation({

        mutationFn:  ({data}: {data: Service}) => updateService(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['services'],
                exact: true,
            })
        }

    })
}