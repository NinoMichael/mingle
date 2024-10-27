import React from 'react'
import { motion } from "framer-motion"
import { Divider } from "primereact/divider"
import { Button } from "primereact/button"

import logo from '../assets/icons/logo.png'
import promo from '../assets/img-mingle.png'

const Homepage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <main className="grid grid-cols-2 mx-40 space-x-24 justify-center items-center mt-20">
                <motion.section
                    className="flex flex-col items-center justify-center mx-auto"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.img
                        src={logo}
                        alt="Mingle"
                        width={400}
                        height={400}
                        className="w-48 h-48"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                    <motion.p
                        className="text-center w-[35vw] mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                    >
                        Bienvenue sur Mingle – L'application de messagerie sécurisée pour des conversations privées et confidentielles. Profitez d'une connexion instantanée avec vos proches, sans compromis sur la confidentialité et la sécurité.
                    </motion.p>

                    <div className="flex flex-row justify-between space-x-12 mt-6">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <Button label="S'inscrire" className="bg-blackAccent font-poppins text-sm border border-none outline outline-none shadow text-white px-8" />
                        </motion.div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <Button label="Se connecter" className="bg-blueSlate font-poppins text-sm border border-none outline outline-none shadow text-white px-8" />
                        </motion.div>
                    </div>

                    <Divider className='mt-12' />
                    <motion.span
                        className="text-[0.7em] mt-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 1.5 }}
                    >
                        Copyright 2024 - Tous droits réservés
                    </motion.span>
                </motion.section>

                <motion.section
                    className="flex flex-col items-center justify-center mx-auto"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.img
                        src={promo}
                        alt="Promo de Mingle"
                        width={400}
                        height={400}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    />
                </motion.section>
            </main>
        </motion.div>
    )
}

export default Homepage
