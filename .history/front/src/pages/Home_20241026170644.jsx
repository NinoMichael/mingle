import React from 'react'
import { motion } from "framer-motion"

import logo from '../assets/icons/logo.png'

const Homepage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
            <main className="grid grid-cols-2 mx-auto space-x-12 justify-center items-center mt-36">
                <section className="flex flex-col items-center justify-center mx-auto">
                    <img src={logo} alt="Mingle" width={400} height={400} className="w-48 h-48" />
                    <p className="text-base text-center w-[30vw]">Bienvenue sur Mingle – l'application de messagerie sécurisée pour des conversations privées et confidentielles. Profitez d'une connexion instantanée avec vos proches, sans compromis sur la confidentialité et la sécurité.</p>
                </section>

                <section>

                </section>
            </main>
        </motion.div>
    )
}

export default Homepage