import React, { useState, useEffect } from "react"
import { Menu } from "primereact/menu"
import { InputText } from "primereact/inputtext"

const SideMenuChat = () => {
    const [inputSearch, setInputSearch] = useState(null)

    let chatItems = [
        {
            template: () => {
                return (
                    <div className="flex flex-row justify-between space-x-12">
                        <i className="pi pi-bars text-white cursor-pointer mt-3" title="Menu principal"></i>

                        <div className="p-inputgroup flex-1 border border-white rounded-3xl">
                            <InputText type="email" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}
                                className="font-poppins h-10 bg-transparent focus:outline-none border border-none placeholder:text-white text-white text-xs"
                                placeholder="Rechercher" />
                            <span className="p-inputgroup-addon bg-transparent border border-none">
                                <i className="pi pi-search text-white"></i>
                            </span>
                        </div>

                    </div>
                )
            }
        },
    ]

    return (
        <section className="fixed float-left -mt-1">
            <Menu model={chatItems} className="w-80 pt-4 pb-6 px-5 bg-blackAccent font-poppins border border-none text-sm shadow-xl h-[100vh]" />
        </section>
    )
}

export default SideMenuChat