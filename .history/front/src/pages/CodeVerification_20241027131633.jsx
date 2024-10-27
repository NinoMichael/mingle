import { useState } from "react"
import { InputOtp } from "primereact/inputotp"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "primereact/button"

import logo from '../assets/icons/logo.png'
import '../styles/auth.css'

const CodeVerification = () => {
    const [codeToken, setCodeTokens] = useState('')

    const customInput = ({ events, props }) => {
        return <input {...events} {...props} type="text" className="custom-otp-input-sample" />
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-between mt-8 mx-12">
                <span className="cursor-pointer" title="Retour"><i className="pi pi-arrow-left"></i></span>
                <Link className="no-underline text-xs text-white">Vérifier avec l'adresse email ?</Link>
            </div>


            <main className="flex flex-col justify-center items-center mx-44 mt-2">
                <img src={logo} alt="Mingle" className="w-48 h-48 flex justify-center items-center mx-auto" />

                <form>
                    <p className="text-center mx-36 mt-6">
                        Nous avons besoin de vérifier votre numéro de téléphone pour garantir la sécurité de votre compte. Veuillez entrer le code à 5 chiffres que nous avons envoyé à votre numéro
                    </p>

                    <div className="mt-12 flex justify-center items-center mx-auto">
                        <InputOtp
                            value={codeToken}
                            onChange={(e) => setCodeTokens(e.value)}
                            integerOnly
                            length={5}
                            inputTemplate={customInput}
                        />
                    </div>

                    <Button label="Valider" className="flex justify-center items-center mx-auto mt-12 bg-blueSlate text-white border border-none outline outline-none font-poppins text-sm px-24" />
                </form>

                <p className="mt-12">Vous n'avez pas encore reçu de code ? <Link className="text-blueSlate no-underline">Renvoyer le code</Link></p>
            </main>
        </motion.div>
    )
}

export default CodeVerification
