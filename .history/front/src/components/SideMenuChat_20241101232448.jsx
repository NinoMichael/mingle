import { useState } from "react";
import { Menu } from "primereact/menu";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import PropTypes from 'prop-types';

const SideMenuChat = ({ onSelectMessage }) => {
    const [inputSearch, setInputSearch] = useState("");

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

    const chatItems = [
        {
            template: () => (
                <div className="flex flex-row justify-between mb-10 px-5">
                    <i className="pi pi-bars text-white cursor-pointer mt-3" title="Menu principal"></i>
                    <InputText
                        type="text"
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
                        className="custom-input-search font-poppins h-10 bg-transparent border-none placeholder:text-white text-white"
                        placeholder="Rechercher"
                    />
                    <Button icon="pi pi-search" className="text-white border-none bg-transparent" />
                </div>
            )
        },
        {
            template: () => (
                <div>
                    {messagesHistory.map((messageHistory) => (
                        <div
                            className="flex flex-row cursor-pointer hover:bg-blackPure py-2 px-2"
                            key={messageHistory.id}
                            onClick={() => onSelectMessage(messageHistory)}
                        >
                            <Avatar shape="circle" label={messageHistory.avatar} />
                            <div className="flex flex-col flex-grow ml-2">
                                <div className="flex justify-between items-center">
                                    <h4 className="text-white">{messageHistory.user}</h4>
                                    <span className="text-gray-300">{messageHistory.timeout}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-white">{messageHistory.message}</span>
                                    <Badge value="2" className="bg-blueSlate text-blackPure ml-auto" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    ];

    return (
        <section className="fixed w-[25vw] h-full bg-blackAccent">
            <Menu model={chatItems} className="pt-4 pb-6 border-none" />
        </section>
    );
};

SideMenuChat.propTypes = {
    onSelectMessage: PropTypes.func.isRequired,
};

export default SideMenuChat;