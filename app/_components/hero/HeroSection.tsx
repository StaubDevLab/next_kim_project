import {Button} from "@/app/_components/ui/button";
import Image from "next/image";
import {Badge} from "@/app/_components/ui/badge";
import {Phone, AtSign, MapPin} from "lucide-react";

export default function HeroSection() {
    return (
        <div className={"px-4 flex flex-col lg:flex-row items-center justify-center"}>

            <div className="   flex flex-col flex-grow items-center">
                <div className=" text-justify flex flex-col">
                    <div className={"flex flex-col gap-4 py-4 items-center"}>
                        <div className="flex flex-col sm:flex-row items-center gap-4 py-4">
                            <div>
                                <Badge className={"text-md"}><Phone size={20}
                                                                    className={"inline mr-1"}/>{process.env.NEXT_PUBLIC_PHONE ||"06.86.42.79.49" }</Badge>
                            </div>
                            <div>
                                <Badge className={"text-md"}><AtSign size={20}
                                                                     className={"inline mr-1"}/>
                                    {process.env.NEXT_PUBLIC_EMAIL || "contact@kimremy.com"}</Badge>
                            </div>
                        </div>

                        {/*<div>*/}
                        {/*    <Badge className={"text-md"}><MapPin size={20}*/}
                        {/*                                         className={"inline mr-1"}/>*/}
                        {/*        Centre "Hollistic",*/}
                        {/*        1bis avenue de la Bastille*/}
                        {/*        19100 Brive-La-Gaillarde</Badge>*/}
                        {/*</div>*/}

                    </div>
                    <div className="flex flex-col gap-3">
                    <h1 className="text-3xl sm:text-5xl font-bold text-center">Je m&apos;appelle <span
                            className={"text-primary"}>Kim RÉMY.</span>
                        </h1>
                        <h1 className={"text-3xl sm:text-5xl font-bold text-center "}>
                            Je suis Énergéticienne.
                        </h1>
                        <p className="py-6 text-lg">Je propose plusieurs services ayant pour objectifs la libération de
                            tout blocage entravant la circulation optimale de votre énergie vitale. Je vous propose de
                            mettre en lumière vos ressources intérieures, en vous aidant à libérer votre plein potentiel
                            dans tous les aspects de votre vie.</p>
                        <Button size={"lg"}
                                className="self-center ">En
                            savoir plus</Button>
                    </div>
                </div>
            </div>
            <div className={"px-2 lg:w-full flex-grow-2"}>
                <Image width={500} height={500} src={"/hero-photo.png"} className={"lg:min-w-[500px] transition-transform duration-500 ease-in-out hover:scale-110"}
                       alt={"Dessin vectoriel représentant une forêt d'automne"}/>
            </div>
        </div>
    );
}