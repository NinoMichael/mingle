import React, { useState } from 'react';
import { Menu } from 'primereact/menu';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Sidebar } from 'primereact/sidebar';
import { Divider } from 'primereact/divider';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import ContactDialog from '../components/ContactDialog';
import '../styles/chat.css';

const SideMenuChat = ({ onSelectMessage }) => {
    const [inputSearch, setInputSearch] = useState("");
    const [visible, setVisible] = useState(false);
    const [contactsDialog, setContactsDialog] = useState(false);
    const [inputSearchContact, setInputSearchContact] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);

    const navigate = useNavigate();

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
    ];

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
    ];

    const tabItems = [
        {
            id: 1,
            label: 'Suggestions',
            content: (
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
            )
        }
    ];

    const chatItems = [
        // Code pour afficher les éléments de chat
    ];

    return (
        <section className="fixed float-left -mt-1">
            <Menu model={chatItems} className="w-[25vw] pt-4 pb-6 bg-blackAccent font-poppins border border-none text-sm shadow-2xl h-[100vh]" />

            <ContactDialog
                visible={contactsDialog}
                onHide={() => setContactsDialog(false)}
                inputSearchContact={inputSearchContact}
                setInputSearchContact={setInputSearchContact}
                tabItems={tabItems}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />
        </section>
    );
};

SideMenuChat.propTypes = {
    onSelectMessage: PropTypes.func.isRequired,
};

export default SideMenuChat;
