import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import SideMenuChat from "../components/SideMenuChat"
import ToolbarChat from "../components/ToolbarChat"
import ChatForm from "../components/ChatForm"
import MessageBlock from "../components/MessageBlock"
import { TieredMenu } from 'primereact/tieredmenu'
import ProfileDialog from "../components/ProfileDialog"
import { sendMessage, fetchMessages } from "../API/ChatService"

const Chat = () => {
    const [messages, setMessages] = useState([])
    const [selectedMessage, setSelectedMessage] = useState(null)
    const [msgContent, setMsgContent] = useState(false)
    const [chatWithUser, setChatWithUser] = useState(null)
    const [visibleProfile, setVisibleProfile] = useState(false)
    const [hoveredMessageIndex, setHoveredMessageIndex] = useState(null)

    const user = JSON.parse(localStorage.getItem('user'))

    const menuOption = useRef(null)
    const msgOption = useRef(null)

    const items = [
        {
            label: 'Notifications',
            icon: 'pi pi-bell',
            items: [
                {
                    label: 'Couper le son',
                    icon: 'pi pi-volume-off',
                },
                {
                    label: 'Désactiver',
                    icon: 'pi pi-bell-slash',
                },
            ]
        },
        {
            separator: true
        },
        {
            label: 'Voir profil',
            icon: 'pi pi-user',
            command: () => {
                setVisibleProfile(true)
            }
        },
        {
            label: 'Multimédia',
            icon: 'pi pi-play-circle'
        },
        {
            label: 'A propos',
            icon: 'pi pi-info-circle',
        },
        {
            label: 'Archiver',
            icon: 'pi pi-bookmark-fill',
        },
        {
            label: 'Supprimer',
            icon: 'pi pi-trash',
        }
    ]

    const msgItems = [
        {
            label: 'Décrypter',
            icon: 'pi pi-shield',
            className: 'text-red-500'
        },
        {
            label: 'Copier le texte',
            icon: 'pi pi-copy',
        },
        {
            label: 'Transférer',
            icon: 'pi pi-share-alt',
        },
        {
            label: 'Supprimer',
            icon: 'pi pi-trash',
            className: 'text-red-500'
        },
    ]

    const verifyUser = (msg) => {
        return msg.emetteur === user.identifiant ? true : false
    }

    // Déplacez la fonction loadMessages à l'extérieur de useEffect
    const loadMessages = async (senderId, receiverId) => {
        try {
            const fetchedMessages = await fetchMessages(senderId, receiverId)

            const formattedMessages = fetchedMessages.map(msg => ({
                text: msg.contenu,
                isUser: verifyUser(msg)
            }))
            setMessages(formattedMessages)

        } catch (error) {
            console.error("Erreur lors du chargement des messages :", error)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (chatWithUser) {
                loadMessages(user.id, chatWithUser.idContact)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [chatWithUser])

    const handleSelectMessage = (message) => {
        setSelectedMessage(message)
        setMsgContent(true)
    }

    const handleSelectUser = (newChat) => {
        setChatWithUser(newChat)
        setSelectedMessage(newChat)
        loadMessages(user.id, newChat.idContact) // Charge immédiatement les messages dès qu'un utilisateur est sélectionné
    }

    const handleSubmitMessage = async (message) => {
        try {
            await sendMessage(message, user.id, selectedMessage.idContact)
            setMessages((prevMessages) => [...prevMessages, { text: message, isUser: true }])
        } catch (error) {
            console.error("Erreur lors de l'envoi du message :", error)
        }
    }

    console.log(messages)

    return (
        <>
            <SideMenuChat onSelectMessage={handleSelectMessage} chatWithUser={chatWithUser} onDataChange={handleSelectUser} />

            <motion.div initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.8 }} className="bg-blackPure w-[75vw] ms-[25vw]">
                {!msgContent && !selectedMessage ? (
                    <div className="flex justify-center items-center m-auto pt-64">
                        <h3 className="text-gray-500">Aucun message n'a été sélectionné pour le moment</h3>
                    </div>
                ) : (
                    <>
                        <motion.header
                            className="h-16 shadow bg-blackAccent border flex flex-row justify-between px-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex flex-col -mt-1">
                                <h2 className="text-lg font-kanit text-white">{selectedMessage.contact}</h2>
                                <span className="text-xs -mt-4">{selectedMessage.numeroContact}</span>
                            </div>

                            <ToolbarChat menuOption={menuOption} />
                        </motion.header>

                        <div className="py-4 px-6 h-[calc(100vh-120px)] relative overflow-y-auto bg-blackPure">
                            <TieredMenu model={items} popup ref={menuOption} className="bg-blackAccent font-poppins text-sm text-white rounded shadow-lg custom-tieredmenu" />

                            {messages.map((msg, index) => {
                                const prevMsg = messages[index - 1]
                                const showAvatar = !msg.isUser && (!prevMsg || prevMsg.isUser)

                                return (
                                    <MessageBlock
                                        key={index}
                                        message={msg.text}
                                        isUser={msg.isUser}
                                        showAvatar={showAvatar}
                                        msgItems={msgItems}
                                        msgOption={msgOption}
                                        isHovered={hoveredMessageIndex === index}
                                        onMouseEnter={() => setHoveredMessageIndex(index)}
                                        onMouseLeave={() => setHoveredMessageIndex(null)}
                                    />
                                )
                            })}
                        </div>

                        <ChatForm onSubmitMessage={handleSubmitMessage} />
                    </>
                )}

                <ProfileDialog visibleProfile={visibleProfile} setVisibleProfile={setVisibleProfile} selectedMessage={selectedMessage} />
            </motion.div>
        </>
    )
}

export default Chat
