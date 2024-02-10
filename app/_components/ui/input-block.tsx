import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {FieldErrors, FieldValue} from "react-hook-form";

export default function InputBlock({register,name, label, required, placeholder, type,autoComplete, errors}:{register: any, name: string, label: string, required: boolean, placeholder: string, type: string,autoComplete:string|undefined, errors: any}) {
    const pattern = name === "tel" ? /^(?:(?:\+|00)33[\s.-]?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{8})$/ : undefined
    return (
        <div className={"flex flex-col gap-3"}>
            <Label htmlFor={name}>
                {label} {required && <span className={"text-red-500"}>*</span>} :
            </Label>

            <Input type={type} placeholder={placeholder} autoComplete={autoComplete} {...register(name,
            {required:{value:required,message:"Champs requis"},
            pattern:{value: pattern, message: "Téléphone  invalide"}})}  />
            {errors && errors[name] && <p className={'text-red-600 font-light text-sm'}>{errors[name].message}</p>}
        </div>
    )

}