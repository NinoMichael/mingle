import { motion } from "framer-motion"
import { InputText } from "primereact/inputtext"
import { FloatLabel } from "primereact/floatlabel"
import { Password } from "primereact/password"
import { Button } from "primereact/button"
import { useState, useEffect } from "react"
import { Divider } from 'primereact/divider'
import { Link, useNavigate } from 'react-router-dom'
import AuthService from '../API/AuthService'
import { Toast } from 'primereact/toast'
import { useRef } from 'react'

import logo from '../assets/icons/logo.png'
import '../styles/auth.css'

const Login = () => {
    const navigate = useNavigate()
    const toast = useRef(null)

    const [identifiant, setIdentifiant] = useState('')
    const [mdp, setMdp] = useState('')
    const [logoLoaded, setLogoLoaded] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.src = logo
        img.onload = () => setLogoLoaded(true)
    }, [])

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)

        setTimeout(async () => {
            setLoading(false)
            try {
                const response = await AuthService.login(identifiant, mdp)
                console.log("Tokens reçus :", response)

                navigate("/chat-discussion")
            } catch (error) {
                console.log(error)
                toast.current.show({
                    severity: 'error',
                    summary: 'Authentification échouée',
                    detail: 'Identifiant ou mot de passe incorrect',
                    life: 3000
                })
            }
        }, 2000)
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

                    <motion.p className="text-center mt-8" variants={fadeInUp} transition={{ delay: 0.2 }}>Bienvenue à vous ! Veuillez vous connecter à votre compte</motion.p>

                    <div className="mt-12">
                        <Divider />
                        <motion.p className="text-center text-xs mt-4" variants={fadeInUp} transition={{ delay: 0.4 }}>
                            Vous n'avez pas encore de compte ? <Link to="/register" className="font-semibold text-white no-underline">Inscrivez-vous</Link>
                        </motion.p>
                    </div>
                </section>

                <motion.form onSubmit={handleLogin} className="bg-blackAccent px-12 pt-8 pb-12 rounded shadow" variants={fadeInUp} transition={{ delay: 0.5 }}>
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

                    <Button type="submit" loading={loading} label="Se connecter" className="w-full text-white text-sm bg-blueSlate font-poppins mt-12 border border-none outline outline-none" />
                </motion.form>
            </main>

            <Toast ref={toast} position="bottom-right" className="font-poppins text-xs absolute mt-52 top-52 right-1" />
        </motion.div>
    )
}

export default Login
