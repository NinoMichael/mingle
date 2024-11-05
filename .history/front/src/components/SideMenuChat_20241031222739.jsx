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

                        <div className="p-inputgroup flex-1 border border-white rounded-3xl">
                            <InputText type="email" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}
                                className="font-poppins border-white bg-transparent placeholder:text-white text-white text-xs"
                                placeholder="Rechercher" />
                            <span className="p-inputgroup-addon bg-transparent">
                                <i className="pi pi-search text-white"></i>
                            </span>
                        </div>

                    </div>
                )
            }
        },
        {
            separator: true
        },
    ]

    return (
        <section className="fixed float-left -mt-1">
            <Menu model={chatItems} className="w-72 bg-blackAccent font-poppins text-sm border border-gray-400 shadow-xl h-[100vh]" />
        </section>
    )
}

export default SideMenuChat