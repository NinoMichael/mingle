import { useState } from "react"
import { Menu } from "primereact/menu"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { Avatar } from "primereact/avatar"
import { Badge } from "primereact/badge"
import { Sidebar } from "primereact/sidebar"
import { Divider } from "primereact/divider"
import PropTypes from 'prop-types'

import '../styles/chat.css'


const SideMenuChat = ({ onSelectMessage }) => {
    const [inputSearch, setInputSearch] = useState("")
    const [visible, setVisible] = useState(false)

    const messagesHistory = [
        {
            id: 1,
            avatar: "M",
            user: "Mirindra Harilala",
            message: "Tena manao ah",
            timeout: "1 min",
            phoneNumber: '+261 32 45 678 90'
        },
        {
            id: 2,
            avatar: "T",
            user: "Tiavina Todisoa",
            message: "Tax aah",
            timeout: "4 h",
            phoneNumber: '+261 34 12 345 67'
        }
    ]

    const menuSideBar = [
        {
            id: 1,
            icon: "pi pi-user",
            menu: "Contacts",
        },
        {
            id: 2,
            icon: "pi pi-users",
            menu: "Espaces",
        },
        {
            id: 3,
            icon: "pi pi-clock",
            menu: "Historique",
        },
        {
            id: 4,
            icon: "pi pi-envelope",
            menu: "Archive",
        },
        {
            id: 5,
            icon: "pi pi-cog",
            menu: "Paramètres",
        },
        {
            id: 6,
            icon: "pi pi-sign-out",
            menu: "Se déconnecter",
        },
    ]

    let chatItems = [
        {
            template: () => {
                return (
                    <div className="flex flex-row justify-between space-x-12 mb-10 px-5">
                        <i className="pi pi-bars text-white cursor-pointer mt-3" title="Menu principal" onClick={() => setVisible(true)}></i>
                        <Sidebar visible={visible} onHide={() => setVisible(false)} content={() => (
                            <>
                                <div className="flex flex-col justify-center items-center mt-8">
                                    <Avatar shape="circle" label="NM" size="large" className="bg-blueSlate text-white font-poppins" />
                                    <span className="mt-3 font-poppins text-white">Nino Michael</span>
                                    <span className="mt-1 font-poppins text-xs text-white">+261 38 11 485 86</span>
                                </div>

                                <Divider className="mt-10" />

                                <div className="mt-4">
                                    {menuSideBar.map((menuItem) => (
                                        <div key={menuItem.id} className="mb-3 flex px-10 hover:bg-blueSlate py-2 hover:rounded cursor-pointer">
                                            <span className="text-white text-sm font-poppins"><i className={`${menuItem.icon} me-6`}></i>{menuItem.menu}</span>
                                        </div>
                                    ))}
                                </div>

                                <span className="absolute bottom-4 left-10 text-[0.55em] font-poppins text-white">Copyright 2024 - Tous droits réservés</span>
                            </>

                        )} className="w-[18vw] bg-blackPure">

                        </Sidebar>

                        <div className="bg-blackPure rounded-3xl">
                            <div className="p-inputgroup flex-1 ">
                                <InputText
                                    type="text"
                                    value={inputSearch}
                                    onChange={(e) => setInputSearch(e.target.value)}
                                    className="custom-input-search font-poppins h-10 bg-transparent indent-3 border border-none placeholder:text-white text-white text-xs"
                                    placeholder="Rechercher"
                                />
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
                                <Avatar shape="circle" label={messageHistory.avatar} className="ms-2 text-white bg-blackPure" />
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
        },
        {
            template: () => {
                return (
                    <div className="absolute bottom-3 right-4">
                        <div className="rounded-full bg-blueSlate text-white p-3">
                            <i className="pi pi-plus"></i>
                        </div>
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

SideMenuChat.propTypes = {
    onSelectMessage: PropTypes.func.isRequired,
}

export default SideMenuChat
