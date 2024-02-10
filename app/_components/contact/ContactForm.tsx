'use client'
import {Form, useForm, Controller} from "react-hook-form";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import InputBlock from "@/components/ui/input-block";
import {Resend} from 'resend';
import axios from "axios";
import {toast} from "@/components/ui/use-toast";
import {BadgeCheck, BadgeX} from "lucide-react";
import {Toaster} from "@/components/ui/toaster";

export function ContactForm() {
    const {control, register, formState: {errors}, reset} = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: '',
            tel: '',
            subject: ''
        }
    });

    const [lengthTextarea, setLengthTextarea] = useState(0)
    const onSubmit = async ({data}: { data: any }) => {


        try {

            const response = await axios.post('/api/send', data);
            toast({
                className: "bg-green-700 text-white z-20",
                description: (
                    <h2>
                        <BadgeCheck className={'inline mr-1'}/> Message bien envoyé !
                    </h2>

                ),
            })
            reset()
        } catch (e: any) {
            toast({

                variant: 'destructive',
                description: (<h2>
                        <BadgeX className={'inline mr-1'}/> Une erreur est survenue !
                    </h2>

                ),
            })
        }

    }
    return (
        <div className={"flex-1 w-full"}>
            <Form control={control} className={"flex flex-col gap-6"} onSubmit={(data) => onSubmit({data: data.data})}>
                <InputBlock register={register}
                            name={"name"}
                            label={"Nom Prénom"}
                            required={true}
                            placeholder={"NOM et Prénom"}
                            type={"text"}
                            autoComplete={"name"}
                            errors={errors}/>
                <InputBlock register={register}
                            name={"email"}
                            label={"Email"}
                            required={true}
                            placeholder={"E-mail - exemple@email.com"}
                            type={"email"}
                            autoComplete={"email"}
                            errors={errors}/>
                <InputBlock register={register}
                            name={"tel"}
                            label={"Téléphone"}
                            required={true}
                            placeholder={"Téléphone - 0600000000"}
                            type={"text"}
                            autoComplete={"tel"}
                            errors={errors}/>
                <InputBlock register={register}
                            name={"subject"}
                            label={"Objet"}
                            required={true}
                            placeholder={"Objet de votre demande"}
                            type={"text"}
                            autoComplete={undefined}
                            errors={errors}/>


                <div className={"flex flex-col gap-3"}>
                    <Label>
                        Message <span className={"text-red-500"}>*</span>:
                    </Label>
                    <Textarea placeholder="Votre message (350 caractères)" {...register("message" ,{required: "Champs requis"})} maxLength={350}
                              onKeyUp={(e) => setLengthTextarea(e.currentTarget.value.length)}/>
                    <span className={"text-gray-400 text-sm"}>{`${350 - lengthTextarea} caractères restantes`}</span>
                    {errors?.message && <p className={'text-red-600 font-light text-sm'}>{errors.message.message}</p>}
                </div>
                <div className={"flex self-center"}>
                    <Button type={"submit"}>Envoyer</Button>
                </div>

            </Form>
            <Toaster/>
        </div>
    );
}