import { useState } from "react"
import { InputOtp } from "primereact/inputotp"
import { motion } from "framer-motion"

import logo from '../assets/icons/logo.png'
import '../styles/auth.css'

const CodeVerification = () => {
    const [codeToken, setCodeTokens] = useState('')

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
            <main className="flex flex-col justify-center items-center mx-44 mt-12">
                <img src={logo} alt="Mingle" className="w-48 h-48 flex justify-center items-center mx-auto" />

                <section>
                    <p className="text-center mx-36 mt-6">
                        Nous avons besoin de vérifier votre numéro de téléphone pour garantir la sécurité de votre compte. Veuillez entrer le code à 5 chiffres ci-dessous que nous avons envoyé à votre numéro
                    </p>
                    <InputOtp
                        value={codeToken}
                        onChange={(e) => setCodeTokens(e.value)}
                        integerOnly
                        length={5}
                        className="mt-12 bg-amber-300 custom-otp-input-sample"
                    />
                </section>
            </main>
        </motion.div>
    )
}

export default CodeVerification
