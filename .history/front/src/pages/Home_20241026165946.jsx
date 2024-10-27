import React from 'react'
import { motion } from "framer-motion"

const Homepage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
            <main>

            </main>
        </motion.div>
    )
}

export default Homepage