"use client"
import {ColumnDef} from "@tanstack/table-core";
import {Testimonial} from ".prisma/client";
import {  ArrowUpDown } from "lucide-react"
import { format } from "@formkit/tempo"
import { Button } from "@/app/_components/ui/button"

import {UpdateTrigger} from "@/app/_components/admin/UpdateTrigger";
import UpdateActive from "@/app/_components/admin/UpdateActive";
import DeleteCategory from "@/app/_components/admin/categories/DeleteCategory";
import DeleteTestimonial from "@/app/_components/admin/testimonials/DeleteTestimonial";
export const columns: ColumnDef<Testimonial>[] = [
    {
        id:'name',
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nom du participant
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: info => info.getValue()
    },{
        id:'date',
        accessorKey: 'date',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Date de l'atelier
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: info => format(info.getValue() as Date, "short", 'fr-FR')
    },{
        id:'opinion',
        accessorKey: 'opinion',
        header: 'Avis',
        cell: info => {
            const text = info.getValue() as string
           return  text.slice(0, 100) + '...'
        }
    },{
        id:'subject',
        accessorKey: 'subject',
        header: 'Sujet',
        cell: info => info.getValue()
    },
    {
        id: 'delete',
        header: "Supprimer ",
        cell: ({ row }) => {




            return (
                <DeleteTestimonial id={row.original.id} />
            )
        },
    },

]