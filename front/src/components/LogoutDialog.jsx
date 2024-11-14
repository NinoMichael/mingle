import { Dialog } from "primereact/dialog"
import PropTypes from "prop-types"
import { ProgressSpinner } from 'primereact/progressspinner'

const LogoutDialog = ({ visibleLogout, setVisibleLogout }) => {
    return (
        <>
            <Dialog
                className="bg-blackAccent text-white w-[35vw] p-4 h-[20vh] rounded -mt-4"
                modal visible={visibleLogout}
                onHide={() => { if (!visibleLogout) return; setVisibleLogout(false) }}
                content={() => (
                    <div className="flex flex-row justify-start mt-5">
                        <ProgressSpinner style={{ width: '40px', height: '40px' }} strokeWidth="3" className="custom-spinner" />
                        <div>
                            <p className="text-md text-white font-poppins -ms-12 me-36 mt-3">Déconnexion ......</p>
                        </div>
                    </div>
                )}
            >
            </Dialog>
        </>
    )
}

LogoutDialog.propTypes = {
    visibleLogout: PropTypes.bool.isRequired,
    setVisibleLogout: PropTypes.func.isRequired
}

export default LogoutDialog