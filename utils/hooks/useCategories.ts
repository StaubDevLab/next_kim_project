
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Service} from ".prisma/client";

const getCategories = async ()  => {
    const {data: categories} = await axios.get(`/api/categories`)

    return categories;
}
export const useCategories = ()  => {
    return useQuery({
        queryKey: ['categories'],
        queryFn:  () => getCategories(),

    })
}