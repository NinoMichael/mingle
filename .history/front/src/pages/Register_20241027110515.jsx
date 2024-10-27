import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FloatLabel } from "primereact/floatlabel"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { Divider } from "primereact/divider"
import { Link } from "react-router-dom"

import logo from '../assets/icons/logo.png'

const Register = () => {
    const [nom, setNom] = useState('')
    const [identifiant, setIdentifiant] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [logoLoaded, setLogoLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.src = logo
        img.onload = () => setLogoLoaded(true)
    }, [])

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.8 }} variants={fadeInUp}>
            <main className="grid grid-cols-2 mx-40 space-x-28 justify-center items-center mt-28">
                <section className="mx-12">
                    {logoLoaded ? (
                        <img src={logo} alt="Mingle" className="w-48 h-48 flex justify-center items-center mx-auto" />
                    ) : (
                        <div className="w-48 h-48 bg-gray-200 animate-pulse"></div>
                    )}

                    <motion.p className="text-center mt-8" variants={fadeInUp} transition={{ delay: 0.2 }}>Bienvenue à vous ! Veuillez créer votre compte personnel</motion.p>

                    <div className="mt-12">
                        <Divider />
                        <motion.p className="text-center text-xs mt-4" variants={fadeInUp} transition={{ delay: 0.4 }}>
                            Vous avez déjà un compte ? <Link to="" className="font-semibold text-white no-underline">Connectez-vous</Link>
                        </motion.p>
                    </div>
                </section>

                <motion.form className="bg-blackAccent px-12 pt-8 pb-12 rounded shadow" variants={fadeInUp} transition={{ delay: 0.5 }}>
                    <h1 className="font-poppins text-xl text-center">Inscription</h1>

                    <div className="p-inputgroup flex-1 mt-9">
                        <span className="p-inputgroup-addon bg-transparent">
                            <i className="pi pi-user text-white"></i>
                        </span>
                        <FloatLabel>
                            <InputText value={nom} onChange={(e) => setNom(e.target.value)} className="font-poppins text-sm border-white bg-transparent placeholder:text-white text-white" />
                            <label htmlFor="nom">Nom complet</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1 mt-8">
                        <span className="p-inputgroup-addon bg-transparent">
                            <i className="pi pi-user text-white"></i>
                        </span>
                        <FloatLabel>
                            <InputText value={identifiant} onChange={(e) => setIdentifiant(e.target.value)} className="font-poppins text-sm border-white bg-transparent placeholder:text-white text-white" />
                            <label htmlFor="identifiant">Identifiant</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1 mt-8">
                        <span className="p-inputgroup-addon bg-transparent">
                            <i className="pi pi-envelope text-white"></i>
                        </span>
                        <FloatLabel>
                            <InputText type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="font-poppins text-sm border-white bg-transparent placeholder:text-white text-white" />
                            <label htmlFor="email">Adresse e-mail</label>
                        </FloatLabel>
                    </div>



                    <Button label="Valider" className="w-full text-white text-sm bg-blueSlate font-poppins mt-12 border border-none outline outline-none" />
                </motion.form>
            </main>
        </motion.div>
    )
}

export default Register