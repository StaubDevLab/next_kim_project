import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "@/app/_components/ui/button";
import axios from "axios";
import {useMutation} from "@tanstack/react-query";
import {queryClient} from "@/providers/query-provider";
import {toast} from "@/app/_components/ui/use-toast";
import {BadgeCheck, BadgeX} from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog"
export default function DeleteCategory  ({id} : { id:string })  {
    const {mutateAsync: deleteCategory} = useMutation({

        mutationFn: () => axios.delete(`/api/categories/${id}`),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['categories']})
        }
    })
    const deleteCategoryTrigger = async () => {
        try {




            const mutation = await deleteCategory()

            toast({
                className: "bg-green-700 text-white z-20",
                description: (
                    <h2>
                        <BadgeCheck className={'inline mr-1'}/> {mutation?.data?.message}
                    </h2>

                ),
            })
        } catch (e: any) {
            const messages = await e.response.data.message
            toast({

                variant: 'destructive',
                description: (<h2>
                        <BadgeX className={'inline mr-1'}/> {messages}
                    </h2>

                ),
            })
        }

    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Supprimer</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Veux-tu vraiment supprimer cette catégorie?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Cette action ne peut pas être annulée. Cela supprimera définitivement la catégorie.
                        Les services ayant cette catégorie ne seront pas supprimés mais n&apos;appartiendront à plus aucune catégorie.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => deleteCategoryTrigger()}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};