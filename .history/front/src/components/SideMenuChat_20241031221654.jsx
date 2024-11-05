import React, { useState, useEffect } from "react"

const SideMenuChat = () => {
    let chatItems = [
        {
            template: () => {
                return (
                    <div className="flex flex-row justify-between">
                        <i className="pi pi-bars"></i>
                    </div>
                )
            }
        },
        {
            separator: true
        },
    ]

    return (
        <section className="fixed float-left -mt-1 bg-blackAccent">

        </section>
    )
}

export default SideMenuChat