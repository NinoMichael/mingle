import { motion } from "framer-motion"

import logo from '../assets/icons/logon.png'

const CodeVerification = () => {
    return (
        <main className="flex flex-col justify-center items-center m-auto">
            <img src={logo} alt="Mingle" className="w-48 h-48 flex justify-center items-center mx-auto" />

            <section>
                <p>Nous avons besoin de vérifier votre numéro de téléphone pour garantir la sécurité de votre compte. Veuillez entrer le code à 5 chiffres ci-dessous que nous avons envoyé à votre numéro</p>
            </section>
        </main >
    )
}

export default CodeVerification