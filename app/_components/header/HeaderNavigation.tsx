"use client"

import * as React from "react"
import Link from "next/link"

import {cn} from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/app/_components/ui/navigation-menu"
import {useSession} from "next-auth/react";

import {usePathname} from "next/navigation";
import {useCategories} from "@/utils/hooks/useCategories";
import {Category} from "@prisma/client";


export default function HeaderNavigation() {
    const pathname = usePathname();
    const session = useSession()
    const {data: categories, isFetching} = useCategories()

    return (
        <NavigationMenu className={cn("hidden md:flex ")}>
            <NavigationMenuList className={"flex flex-row justify-between"}>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Accueil

                        </NavigationMenuLink>

                    </Link>
                    {pathname === "/" && <div
                        className="h-1 bg-primary scale-x-100 "></div>}
                </NavigationMenuItem>
                <NavigationMenuItem>

                    <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                        Services
                    </NavigationMenuTrigger>
                    {pathname === "/services" && <div
                        className="h-1 bg-primary scale-x-100 "></div>}
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {categories?.map((category : Category) => (
                                <ListItem key={category.id} href={`/services?category=${category.slug}`} title={category.title}/>
                            ))}
                            <ListItem key={"all"} href={"/services"} title={"Tous mes services"}/>
                        </ul>

                    </NavigationMenuContent>


                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            À propos
                        </NavigationMenuLink>
                    </Link>
                    {pathname === "/about" && <div
                        className="h-1 bg-primary scale-x-100 "></div>}
                </NavigationMenuItem>
                {session && session.status === "authenticated" && (
                    <NavigationMenuItem>
                        <Link href="/admin" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Admin

                            </NavigationMenuLink>


                        </Link>
                        {pathname === "/admin" && <div
                            className="h-1 bg-primary scale-x-100 "></div>}
                    </NavigationMenuItem>
                )}

            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        " block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
