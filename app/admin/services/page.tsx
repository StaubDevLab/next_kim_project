'use client'
import React, {useState} from "react";

import {open} from "@/stores/dialog-slice";
import PageContainer from "@/app/_components/ui/page-container";
import {columns} from "@/app/admin/services/columns";
import {DataTable} from "@/app/admin/services/data-table";
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

export default function AdminPage() {

    const dispatch = useDispatch();

    const router = useRouter()

    const session = useSession({
        required: true, onUnauthenticated: () =>
            router.push("/api/auth/signin")
    })

    const {data: services, isFetching, error} = useServices();

    if (isFetching) {

        toast({
            description: (
                <div className={"flex justify-start gap-2 items-center"}>

                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 rounded-full animate-pulse dark:bg-white"></div>
                        <div className="w-3 h-3 rounded-full animate-pulse dark:bg-white"></div>
                        <div className="w-3 h-3 rounded-full animate-pulse dark:bg-white"></div>
                    </div>
                    <p className={"inline"}>Les services sont en cours de chargement...</p>
                </div>
            ),

        })
    }


    return (
        <PageContainer>
            <div className={"p-10 flex flex-col gap-2 items-center"}>

                {session.status === "authenticated" && services && (<>
                    <h1 className={"text-4xl"}>Gestion des Services</h1>
                    <Button onClick={() => dispatch(open(undefined))}>Ajouter un service</Button>
                    <div className={"w-full px-4"}>
                        <DataTable columns={columns} data={services as any}/>
                    </div>
                </>)
                }
                {session.status === "authenticated" && services && <UpdateService/>}

            </div>
            <Toaster/>
        </PageContainer>

    )
}