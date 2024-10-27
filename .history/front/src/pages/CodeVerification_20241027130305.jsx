import { useState } from "react"
import { InputOtp } from "primereact/inputotp"
import { motion } from "framer-motion"

import logo from '../assets/icons/logo.png'
import '../styles/auth.css'

const CodeVerification = () => {
    const [codeToken, setCodeTokens] = useState('')

    const customInput = ({ events, props }) => {
        return <><input {...events} {...props} type="text" className="custom-otp-input-sample" />
        </>
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
            <style scoped>
                {`
                    .custom-otp-input-sample {
                        margin : 0 auto 0 auto;
                        width: 4rem;
                        height: 4rem;
                        font-size: 24px;
                        appearance: none;
                        text-align: center;
                        transition: all 0.2s;
                        border: 1px solid white;
                        background: transparent;
                        outline-offset: -2px;
                        outline-color: transparent;
                        border-radius : 8px;
                        transition: outline-color 0.3s;
                        color: var(--text-color);
                        padding-left : -2rem; 
                    }

                    .custom-otp-input-sample:focus {
                        outline: 2px solid var(--primary-color);
                    }
                `}
            </style>

            <main className="flex flex-col justify-center items-center mx-44 mt-12">
                <img src={logo} alt="Mingle" className="w-48 h-48 flex justify-center items-center mx-auto" />

                <section>
                    <p className="text-center mx-36 mt-6">
                        Nous avons besoin de vérifier votre numéro de téléphone pour garantir la sécurité de votre compte. Veuillez entrer le code à 5 chiffres ci-dessous que nous avons envoyé à votre numéro
                    </p>

                    <div className="mt-12">
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
