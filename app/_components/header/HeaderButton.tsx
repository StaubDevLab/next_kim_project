'use client'
import {Button} from "@/app/_components/ui/button";
import React from "react";
import {useRouter} from "next/navigation";

export default function HeaderButton({content}: { content :string }) {
    const router = useRouter()
    return (
        <>
            <Button onClick={() => router.push("/contact")}>{content}</Button>
        </>
    );
}