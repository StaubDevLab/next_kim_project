'use client'
import {signOut, useSession} from "next-auth/react";
import {Avatar, AvatarFallback, AvatarImage} from "@/app/_components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu"
import Link from "next/link";

export default function HeaderAvatar() {
    const {data: session, status} = useSession()
    const name = `${session?.user?.name?.split(" ")[0][0]}${session?.user?.name?.split(" ")[1][0]}`
    return (
        <>
            {session && status === "authenticated" && session?.user?.image && <DropdownMenu >
                <DropdownMenuTrigger asChild className={"cursor-pointer"}>
                    <Avatar >
                        <AvatarImage src={session?.user?.image} alt="Photo google" />
                        <AvatarFallback className={"bg-primary text-white"}>{name}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Admin</DropdownMenuLabel>
                    <DropdownMenuItem >< Link href={"/admin/services"}>Services</Link></DropdownMenuItem>
                    <DropdownMenuItem >< Link href={"/admin/categories"}>Catégories</Link></DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className={"cursor-pointer"} onClick={() => signOut()}>Se déconnecter</DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
                }
        </>
    )

}