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

    return (
        <>
            {session && status === "authenticated" && session?.user?.image && <DropdownMenu >
                <DropdownMenuTrigger asChild className={"cursor-pointer"}>
                    <Avatar>
                        <AvatarImage src={session?.user?.image} alt="@shadcn" />
                        <AvatarFallback>{`${session?.user?.name?.[0]}  ${session?.user?.name?.[1]}`}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Admin</DropdownMenuLabel>
                    <DropdownMenuItem >< Link href={"/admin"}>Services</Link></DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className={"cursor-pointer"} onClick={() => signOut()}>Se déconnecter</DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
                }
        </>
    )

}