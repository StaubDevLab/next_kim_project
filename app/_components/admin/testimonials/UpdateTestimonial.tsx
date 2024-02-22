'use client'
import {Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle,} from "@/app/_components/ui/dialog"
import {Testimonial} from "@prisma/client";
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
import { format, parse } from "@formkit/tempo"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/_components/ui/form"
import {Textarea} from "@/app/_components/ui/textarea";
const formSchema = z.object({
    name: z.string().min(1,{message:"Le nom est un champs requis"}).max(50,{message:"Le nom est trop long 50 caractères max"}),
    date: z.coerce.date({
        required_error: "Sélectionnez une date",
        invalid_type_error: "Ce n'est pas une date",
    }),
    opinion : z.string().min(1,{message:"L'avis est un champs requis"}).max(500,{message:"L'avis est trop long 500 caractères max"}),
    subject : z.string().min(1,{message:"Le sujet est un champs requis"}).max(150,{message:"Le sujet est trop long 150 caractères max"}),

})

type TestimonialAndOpen = {
    testimonial:Testimonial | undefined,
    open:boolean,
    handleOpen: (open:boolean) => void
}
export default function UpdateTestimonial({testimonial, open, handleOpen}:TestimonialAndOpen) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            date: new Date(),
            opinion: "",
            subject: "",
        },
    })
    useEffect(() => {
        if (testimonial) {
            form.setValue("name", testimonial.name)
            form.setValue("date", testimonial.date)
            form.setValue("opinion", testimonial.opinion)
            form.setValue("subject", testimonial.subject)
        }else
        {
            form.reset()
        }
    }, [testimonial, form]);
    const {mutateAsync: addMutate, isPending: addPending} = useMutation({

        mutationFn: (data: Partial<Testimonial>) => axios.post(`/api/testimonials`, data),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['testimonials']})
            handleOpen(false)
        }
    })
    const {mutateAsync: updateMutate, isPending: updatePending} = useMutation({

        mutationFn: (data: Partial<Testimonial>) => axios.patch(`/api/testimonials/${testimonial?.id}`, data),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['testimonials']})
            handleOpen(false)
        }
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {

        try {



            const mutation = testimonial ? await updateMutate(values) : await addMutate(values)

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
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom du participant :</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nom du participant" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        /> <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date du soin/atelier :</FormLabel>
                                    <FormControl>
                                        <Input type={"date"} placeholder="Date du soin/atelier" {...field} value={format(field.value as Date, "YYYY-MM-DD", 'en')}/>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Sujet :</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Sujet " {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="opinion"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Avis :</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Avis laissé ... " {...field} />
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

