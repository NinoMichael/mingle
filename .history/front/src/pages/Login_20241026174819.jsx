import { motion } from "framer-motion"
import { InputText } from "primereact/inputtext"
import { FloatLabel } from "primereact/floatlabel"
import { useState } from "react"

const Login = () => {
    const [identifiant, setIdentifiant] = useState('')

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <main className="grid grid-cols-2 mx-40 space-x-24 justify-center items-center mt-20">
                <section>

                </section>

                <form className="bg-blackAccent p-6 rounded shadow">
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <FloatLabel>
                            <InputText value={identifiant} onChange={(e) => setIdentifiant(e.target.value)} className="font-poppins text-sm" />
                            <label htmlFor="identifiant">Identifiant</label>
                        </FloatLabel>
                    </div>
                </form>
            </main >
        </motion.div >
    )
}

export default Login