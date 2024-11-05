import { useState, useCallback } from "react"
import { InputOtp } from "primereact/inputotp"
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "primereact/button"
import { Divider } from "primereact/divider"
import { Dialog } from 'primereact/dialog'

import logo from '../assets/icons/logo.png'
import email from '../assets/icons/email.png'
import '../styles/auth.css'

const CodeVerification = () => {
    const [codeToken, setCodeTokens] = useState('')
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()

    const customInput = useCallback(({ events, props }) => {
        return <input {...events} {...props} type="text" className="custom-otp-input-sample" />
    }, [])

    const handleBack = useCallback(() => {
        navigate('/register')
    }, [navigate])

    const handleValidate = () => {
        navigate('/info-register')
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-between mt-8 mx-12">
                <span className="cursor-pointer" title="Retour" onClick={handleBack}><i className="pi pi-arrow-left"></i></span>
                <p className="no-underline text-xs text-white cursor-pointer" onClick={() => setVisible(true)}>Vérifier avec l'adresse email ?</p>

                <Dialog modal visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false) }}>
                    <div className="px-auto pt-8">
                        <img src={email} />
                    </div>
                </Dialog>
            </div>

            <main className="flex flex-col justify-center items-center mx-44">
                <img src={logo} alt="Mingle" className="w-48 h-48 flex justify-center items-center mx-auto" loading="lazy" />

                <form>
                    <p className="text-center mx-36 mt-6">
                        Nous avons besoin de vérifier votre numéro de téléphone pour garantir la sécurité de votre compte. Veuillez entrer le code à 5 chiffres que nous avons envoyé à votre numéro
                    </p>

                    <div className="mt-12 flex justify-center items-center mx-auto">
                        <InputOtp
                            value={codeToken}
                            onChange={(e) => setCodeTokens(e.target.value)}
                            integerOnly
                            length={5}
                            inputTemplate={customInput}
                        />
                    </div>

                    <Button label="Valider" className="flex justify-center items-center mx-auto mt-12 bg-blueSlate text-white border border-none outline outline-none font-poppins text-sm px-24"
                        onClick={handleValidate} />
                </form>

                <Divider className="mt-10 w-[70%]" />
                <p className="mt-4 text-xs text-center">Vous n'avez pas encore reçu de code ? <Link className="text-blueSlate no-underline">Renvoyer</Link></p>
            </main>
        </motion.div>
    )
}

export default CodeVerification
