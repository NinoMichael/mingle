import { Dialog } from "primereact/dialog"
import PropTypes from "prop-types"
import { ProgressSpinner } from 'primereact/progressspinner'

const SignupDialog = ({ visibleSignup, setVisibleSignup }) => {
    return (
        <>
            <Dialog
                className="bg-blackAccent text-white w-[35vw] p-4 h-[20vh] rounded -mt-4"
                modal visible={visibleSignup}
                onHide={() => { if (!visibleSignup) return; setVisibleSignup(false) }}
                content={() => (
                    <div className="flex flex-row justify-start mt-5">
                        <ProgressSpinner style={{ width: '40px', height: '40px' }} strokeWidth="3" className="custom-spinner" />
                        <div>
                            <p className="text-md text-white font-poppins -ms-12 me-36 mt-3">Inscription en cours ......</p>
                        </div>
                    </div>
                )}
            >
            </Dialog>
        </>
    )
}

SignupDialog.propTypes = {
    visibleSignup: PropTypes.bool.isRequired,
    setVisibleSignup: PropTypes.func.isRequired
}

export default SignupDialog