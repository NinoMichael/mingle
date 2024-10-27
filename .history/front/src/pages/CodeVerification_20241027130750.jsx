import { useState } from "react"
import { InputOtp } from "primereact/inputotp"
import { motion } from "framer-motion"

import logo from '../assets/icons/logo.png'
import '../styles/auth.css'

const CodeVerification = () => {
    const [codeToken, setCodeTokens] = useState('')

    const customInput = ({ events, props }) => {
        return <input {...events} {...props} type="text" className="custom-otp-input-sample" />
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
            <span className="cursor-pointer"><i className="pi pi-arrow-left mt-6 ms-8"></i></span>

            <main className="flex flex-col justify-center items-center mx-44 mt-4">
                <img src={logo} alt="Mingle" className="w-48 h-48 flex justify-center items-center mx-auto" />

                <section>
                    <p className="text-center mx-36 mt-6">
                        Nous avons besoin de vérifier votre numéro de téléphone pour garantir la sécurité de votre compte. Veuillez entrer le code à 5 chiffres ci-dessous que nous avons envoyé à votre numéro
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

                </section>
            </main>
        </motion.div>
    )
}

export default CodeVerification
