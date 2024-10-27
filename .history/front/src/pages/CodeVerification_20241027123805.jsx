import { motion } from "framer-motion"

import logo from '../assets/icons/logo.png'

const CodeVerification = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
            <main className="flex flex-col justify-center items-center mx-44 mt-20">
                <img src={logo} alt="Mingle" className="w-48 h-48 flex justify-center items-center mx-auto" />

                <section>
                    <p className="text-center mx-36 mt-6">Nous avons besoin de vérifier votre numéro de téléphone pour garantir la sécurité de votre compte. Veuillez entrer le code à 5 chiffres ci-dessous que nous avons envoyé à votre numéro</p>

                </section>
            </main >
        </motion.div >
    )
}

export default CodeVerification