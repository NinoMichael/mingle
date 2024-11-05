// ContactsDialog.jsx
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { TabMenu } from "primereact/tabmenu";
import PropTypes from "prop-types";

const ContactDialog = ({ visible, onHide, inputSearchContact, setInputSearchContact, activeIndex, setActiveIndex, tabItems }) => {
    return (
        <Dialog
            modal
            visible={visible}
            onHide={onHide}
            className="bg-blackAccent text-white w-[35vw] h-[70vh] p-4 rounded"
        >
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

                <TabMenu
                    model={tabItems}
                    activeIndex={activeIndex}
                    onTabChange={(e) => setActiveIndex(e.index)}
                    className="custom-tabmenu bg-blackAccent mt-2"
                />

                <div className="mt-4">
                    {tabItems[activeIndex].content}
                </div>

                <div className="absolute bottom-4 right-4 cursor-pointer" title="Sortir">
                    <i className="text-white pi pi-sign-out"></i>
                </div>
            </form>
        </Dialog>
    );
};

ContactDialog.propTypes = {
    visible: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    inputSearchContact: PropTypes.string.isRequired,
    setInputSearchContact: PropTypes.func.isRequired,
    activeIndex: PropTypes.number.isRequired,
    setActiveIndex: PropTypes.func.isRequired,
    tabItems: PropTypes.array.isRequired,
};

export default ContactDialog;
