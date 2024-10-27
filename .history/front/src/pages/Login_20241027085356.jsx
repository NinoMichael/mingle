import { motion } from "framer-motion"
import { InputText } from "primereact/inputtext"
import { FloatLabel } from "primereact/floatlabel"
import { Password } from "primereact/password"
import { Button } from "primereact/button"
import { useState } from "react"
import { Divider } from 'primereact/divider'
import { Link } from 'react-router-dom'

import logo from '../assets/icons/logo.png'

import '../styles/login.css'

const Login = () => {
    const [identifiant, setIdentifiant] = useState('')
    const [mdp, setMdp] = useState('')

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
            <main className="grid grid-cols-2 mx-40 space-x-28 justify-center items-center mt-28">
                <section className="mx-12">
                    <motion.img src={logo} alt="Mingle" className="w-48 h-48 flex justify-center items-center mx-auto"
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }} />

                    <motion.p className="text-center mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.5 }}>Bienvenue à vous ! Veuillez vous connecter à votre compte</motion.p>

                    <div className="mt-12">
                        <Divider />
                        <motion.p className="text-center text-xs mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>Vous n'avez pas encore de compte ? <Link to="" className="font-semibold text-white no-underline">Inscrivez-vous</Link></motion.p>
                    </div>
                </section>

                <motion.form className="bg-blackAccent px-12 pt-8 pb-12 rounded shadow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                    <h1 className="font-poppins text-xl text-center">Connexion</h1>

                    <div className="p-inputgroup flex-1 mt-9">
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
                            <i className="pi pi-lock text-white"></i>
                        </span>
                        <FloatLabel>
                            <Password
                                value={mdp}
                                onChange={(e) => setMdp(e.target.value)}
                                className="font-poppins text-sm custom-password"
                            />
                            <label htmlFor="mdp">Mot de passe</label>
                        </FloatLabel>
                    </div>


                    <Button label="Se connecter" className="w-full text-white text-sm bg-blueSlate font-poppins mt-12 border border-none outline outline-none" />
                </motion.form>
            </main >
        </motion.div >
    )
}

export default Login