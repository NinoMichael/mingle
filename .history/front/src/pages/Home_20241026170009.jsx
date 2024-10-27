import React from 'react'
import { motion } from "framer-motion"

const Homepage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
            <main className="grid grid-cols-2 mx-16">

            </main>
        </motion.div>
    )
}

export default Homepage