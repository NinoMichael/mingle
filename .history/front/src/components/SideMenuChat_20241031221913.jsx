import React, { useState, useEffect } from "react"
import { Menu } from "primereact/menu"

const SideMenuChat = () => {
    let chatItems = [
        {
            template: () => {
                return (
                    <div className="flex flex-row justify-between">
                        <i className="pi pi-bars text-white"></i>
                    </div>
                )
            }
        },
        {
            separator: true
        },
    ]

    return (
        <section className="fixed float-left -mt-1 bg-blackAccent">
            <Menu model={chatItems} className="w-64 font-poppins text-sm border border-gray-400 shadow-xl h-[100vh]" />
        </section>
    )
}

export default SideMenuChat