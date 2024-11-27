import { motion } from "framer-motion"
import { Button } from "primereact/button"

import logo from "../assets/icons/logo.png"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Welcome = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const initialAnimation = location.state?.animate || false

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <motion.div
            initial={initialAnimation ? "hidden" : "visible"}
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.8 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <main className="flex flex-col mx-40 justify-center items-center mt-20">
                <motion.section
                    className="mx-12"
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.2 }} // Décalage temporel pour les enfants
                    variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                >
                    <motion.img
                        src={logo}
                        alt="Mingle"
                        className="w-48 h-48 flex justify-center items-center mx-auto"
                        variants={fadeInUp}
                        transition={{ duration: 0.8 }}
                    />
                    <motion.h1
                        className="font-poppins text-xl mt-5 text-center"
                        variants={fadeInUp}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Bienvenue à vous {localStorage.getItem('identifiant')} !
                    </motion.h1>
                    <motion.p
                        className="text-center mt-12 w-[35vw]"
                        variants={fadeInUp}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Vous êtes désormais prêt à explorer une expérience de messagerie instantanée sécurisée et fluide.
                    </motion.p>
                </motion.section>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <Button
                        label="Suivant"
                        className="flex justify-center items-center mx-auto mt-12 bg-blueSlate text-white border border-none outline outline-none font-poppins text-sm px-36"
                        onClick={() => navigate('/add-avatar')}
                    />
                </motion.div>
            </main>
        </motion.div>
    )
}

export default Welcome
