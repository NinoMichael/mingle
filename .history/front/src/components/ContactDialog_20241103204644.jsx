import React from "react"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { TabMenu } from 'primereact/tabmenu'
import { Dialog } from "primereact/dialog"
import { Avatar } from "primereact/avatar"
import PropTypes from 'prop-types'

import '../styles/chat.css'

const ContactDialog = ({ visible, inputSearchContact, setInputSearchContact, activeIndex, setActiveIndex }) => {
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

    return (
        <Dialog modal visible={visible} content={({ hide }) => (
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

                <div className="absolute bottom-4 right-4 cursor-pointer" title="Sortir" onClick={(e) => hide(e)}>
                    <i className="text-white pi pi-sign-out"></i>
                </div>
            </form>
        )}
            className="bg-blackAccent text-white w-[35vw] h-[70vh] p-4 rounded">
        </Dialog>
    )
}

ContactDialog.propTypes = {
    visible: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    inputSearchContact: PropTypes.string.isRequired,
    setInputSearchContact: PropTypes.func.isRequired,
    tabItems: PropTypes.array.isRequired,
    activeIndex: PropTypes.number.isRequired,
    setActiveIndex: PropTypes.func.isRequired,
}

export default ContactDialog
