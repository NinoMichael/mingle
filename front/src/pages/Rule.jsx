import { useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getDetailUser } from "../API/ContactService"

import logo from "../assets/icons/logo.png"
import securityKey from "../assets/security-key.png"
import addFriend from "../assets/add-friend.png"

const Rule = () => {
    const [publicKey, setPublicKey] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getDetailUser(localStorage.getItem('identifiant'), localStorage.getItem('email'), localStorage.getItem('numero'))
                setPublicKey(data.public_key)
            } catch (error) {
                console.error("Erreur lors de la récupération de l'utilisateur:", error)
            }
        }
        fetchUser()
    }, [])

    const handleReturn = () => {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <motion.div initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.8 }}>
            <main className="flex flex-row mx-24 space-x-12 justify-center items-center mt-32">
                <section className="mx-6 -mt-20">
                    <img src={logo} alt="Mingle" className="w-48 h-48 flex justify-center items-center mx-auto" />

                    <motion.p className="text-center mt-8">
                        Vous y êtes presque !
                    </motion.p>

                </section>

                <motion.div className="w-[45vw]">
                    <div className="flex flex-row space-x-12">
                        <div className="mt-5">
                            <img src={securityKey} alt="key" className="w-28 h-24" />
                        </div>
                        <div>
                            <p className="text-white">Pour garantir la sécurité de votre compte, un système de chiffrement par une paire de clé vous a été attribué. Votre clé publique peut être partagée avec d'autres utilisateurs pour qu'ils puissent vous envoyer des messages</p>
                            <div className="flex flex-row space-x-4 mt-2">
                                <span>Votre clé publique : </span>
                                <InputText disabled value={publicKey} className="font-poppins text-sm border-white bg-transparent placeholder:text-white text-white -mt-1 h-8" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row space-x-12 mt-8">
                        <div className="mt-5">
                            <img src={addFriend} alt="key" className="w-28 h-24" />
                        </div>
                        <div className="mt-6">
                            <p className="text-white">Explorez nos fonctionnalités, comme les discussions de groupe et le partage de fichiers. Ajoutez vos contacts et commencez une conversation.</p>
                        </div>
                    </div>

                    <Button label="Terminer" className="flex justify-center items-center ms-44 mt-8 bg-blueSlate text-white border border-none outline outline-none font-poppins text-sm px-36"
                        onClick={handleReturn} />
                </motion.div>
            </main>

        </motion.div>
    )
}

export default Rule