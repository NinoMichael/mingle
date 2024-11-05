import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FloatLabel } from "primereact/floatlabel"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { Divider } from "primereact/divider"
import { Link, useNavigate } from "react-router-dom"
import { Dropdown } from "primereact/dropdown"
import logo from '../assets/icons/logo.png'

const countries = [
    { code: 'MG', dialCode: '+261', flag: 'https://flagcdn.com/mg.svg' },
    { code: 'FR', dialCode: '+33', flag: 'https://flagcdn.com/fr.svg' },
    { code: 'DE', dialCode: '+49', flag: 'https://flagcdn.com/de.svg' },
    { code: 'IT', dialCode: '+39', flag: 'https://flagcdn.com/it.svg' },
]

const InfoRegister = () => {
    const [nom, setNom] = useState('')
    const [identifiant, setIdentifiant] = useState('')
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

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img
                    alt={option.code}
                    src={option.flag}
                    className={`mr-2 w-6 h-4`}
                />
                <span className="font-poppins text-white">{option.dialCode}</span>
            </div>
        )
    }

    const selectedCountryTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.code} src={option.flag} className={`mr-2 w-6 h-4`} />
                <span>{option.dialCode}</span>
            </div>
        )
    }

    const handleValidate = () => {
        navigate('/code-verification')
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
                        Bienvenue à vous ! Veuillez créer votre compte personnel
                    </motion.p>

                    <div className="mt-12">
                        <Divider />
                        <motion.p className="text-center text-xs mt-4" variants={fadeInUp} transition={{ delay: 0.4 }}>
                            Vous avez déjà un compte ? <Link to="" className="font-semibold text-white no-underline">Connectez-vous</Link>
                        </motion.p>
                    </div>
                </section>

                <motion.form className="bg-blackAccent px-12 pt-8 pb-12 rounded shadow" variants={fadeInUp} transition={{ delay: 0.5 }}>
                    <h1 className="font-poppins text-xl text-center">Inscription</h1>

                    <div className="p-inputgroup flex-1 mt-8">
                        <span className="p-inputgroup-addon bg-transparent">
                            <i className="pi pi-envelope text-white"></i>
                        </span>
                        <FloatLabel>
                            <InputText type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="font-poppins text-sm border-white bg-transparent placeholder:text-white text-white" />
                            <label htmlFor="email">Adresse e-mail</label>
                        </FloatLabel>
                    </div>

                    <div className="p-inputgroup flex-1 mt-10">
                        <Dropdown value={country} options={countries} onChange={(e) => setCountry(e.value)}
                            optionLabel="name" itemTemplate={countryOptionTemplate} valueTemplate={selectedCountryTemplate}
                            className="w-10 font-poppins text-xs bg-transparent border-white" panelClassName="bg-blackAccent text-xs font-poppins text-white"
                        />
                        <FloatLabel>
                            <InputText
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full font-poppins bg-transparent text-sm border-white text-white"
                            />
                            <label htmlFor="phoneNumber">Numéro de téléphone</label>
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
