import { motion } from "framer-motion"

const Login = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <main className="grid grid-cols-2 mx-40 space-x-24 justify-center items-center mt-20">
                <section>

                </section>

                <form className="bg-blackAccent ">

                </form>
            </main >
        </motion.div >
    )
}

export default Login