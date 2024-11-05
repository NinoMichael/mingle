import { useState, useEffect } from "react"
import { Menu } from "primereact/menu"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { Avatar } from "primereact/avatar"
import { Badge } from "primereact/badge"

import '../styles/chat.css'

const SideMenuChat = () => {
    const [inputSearch, setInputSearch] = useState(null)

    let chatItems = [
        {
            template: () => {
                return (
                    <div className="flex flex-row justify-between space-x-12 mb-6">
                        <i className="pi pi-bars text-white cursor-pointer mt-3" title="Menu principal"></i>

                        <div className="bg-blackPure rounded-3xl">
                            <div className="p-inputgroup flex-1 ">
                                <InputText type="email" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}
                                    className="custom-input-search font-poppins h-10 bg-transparent indent-3 border border-none placeholder:text-white text-white text-xs"
                                    placeholder="Rechercher" />
                                <Button icon="pi pi-search" className="text-white border border-none bg-transparent p-inputgroup-addon outline outline-none" />
                            </div>
                        </div>

                    </div>
                )
            }
        },
        {
            template: () => {
                return (
                    <div className="flex flex-row justify-start mb-3">
                        <Avatar shape="circle" label="T" size="large" />

                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between">
                                <h3>Mirindra Harilala</h3>
                            </div>

                            <div className="flex flex-row justify-between">
                                <span className="text-xs">Tena manao ah</span>
                                <Badge value="2" className="font-poppins text-sm bg-blueSlate text-blackPure"></Badge>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    ]

    return (
        <section className="fixed float-left -mt-1">
            <Menu model={chatItems} className="w-80 pt-4 pb-6 px-5 bg-blackAccent font-poppins border border-none text-sm shadow-xl h-[100vh]" />
        </section>
    )
}

export default SideMenuChat