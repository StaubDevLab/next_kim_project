import Link from "next/link";
import Image from "next/image";

export default function Footer() {

    return (
        <footer className="flex flex-col p-10 bg-primary text-white justify-center items-center gap-3">
            <nav className="flex flex-col md:flex-row gap-4 text-center">
                <Link href={"/"} className="link link-hover">Accueil</Link>
                <Link href={"/services"} className="link link-hover">Services</Link>
                <Link href={"/about"} className="link link-hover">À propos</Link>
                <Link href={"/contact"} className="link link-hover">Prise de rendez-vous</Link>

            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">

                    <Link href={"https://www.instagram.com/kim.remy.energie/"}>
                        <Image src={"/assets/instagram-icon.png"} alt={"Logo d'instagram"} width={24} height={24} />
                    </Link>
                    <Link href={"https://www.facebook.com/kimremyenergie"} >
                        <Image src={"/assets/facebook-icon.png"} alt={"Logo de facebook"} width={24} height={24} />

                    </Link>
                </div>
            </nav>
            <aside className={"text-center"}>
                <p>Copyright © 2024 - All right reserved by StaubSdév</p>
            </aside>
        </footer>
    )
}