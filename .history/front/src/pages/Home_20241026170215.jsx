import React from 'react'
import { motion } from "framer-motion"

import logo from '../assets/icons/logo.png'

const Homepage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
            <main className="grid grid-cols-2 mx-auto space-x-12 justify-center items-center">
                <section className="">
                    <img src={logo} alt="Mingle" width={400} height={400} className="w-48 h-40" />
                </section>

                <section>

                </section>
            </main>
        </motion.div>
    )
}

export default Homepage