'use client'
import React, {useState} from "react";

import {Category} from "@prisma/client";
import PageContainer from "@/app/_components/ui/page-container";
import {columns} from "@/app/admin/categories/columns";
import {DataTable} from "@/app/admin/categories/data-table";
import {useServices} from "@/utils/hooks/useServices";
import {useSession} from "next-auth/react";
import UpdateService from "@/app/_components/admin/UpdateService";
import {useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "@/app/_components/ui/use-toast";
import {Toaster} from "@/app/_components/ui/toaster";
import {MyState} from "@/types";
import {Button} from "@/app/_components/ui/button";
import {UpdateTrigger} from "@/app/_components/admin/UpdateTrigger";
import {useCategories} from "@/utils/hooks/useCategories";
import UpdateCategory from "@/app/_components/admin/categories/UpdateCategory";

export default function AdminPage() {

    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(undefined as Category | undefined);
    const handleOpen = (open : boolean) => {

        setOpen(open)
    }
    const handleCategoryData = (category : Category) => {

       setCategory(category)
    }
    const router = useRouter()

    const session = useSession({
        required: true, onUnauthenticated: () =>
            router.push("/api/auth/signin")
    })

    const {data: categories, isFetching, error} = useCategories();

    if (isFetching) {

        toast({
            description: (
                <div className={"flex justify-start gap-2 items-center"}>

                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 rounded-full animate-pulse dark:bg-white"></div>
                        <div className="w-3 h-3 rounded-full animate-pulse dark:bg-white"></div>
                        <div className="w-3 h-3 rounded-full animate-pulse dark:bg-white"></div>
                    </div>
                    <p className={"inline"}>Les catégories sont en cours de chargement...</p>
                </div>
            ),

        })
    }


    return (

            <div className={"p-10 flex flex-col gap-2 items-center flex-grow"}>

                {session.status === "authenticated" && categories && (<>
                    <h1 className={"text-4xl"}>Gestion des Catégories</h1>
                    <Button onClick={() => {
                        setOpen(true);

                    }}>Ajouter une categorie</Button>
                    <div className={"w-full px-4"}>
                        <DataTable columns={columns} data={categories as any} handleCategoryData={handleCategoryData} handleOpen={handleOpen}/>
                    </div>
                </>)
                }
                {session.status === "authenticated" && categories && <UpdateCategory category={category} open={open} handleOpen={handleOpen}/>}

            <Toaster/>
            </div>


    )
}