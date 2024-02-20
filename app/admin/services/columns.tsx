"use client"
import {ColumnDef} from "@tanstack/table-core";
import {Service} from ".prisma/client";
import {  ArrowUpDown } from "lucide-react"

import { Button } from "@/app/_components/ui/button"

import {UpdateTrigger} from "@/app/_components/admin/UpdateTrigger";
import UpdateActive from "@/app/_components/admin/UpdateActive";
export const columns: ColumnDef<Service>[] = [
    {
        accessorKey: 'title',
        header: 'Titre',
        cell: info => info.getValue()
    },
    {
        accessorKey: 'price',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Prix
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: info => info.getValue()
    },

    {
        accessorKey: 'public',
        header: ({ column }) => {
    return (
        <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            Public
            <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
    )
},
        cell: info => info.getValue()
    },
    {
        accessorKey: 'duration',
        header: 'Durée',
        cell: info => info.getValue()
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {

            const service = row.original


            return (
                <UpdateTrigger service={service}/>


            )
        },
    },
    {
        id: "active",
        header: "Visible ?",
        cell: ({ row }) => {

            const service = row.original


            return (
                <UpdateActive id={service.id} active={service.active}/>
            )
        },
    },
]