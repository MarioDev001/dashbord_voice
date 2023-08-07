"use client"

import SvgClose from "@/assets/svgs/SvgClose";
import SvgOpen from "@/assets/svgs/SvgOpen";
import React from "react";

interface MenuProps {
    pageActive: (page: string) => void;
}
export const Menu = ({pageActive}: MenuProps) => {
    const [menuMob, setMenuMob] = React.useState(false)
    return (
        <div className="bg-color-n2 text-color-n7 lg:w-96 lg:h-full h-24 lg:block flex justify-between py-20 px-8 box-border">
            <div className=" font-extrabold text-3xl mb-20">
                <h1>DashBord</h1>
            </div>
            <div className="lg:hidden flex justify-end">
                    <button className="w-full flex justify-end" onClick={() => setMenuMob(!menuMob)}>
                        <SvgOpen /> 
                    </button>
                </div>
            <div className={`lg:static lg:p-0 absolute bg-color-n2 h-full w-full pl-9 left-0 lg:block ${menuMob ? "block": "hidden"}`}>
                <div className="lg:hidden block">
                    <button className="w-full flex justify-end pr-8" onClick={() => setMenuMob(!menuMob)}>
                        <SvgClose /> 
                    </button>
                </div>
                <ul className="flex flex-col gap-5 text-lg">
                    <li className="flex items-center gap-3">
                        <div className="rounded-full h-2 w-2 bg-color-n5"></div>
                        <button onClick={() => {pageActive("painel"); setMenuMob(!menuMob)}}>Dashbord</button>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="rounded-full h-2 w-2 bg-color-n10"></div>
                        <button onClick={() => {pageActive("historic"); setMenuMob(!menuMob)} }>Histórico</button>
                    </li>
                </ul>
            </div>

        </div>
    )
}