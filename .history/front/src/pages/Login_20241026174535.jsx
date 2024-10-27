import { motion } from "framer-motion"

const Login = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <main className="grid grid-cols-2 mx-40 space-x-24 justify-center items-center mt-20">
                <section>

                </section>

                <form className="bg-blackAccent ">
                    <div className="p-inputgroup flex-1">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-envelope"></i>
                        </span>
                        <FloatLabel>
                            <InputText type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="font-poppins text-sm" />
                            <label htmlFor="email">{t('emailAddress')}</label>
                        </FloatLabel>
                    </div>
                </form>
            </main >
        </motion.div >
    )
}

export default Login