import { motion } from "framer-motion"

const HomeRegister = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
            <p>Bonjour</p>
        </motion.div>
    )
}

export default HomeRegister