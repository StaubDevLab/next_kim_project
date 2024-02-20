"use client"
import {ColumnDef} from "@tanstack/table-core";
import {Category} from ".prisma/client";
import {  ArrowUpDown } from "lucide-react"

import { Button } from "@/app/_components/ui/button"

import {UpdateTrigger} from "@/app/_components/admin/UpdateTrigger";
import UpdateActive from "@/app/_components/admin/UpdateActive";
import DeleteCategory from "@/app/_components/admin/categories/DeleteCategory";
export const columns: ColumnDef<Category>[] = [
    {
        id:'title',
        accessorKey: 'title',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nom de la catégorie
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: info => info.getValue()
    },
    {
        id: 'delete',
        header: "Supprimer ",
        cell: ({ row }) => {

            const service = row.original


            return (
                <DeleteCategory id={row.original.id} />
            )
        },
    },

]