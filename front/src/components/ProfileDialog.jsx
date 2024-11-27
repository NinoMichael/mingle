import { useState } from "react"
import PropTypes from "prop-types"
import { Dialog } from "primereact/dialog"
import { Avatar } from "primereact/avatar"
import { Button } from "primereact/button"
import { Divider } from "primereact/divider"
import { InputText } from "primereact/inputtext"

const ProfileDialog = ({ visibleProfile, setVisibleProfile, selectedMessage }) => {
    const [keyShare, setKeyShare] = useState("dflmdfsoespismlvckmlfbkcfmdgrdkgprdodmlkcc")

    return (
        <Dialog
            className="bg-blackAccent text-white w-[35vw] pb-3 px-8 h-[70vh] rounded -mt-4"
            modal visible={visibleProfile} onHide={() => { if (!visibleProfile) return; setVisibleProfile(false) }}
            content={({ hide }) => (
                <section className="relative">
                    <h3 className="font-kanit text-2xl font-semibold">Profil</h3>

                    <section className="flex justify-between">
                        <div className="flex flex-row justify-start space-x-5">
                            {selectedMessage.img ? (
                                <Avatar image={`http://127.0.0.1:8000${selectedMessage.imgContact}`} shape="circle" size="large" />
                            ) : (
                                <Avatar label={selectedMessage.contact.charAt(0)} shape="circle" size="large" className="bg-blueSlate text-white" />
                            )}

                            <div className="flex flex-col text-sm text-white -mt-5">
                                <p className="font-semibold font-poppins">{selectedMessage.contact}</p>
                                <p className="-mt-2 font-poppins text-xs" ><i className="pi pi-map-marker me-1"></i>Habite à {selectedMessage.locationContact}</p>
                                <p className="-mt-2 font-poppins text-xs" ><i className="pi pi-phone me-1"></i>{selectedMessage.numeroContact}</p>
                            </div>
                        </div>

                        <div>
                            <Button icon="pi pi-user-minus" label="Retirer" title="Editer votre avatar" className="bg-blueSlate mt-2 font-poppins text-xs rounded h-8 shadow cursor-pointer outline outline-none border border-none" />
                        </div>
                    </section>

                    <Divider />

                    <section className="grid grid-cols-2 mt-3">
                        <div>
                            <h5 className="font-kanit text-sm"><i className="pi pi-user me-2"></i>Nom</h5>
                            <p className="text-sm font-poppins -mt-5">{selectedMessage.nomContact}</p>
                        </div>
                        <div>
                            <h5 className="font-kanit text-sm"><i className="pi pi-envelope me-2"></i>Adresse e-mail</h5>
                            <p className="text-sm font-poppins -mt-5">{selectedMessage.emailContact}</p>
                        </div>
                    </section>

                    <div className="mt-5">
                        <h5 className="text-sm">Clé partagée</h5>
                        <div className="flex flex-row justify-start space-x-3">
                            <i className="pi pi-key"></i>
                            <InputText value={keyShare} onChange={(e) => setKeyShare(e.target.value)} className="bg-transparent border-white outline-white -mt-3 w-full font-poppins text-xs text-white" />
                        </div>
                    </div>

                    <div className="absolute -bottom-16 right-0 cursor-pointer" onClick={(e) => hide(e)}>
                        <i className="pi pi-sign-out hover:text-blueSlate"></i>
                    </div>
                </section>
            )}
        >

        </Dialog>
    )
}

ProfileDialog.propTypes = {
    visibleProfile: PropTypes.bool.isRequired,
    setVisibleProfile: PropTypes.func.isRequired,
    selectedMessage: PropTypes.shape({
        nom: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        numero: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        img: PropTypes.shape({
            url: PropTypes.string.isRequired,
            alt: PropTypes.string
        }).isRequired
    }).isRequired
}

export default ProfileDialog

