import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Divider } from "primereact/divider"
import { Button } from "primereact/button"
import { useNavigate } from 'react-router-dom'

import logoSrc from '../assets/icons/logo.png'
import promoSrc from '../assets/img-mingle.png'

const Homepage = () => {
    const navigate = useNavigate()
    const [imagesLoaded, setImagesLoaded] = useState({ logo: false, promo: false })

    useEffect(() => {
        const preloadImage = (src, key) => {
            const img = new Image()
            img.src = src
            img.onload = () => setImagesLoaded(prev => ({ ...prev, [key]: true }))
        }

        preloadImage(logoSrc, 'logo')
        preloadImage(promoSrc, 'promo')
    }, [])

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <main className="grid grid-cols-2 mx-40 space-x-24 justify-center items-center mt-20">
                <motion.section className="flex flex-col items-center justify-center mx-auto"
                    initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                    {imagesLoaded.logo ? (
                        <motion.img src={logoSrc} alt="Mingle" width={400} height={400} className="w-48 h-48"
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }} />
                    ) : (
                        <div className="w-48 h-48 bg-gray-200 animate-pulse"></div>
                    )}

                    <motion.p className="text-center w-[35vw] mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.5 }}>
                        Bienvenue sur Mingle – L'application de messagerie sécurisée pour des conversations privées et confidentielles. Profitez d'une connexion instantanée avec vos proches, sans compromis sur la confidentialité et la sécurité.
                    </motion.p>

                    <div className="flex flex-row justify-between space-x-12 mt-6">
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}>
                            <Button label="S'inscrire" className="bg-blackAccent font-poppins text-sm border border-none outline outline-none shadow text-white px-8" />
                        </motion.div>

                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }}>
                            <Button label="Se connecter" className="bg-blueSlate font-poppins text-sm border border-none outline outline-none shadow text-white px-8"
                                onClick={() => navigate('/login')} />
                        </motion.div>
                    </div>

                    <Divider className='mt-12' />
                    <motion.span className="text-[0.7em] mt-5"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.5 }}>
                        Copyright 2024 - Tous droits réservés
                    </motion.span>
                </motion.section>

                <motion.section className="flex flex-col items-center justify-center mx-auto"
                    initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}
                >
                    {imagesLoaded.promo ? (
                        <motion.img src={promoSrc} alt="Promo de Mingle" width={400} height={400}
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
                        />
                    ) : (
                        <div className="w-48 h-48 bg-gray-200 animate-pulse"></div>
                    )}
                </motion.section>
            </main>
        </motion.div>
    )
}

export default Homepage
