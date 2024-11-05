import { useState, useEffect } from "react"
import { Menu } from "primereact/menu"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { Avatar } from "primereact/avatar"
import { Badge } from "primereact/badge"

import '../styles/chat.css'

const SideMenuChat = ({ onSelectMessage }) => {
    const [inputSearch, setInputSearch] = useState(null)

    const messagesHistory = [
        {
            id: 1,
            avatar: "M",
            user: "Mirindra Harilala",
            message: "Tena manao ah",
            timeout: "1 min",
        },
        {
            id: 1,
            avatar: "T",
            user: "Tiavina Todisoa",
            message: "Tax aah",
            timeout: "4 h",
        }
    ]

    let chatItems = [
        {
            template: () => {
                return (
                    <div className="flex flex-row justify-between space-x-12 mb-10 px-5">
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
                    <div>
                        {messagesHistory.map((messageHistory) => (
                            <div className="flex flex-row justify-start cursor-pointer hover:bg-blackPure hover:rounded py-2 px-2 w-full space-x-4 mb-2" key={messageHistory.id}
                                onClick={() => onSelectMessage(messageHistory)}>
                                <Avatar shape="circle" label={messageHistory.avatar} className="ms-2" />

                                <div className="flex flex-col flex-grow -mt-6">
                                    <div className="flex flex-row justify-between items-center">
                                        <h4 className="text-white">{messageHistory.user}</h4>
                                        <span className="text-[0.75em] text-gray-300 ml-auto -mt-1 me-3">{messageHistory.timeout}</span>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <span className="text-xs text-white flex-grow -mt-4">{messageHistory.message}</span>
                                        <Badge value="2" className="font-poppins text-sm bg-blueSlate text-blackPure ml-auto -mt-4 me-3" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                )
            }

        }
    ]

    return (
        <section className="fixed float-left -mt-1">
            <Menu model={chatItems} className="w-[25vw] pt-4 pb-6 bg-blackAccent font-poppins border border-none text-sm shadow-2xl h-[100vh]" />
        </section>
    )
}

export default SideMenuChat