import {Prisma} from "@/node_modules/.prisma/client";

export type Category = {
    id: number;
    title: string;
    slug: string;
    createdAt : string | Date;
}

export type Service = {
    id: number;
    title: string;
    description: string;
    // createdAt : string | Date;
    // slug : string;
    price: number;
    duration: string;
    public: string;
    // shortDescription: string;

}

export interface MyState{
    dialog: any;

    service: Service | null;
    open: boolean;
    edit:boolean;
    add:boolean;

}
// export type ServiceWithCategory = Prisma.ServiceGetPayload<{
//     include: {Category: true}
// }>