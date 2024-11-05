import React, { useState, useEffect } from "react"
import { Menu } from "primereact/menu"
import { InputText } from "primereact/inputtext"

const SideMenuChat = () => {
    const [inputSearch, setInputSearch] = useState(null)

    let chatItems = [
        {
            template: () => {
                return (
                    <div className="flex flex-row justify-between">
                        <i className="pi pi-bars text-white"></i>
                        <InputText type="email" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} className="font-poppins text-sm border-white bg-transparent placeholder:text-white text-white" />
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