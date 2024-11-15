import { Button } from "primereact/button"
import { Toolbar } from "primereact/toolbar"
import PropTypes from "prop-types"

const ToolbarChat = ({ menuOption }) => {

    const toolBar = (
        <div className="flex flex-row">
            <Button icon="pi pi-search" title="Rechercher un contenu" className="text-white border border-none p-inputgroup-addon bg-transparent outline outline-none" />
            <Button icon="pi pi-phone" title="Appel vocal" className="text-white border border-none p-inputgroup-addon bg-transparent outline outline-none" />
            <Button icon="pi pi-video" title="Appel video" className="text-white border border-none p-inputgroup-addon bg-transparent outline outline-none" />
            <Button onClick={(e) => menuOption.current.toggle(e)} icon="pi pi-ellipsis-v" title="Option" className="text-white border border-none p-inputgroup-addon bg-transparent outline outline-none" />
        </div>
    )

    return (
        <div>
            <Toolbar end={toolBar} className="bg-transparent border border-none" />
        </div>
    )
}

ToolbarChat.propTypes = {
    menuOption: PropTypes.shape({
        current: PropTypes.object,
    }).isRequired,
}

export default ToolbarChat