"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable
} from "@tanstack/react-table"

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/app/_components/ui/table"
import React from "react";
import {UpdateCategoryTrigger} from "@/app/_components/admin/categories/UpdateCategoryTrigger";
import {Category} from "@prisma/client";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    handleOpen: any,
    handleCategoryData: any
}

export function DataTable<TData, TValue>({
                                             columns,
                                             data,
                                             handleOpen,
                                             handleCategoryData
                                         }: DataTableProps<TData, TValue[]>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [rowSelection, setRowSelection] = React.useState({})
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onRowSelectionChange: setRowSelection,
        enableRowSelection: true,

        state: {
            sorting,
            rowSelection
        },
    })

    return (
        <div className="rounded-md border">
            <Table className={"w-full"}>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}

                        </TableRow>

                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => {
                                   if(cell.column.columnDef.id ==='delete'){
                                       return (
                                           <TableCell key={cell.id}>



                                                   {flexRender(cell.column.columnDef.cell, cell.getContext())}

                                           </TableCell>
                                       )
                                   }else{
                                       return (


                                           <TableCell key={cell.id}>
                                               <UpdateCategoryTrigger
                                                   key={cell.id}
                                                   category={cell.row.original as Category}
                                                   handleOpen={handleOpen}
                                                   handleCategoryData={handleCategoryData}
                                               >
                                                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                               </UpdateCategoryTrigger>
                                           </TableCell>


                                       )
                                   }

                                })}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                Pas de catégorie.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

        </div>
    )
}
