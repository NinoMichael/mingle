import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FloatLabel } from "primereact/floatlabel"
import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"
import { Password } from "primereact/password"
import { createUser } from "../API/ContactService"

import logo from "../assets/icons/logo.png"
import SignupDialog from "../components/SignupDialog"

const PasswordRegister = () => {
    const [mdp, setMdp] = useState("")
    const [mdpConfirm, setMdpConfirm] = useState("")
    const [logoLoaded, setLogoLoaded] = useState(false)
    const [visibleSignup, setVisibleSignup] = useState(false)

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

    const handleValidate = async (e) => {
        e.preventDefault()

        if (mdp === mdpConfirm) {
            const formData = new FormData()
            formData.append("nom", localStorage.getItem("nom"))
            formData.append("identifiant", localStorage.getItem("identifiant"))
            formData.append("numero", localStorage.getItem("numero"))
            formData.append("email", localStorage.getItem("email"))
            formData.append("mdp", mdp)
            formData.append("location", localStorage.getItem("location"))

            await createUser(formData)
            setVisibleSignup(true)

            setTimeout(() => {
                setVisibleSignup(false)
                navigate("/welcome", { state: { animate: true } })
            }, 5000)
        }
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
        >
            <main className="grid grid-cols-2 mx-40 space-x-28 justify-center items-center mt-28">
                <section className="mx-12">
                    {logoLoaded ? (
                        <img src={logo} alt="Mingle" className="w-48 h-48 flex justify-center items-center mx-auto" />
                    ) : (
                        <div className="w-48 h-48 bg-gray-200 animate-pulse"></div>
                    )}

                    <motion.p className="text-center mt-8" variants={fadeInUp} transition={{ delay: 0.2 }}>
                        Veuillez entrer un mot de passe fort pour votre compte
                    </motion.p>
                </section>

                <motion.form className="bg-blackAccent px-12 pt-8 pb-12 rounded shadow" variants={fadeInUp} transition={{ delay: 0.5 }}>
                    <h1 className="font-poppins text-xl text-center">Inscription</h1>

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

                    <div className="p-inputgroup flex-1 mt-8">
                        <span className="p-inputgroup-addon bg-transparent">
                            <i className="pi pi-lock text-white"></i>
                        </span>
                        <FloatLabel>
                            <Password
                                value={mdpConfirm}
                                onChange={(e) => setMdpConfirm(e.target.value)}
                                className="font-poppins text-sm custom-password"
                            />
                            <label htmlFor="mdp">Confirmer mot de passe</label>
                        </FloatLabel>
                    </div>

                    <Button
                        label="Valider"
                        className="w-full text-white text-sm bg-blueSlate font-poppins mt-12"
                        onClick={handleValidate}
                    />
                </motion.form>
            </main>

            <SignupDialog visibleSignup={visibleSignup} setVisibleSignup={setVisibleSignup} />
        </motion.div>
    )
}

export default PasswordRegister
