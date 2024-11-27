import { useState, useEffect } from "react"
import { InputText } from "primereact/inputtext"
import { Dialog } from "primereact/dialog"
import { Avatar } from "primereact/avatar"
import PropTypes from 'prop-types'
import AuthService from "../API/AuthService"
import { getPendingContact, updateContact, createPendingContact, getDetailUser } from "../API/ContactService"

import '../styles/chat.css'

const NotifDialog = ({ notifDialog, setNotifDialog, inputSearchNotif, setInputSearchNotif }) => {
    const userAuth = AuthService.getUserAuthentified()
    const [pendingContact, setPendingContact] = useState([])
    const [hideIcon, setHideIcon] = useState(false)

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const data = await getPendingContact(userAuth)
                console.log(data)
                setPendingContact(data)
            } catch (error) {
                console.error("Erreur lors de la récupération des invitations:", error)
            }
        }
        fetchContacts()
    }, [])

    const handleAccept = async (contact) => {
        setHideIcon(true)
        await updateContact(contact, 'accepted')

        const dataUser = await getDetailUser(contact.user, contact.email, contact.numero)
        if (dataUser) {
            await createPendingContact(userAuth, dataUser, "accepted")
        }
    }

    const handleDeny = async (contact) => {
        setHideIcon(true)
        await updateContact(contact, 'blocked')
    }

    return (
        <Dialog
            modal
            visible={notifDialog}
            onHide={() => { if (!notifDialog); return setNotifDialog(false) }}
            content={({ hide }) => (
                <form>
                    <div className="bg-blackPure rounded-3xl">
                        <InputText
                            type="text"
                            value={inputSearchNotif}
                            onChange={(e) => setInputSearchNotif(e.target.value)}
                            className="custom-input-search font-poppins h-10 bg-transparent indent-3 border border-none placeholder:text-white text-white text-xs"
                            placeholder="Rechercher une notification"
                        />
                    </div>

                    <div className="mt-4">
                        {pendingContact.map((contact) => (
                            <div key={contact.id} className="flex flex-row justify-between hover:bg-blackPure rounded py-5 px-4 mb-4">
                                <div className=" flex flex-row cursor-pointer space-x-3">
                                    <Avatar label="T" shape="circle" className="text-white bg-blueSlate" />
                                    <div className="flex flex-col -mt-4">
                                        <p className="text-white font-poppins font-semibold text-sm">{contact.user}</p>
                                        <span className="text-white font-poppins -mt-3 text-xs">vous a envoyé une invitation</span>
                                    </div>
                                </div>

                                {
                                    hideIcon ? (
                                        <i className="pi pi-user-minus mt-2 hover:text-blueSlate text-white cursor-pointer" title="Profil"></i>
                                    ) : (
                                        <div className="flex flex-row justify-start space-x-5 mt-2">
                                            <i className="pi pi-user hover:text-blueSlate text-white cursor-pointer" title="Profil"></i>
                                            <i className="pi pi-check hover:text-blueSlate text-white cursor-pointer" title="Accepter" onClick={() => handleAccept(contact)}></i>
                                            <i className="pi pi-times hover:text-blueSlate text-white cursor-pointer" title="Refuser" onClick={() => handleDeny(contact)}></i>
                                        </div>
                                    )
                                }

                            </div>
                        ))}
                    </div >

                    <div className="absolute right-4 bottom-4 cursor-pointer" title="Sortir" onClick={(e) => hide(e)}>
                        <i className="text-white pi pi-sign-out hover:text-blueSlate"></i>
                    </div>
                </form >

            )}
            className={`bg-blackAccent text-white w-[35vw] p-4 h-[70vh] rounded`}
        />
    )
}

NotifDialog.propTypes = {
    notifDialog: PropTypes.bool.isRequired,
    setNotifDialog: PropTypes.func.isRequired,
    inputSearchNotif: PropTypes.string.isRequired,
    setInputSearchNotif: PropTypes.func.isRequired,
}

export default NotifDialog
