import { Button } from "primereact/button"
import { Toolbar } from "primereact/toolbar"

const ToolbarChat = () => {
    const toolBar = (
        <div className="flex flex-row">
            <Button icon="pi pi-search" title="Rechercher un contenu" className="text-white border border-none p-inputgroup-addon bg-transparent outline outline-none" />
            <Button icon="pi pi-phone" title="Appel vocal" className="text-white border border-none p-inputgroup-addon bg-transparent outline outline-none" />
            <Button icon="pi pi-video" title="Appel video" className="text-white border border-none p-inputgroup-addon bg-transparent outline outline-none" />
            <Button icon="pi pi-ellipsis-v" title="Option" className="text-white border border-none p-inputgroup-addon bg-transparent outline outline-none" />
        </div>
    )
}

export default ToolbarChat