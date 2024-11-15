import { useState } from "react"
import PropTypes from "prop-types"
import { Dialog } from "primereact/dialog"
import { Avatar } from "primereact/avatar"
import { Button } from "primereact/button"
import { Divider } from "primereact/divider"
import { InputText } from "primereact/inputtext"

const SettingDialog = ({ visibleSetting, setVisibleSetting }) => {
    const [keyShare, setKeyShare] = useState("dflmdfsoespismlvckmlfbkcfmdgrdkgprdodmlkcc")

    return (
        <Dialog
            className="bg-blackAccent text-white w-[35vw] pb-3 px-8 h-[70vh] rounded -mt-4"
            modal visible={visibleSetting} onHide={() => { if (!visibleSetting) return; setVisibleSetting(false) }}
            content={({ hide }) => (
                <section className="relative">
                    <h3 className="font-kanit text-2xl font-semibold">Profil</h3>

                    <section className="flex justify-between">
                        <div className="flex flex-row justify-start space-x-5">
                            <Avatar label="NM" shape="circle" size="large" className="bg-blueSlate text-white" />

                            <div className="flex flex-col text-sm text-white -mt-5">
                                <p className="font-semibold font-poppins">Jerry</p>
                                <p className="-mt-2 font-poppins text-xs" ><i className="pi pi-map-marker me-1"></i>Habite à Antananarivo</p>
                                <p className="-mt-2 font-poppins text-xs" ><i className="pi pi-phone me-1"></i>+261 32 45 678 90</p>
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
                            <p className="text-sm font-poppins -mt-5">Nino Michael</p>
                        </div>
                        <div>
                            <h5 className="font-kanit text-sm"><i className="pi pi-envelope me-2"></i>Adresse e-mail</h5>
                            <p className="text-sm font-poppins -mt-5">ninomichael@gmail.com</p>
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

SettingDialog.propTypes = {
    visibleSetting: PropTypes.bool.isRequired,
    setVisibleSetting: PropTypes.func.isRequired
}

export default SettingDialog