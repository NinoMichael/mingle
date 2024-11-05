import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FloatLabel } from "primereact/floatlabel"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useNavigate } from "react-router-dom"
import { Calendar } from 'primereact/calendar'

import logo from '../assets/icons/logo.png'

const InfoRegister = () => {
    const [nom, setNom] = useState('')
    const [identifiant, setIdentifiant] = useState('')
    const [birth, setBirth] = useState(null)
    const [logoLoaded, setLogoLoaded] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const img = new Image()
        img.src = logo
        img.onload = () => setLogoLoaded(true)
    }, [])

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    const handleValidate = () => {
        navigate('')
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

                    <motion.p className="text-center mt-8" variants={fadeInUp} transition={{ delay: 0.2 }}>
                        Veuillez fournir vos informations personnelles
                    </motion.p>

                </section>

                <motion.form className="bg-blackAccent px-12 pt-8 pb-12 rounded shadow" variants={fadeInUp} transition={{ delay: 0.5 }}>
                    <h1 className="font-poppins text-xl text-center">Inscription</h1>

                    <div className="p-inputgroup flex-1 mt-8">
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
                            <i className="pi pi-calendar text-white"></i>
                        </span>
                        <FloatLabel>
                            <Calendar inputId="birth_date" value={birth} onChange={(e) => setBirth(e.value)} />
                            <label htmlFor="birth_date">Date de naissance</label>
                        </FloatLabel>
                    </div>

                    <Button label="Valider" className="w-full text-white text-sm bg-blueSlate font-poppins mt-12"
                        onClick={handleValidate} />
                </motion.form>
            </main>

        </motion.div>
    )
}

export default InfoRegister
