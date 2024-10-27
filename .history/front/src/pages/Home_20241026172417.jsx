import React from 'react'
import { motion } from "framer-motion"
import { Divider } from "primereact/divider"
import { Button } from "primereact/button"

import logo from '../assets/icons/logo.png'
import promo from '../assets/img-mingle.png'

const Homepage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
            <main className="grid grid-cols-2 mx-40 space-x-24 justify-center items-center mt-28">
                <section className="flex flex-col items-center justify-center mx-auto">
                    <img src={logo} alt="Mingle" width={400} height={400} className="w-48 h-48" />
                    <p className="text-center w-[35vw] mt-6">Bienvenue sur Mingle – L'application de messagerie sécurisée pour des conversations privées et confidentielles. Profitez d'une connexion instantanée avec vos proches, sans compromis sur la confidentialité et la sécurité.</p>

                    <div className="flex flex-row justify-between space-x-12 mt-6">
                        <Button label="S'inscrire" className="bg-blueSlate font-poppins text-sm border border-none outline outline-none shadow text-white" />
                        <Button label="Se connecter" className="bg-blueSlate font-poppins text-sm border border-none outline outline-none shadow text-white" />
                    </div>

                    <Divider className='mt-4' />
                    <span className="text-[0.7em]">Coypright 2024 - Tous droits réservés</span>
                </section>

                <section className="flex flex-col items-center justify-center mx-auto">
                    <img src={promo} alt="Promo de Mingle" width={400} height={400} />
                </section>
            </main>
        </motion.div>
    )
}

export default Homepage