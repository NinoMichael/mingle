import { useState } from "react"
import { Menu } from "primereact/menu"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { Avatar } from "primereact/avatar"
import { Badge } from "primereact/badge"
import { Sidebar } from "primereact/sidebar"
import { Divider } from "primereact/divider"
import { Dialog } from "primereact/dialog"
import { TabMenu } from 'primereact/tabmenu'
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom"

import '../styles/chat.css'

const SideMenuChat = ({ onSelectMessage }) => {
    const [inputSearch, setInputSearch] = useState("")
    const [visible, setVisible] = useState(false)
    const [contactsDialog, setContactsDialog] = useState(false)
    const [inputSearchContact, setInputSearchContact] = useState("")
    const [activeIndex, setActiveIndex] = useState(0)

    const navigate = useNavigate()

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
            action: () => setContactsDialog(true)
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
            url: '/login',
        },
    ]

    const tabItems = [
        {
            id: 1,
            label: 'Suggestions',
            content:
                <div className="overflow-y-auto">
                    <div className="flex flex-row justify-between text-white hover:bg-blackPure rounded p-4">
                        <div className="flex flex-row cursor-pointer justify-start space-x-4">
                            <Avatar label="JC" shape="circle" className="font-poppins bg-blackPure" />

                            <div className="flex flex-col font-poppins -mt-6">
                                <h4 className="text-sm">Mirindra Harilala</h4>
                                <span className="text-xs -mt-4">+261 32 45 678 90</span>
                            </div>
                        </div>

                        <div>
                            <i className="pi pi-user-plus mt-2 cursor-pointer" title="Ajouter un contact"></i>
                        </div>
                    </div>
                </div>
        }
    ]

    const chatItems = [
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
                                        <div key={menuItem.id} className="mb-3 flex px-10 hover:bg-blueSlate py-2 hover:rounded cursor-pointer"
                                            onClick={menuItem.action ? menuItem.action : () => navigate(menuItem.url)}>
                                            <span className="text-white text-sm font-poppins">
                                                <i className={`${menuItem.icon} me-6`}></i>{menuItem.menu}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <span className="absolute bottom-4 left-10 text-[0.55em] font-poppins text-white">Copyright 2024 - Tous droits réservés</span>
                            </>
                        )} className="w-[18vw] bg-blackPure" />

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
            template: () => (
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
        },
        {
            template: () => (
                <div className="absolute bottom-5 right-5 z-20">
                    <div className="rounded-[50%] bg-blueSlate text-white p-3 cursor-pointer" title="Nouveau message">
                        <i className="pi pi-plus"></i>
                    </div>
                </div>
            )
        }
    ]

    return (
        <section className="fixed float-left -mt-1">
            <Menu model={chatItems} className="w-[25vw] pt-4 pb-6 bg-blackAccent font-poppins border border-none text-sm shadow-2xl h-[100vh]" />

            <Dialog modal visible={contactsDialog} onHide={() => { if (!contactsDialog) return; setContactsDialog(false) }}
                className="bg-blackAccent text-white w-[35vw] h-[70vh] p-4 rounded"
                content={({ hide }) => (
                    <>
                        <form>
                            <div className="bg-blackPure rounded-3xl">
                                <div className="p-inputgroup flex-1 ">
                                    <InputText
                                        type="text"
                                        value={inputSearchContact}
                                        onChange={(e) => setInputSearchContact(e.target.value)}
                                        className="custom-input-search font-poppins h-10 bg-transparent indent-3 border border-none placeholder:text-white text-white text-xs"
                                        placeholder="Rechercher"
                                    />
                                    <Button icon="pi pi-search" className="text-white border border-none bg-transparent p-inputgroup-addon outline outline-none" />
                                </div>
                            </div>

                            <TabMenu model={tabItems} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}
                                className="custom-tabmenu bg-blackAccent mt-2" />

                            <div className="mt-4">
                                {tabItems[activeIndex].content}
                            </div>

                            <div className="absolute bottom-2 right-2 rounded-[50%] p-2 bg-white">
                                <i className="text-black pi pi-arrow-right"></i>
                            </div>
                        </form>
                    </>
                )}>
            </Dialog>
        </section>
    )
}

SideMenuChat.propTypes = {
    onSelectMessage: PropTypes.func.isRequired,
}

export default SideMenuChat
