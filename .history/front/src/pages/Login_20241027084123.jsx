import { motion } from "framer-motion"
import { InputText } from "primereact/inputtext"
import { FloatLabel } from "primereact/floatlabel"
import { Password } from "primereact/password"
import { Button } from "primereact/button"
import { useState } from "react"
import { Divider } from 'primereact/divider'

import logo from '../assets/icons/logo.png'

import '../styles/login.css'

const Login = () => {
    const [identifiant, setIdentifiant] = useState('')
    const [mdp, setMdp] = useState('')

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <main className="grid grid-cols-2 mx-44 space-x-20 justify-center items-center mt-20">
                <section className="mx-12">
                    <img src={logo} alt="Mingle" className="w-48 h-48 flex justify-center items-center mx-auto" />

                    <p className="text-center mt-8">Bienvenue à vous ! Veuillez vous connecter à votre compte</p>

                    <div className="mt-12">
                        <Divider />
                    </div>
                </section>

                <form className="bg-blackAccent px-12 pt-8 pb-12 rounded shadow">
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
                </form>
            </main >
        </motion.div >
    )
}

export default Login