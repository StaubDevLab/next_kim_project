'use client'
import {Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle,} from "@/app/_components/ui/dialog"
import {Category} from "@prisma/client";
import {Button} from "@/app/_components/ui/button";

import { useForm} from "react-hook-form";
import {Input} from "@/app/_components/ui/input";
import { useEffect} from "react";

import "react-quill/dist/quill.snow.css";

import {toast} from "@/app/_components/ui/use-toast";
import {BadgeCheck, BadgeX} from "lucide-react";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {queryClient} from "@/providers/query-provider";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/_components/ui/form"
const formSchema = z.object({
    title: z.string().min(1,{message:"Le titre est un champs requis"}).max(50,{message:"Le titre est trop long 50 caractères max"}),
})
type CategoryAndOpen = {
    category:Category | undefined,
    open:boolean,
    handleOpen: (open:boolean) => void
}
export default function UpdateCategory({category, open, handleOpen}:CategoryAndOpen) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    })
    useEffect(() => {
        if (category) {
            form.setValue("title", category.title)
        }
    }, [category, form]);
    const {mutateAsync: addMutate, isPending: addPending} = useMutation({

        mutationFn: (data: Partial<Category>) => axios.post(`/api/categories`, data),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['categories']})
            handleOpen(false)
        }
    })
    const {mutateAsync: updateMutate, isPending: updatePending} = useMutation({

        mutationFn: (data: Partial<Category>) => axios.patch(`/api/categories/${category?.id}`, data),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['categories']})
            handleOpen(false)
        }
    })
   async function onSubmit(values: z.infer<typeof formSchema>) {
        try {




            const mutation = category ? await updateMutate(values) : await addMutate(values)

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
        <Dialog open={open} onOpenChange={(open) => handleOpen(open)} >

            <DialogContent className="lg:max-w-screen-lg overflow-y-auto max-h-[80vh]">

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom de la catégorie :</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Titre de la catégorie" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Fermer
                            </Button>
                        </DialogClose>
                        <Button type="submit">Valider</Button>
                    </DialogFooter>
                    </form>
                </Form>
            </DialogContent>

        </Dialog>
    )


}

