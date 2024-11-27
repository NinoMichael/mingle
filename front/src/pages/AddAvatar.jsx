import { motion } from "framer-motion"
import { Avatar } from "primereact/avatar"
import { Button } from "primereact/button"

import logo from "../assets/icons/logo.png"
import userProfil from "../assets/icons/user.png"
import { FileUpload } from "primereact/fileupload"
import { useState } from "react"

import { useNavigate } from "react-router-dom"

const AddAvatar = () => {
    const [imgAvatar, setImgAvatar] = useState(null)
    const navigate = useNavigate()

    const onUpload = (e) => {
        const file = e.files[0]

        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                setImgAvatar(event.target.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    const handleValidate = async () => {
        navigate('/rule')
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.8 }}
        >
            <main className="grid grid-cols-2 mx-40 space-x-28 justify-center items-center mt-32">
                {/* Logo Section */}
                <motion.section
                    className="mx-12"
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.2 }}
                >
                    <motion.img
                        src={logo}
                        alt="Mingle"
                        className="w-48 h-48 flex justify-center items-center mx-auto"
                        variants={fadeInUp}
                        transition={{ duration: 0.8 }}
                    />
                    <motion.p
                        className="text-center mt-8"
                        variants={fadeInUp}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Veuillez ajouter une photo de profil pour votre compte
                    </motion.p>
                </motion.section>

                {/* Avatar and Description Section */}
                <div>
                    <motion.div
                        className="flex flex-row space-x-12"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        {/* Avatar Upload */}
                        <div className="relative">
                            <Avatar
                                image={imgAvatar || userProfil}
                                shape="circle"
                                size="xlarge"
                                className="w-28 h-28"
                            />
                            <FileUpload
                                mode="basic"
                                name="demo[]"
                                accept="image/*"
                                maxFileSize={1000000}
                                customUpload
                                auto
                                uploadHandler={onUpload}
                                className="invisible"
                            />
                            <i
                                className="pi pi-plus absolute bottom-8 left-24 cursor-pointer"
                                onClick={() =>
                                    document.querySelector(".p-fileupload-choose input").click()
                                }
                            ></i>
                        </div>

                        {/* Description */}
                        <motion.div
                            variants={fadeInUp}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <p>
                                Votre photo de profil va s'afficher dans toute conversation afin
                                que d'autres utilisateurs puissent vous reconnaître facilement.
                                Vous pouvez le modifier à tout moment.
                            </p>
                        </motion.div>
                    </motion.div>

                    <Button label="Plus tard" className="flex justify-center items-center mx-auto mt-12 bg-blueSlate text-white border border-none outline outline-none font-poppins text-sm px-36"
                        onClick={handleValidate} />
                </div>

            </main>
        </motion.div>
    )
}

export default AddAvatar
