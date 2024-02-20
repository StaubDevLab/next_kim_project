'use client'
import {useDispatch} from "react-redux";
import {Button} from "@/app/_components/ui/button";
import {open } from "@/stores/dialog-slice";

import {Category} from "@prisma/client";
import React from "react";

export function UpdateCategoryTrigger({children,category, handleOpen, handleCategoryData} : {children : React.ReactNode,category: Category|undefined, handleOpen: any, handleCategoryData: any}) {
    const dispatch = useDispatch();

    return (
        <div className="cursor-pointer" onClick={() => {
            handleOpen(true)
            handleCategoryData(category)
        }}>
            {children}
        </div>
    );
}