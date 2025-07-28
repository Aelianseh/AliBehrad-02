import { useEffect, useState } from "react"
import Header from "../../Components/Header/Header"
import Intro from "../../Components/Intro/Intro"
import Title from "../../Components/Title/Title"
import stylez from "./Home.module.css"
import axios from "axios"
import Fouoter from "../../Components/Footer/Fouoter"
import Expn from "../../Components/Expn/Expn"
import Resume from "../../Components/Resume/Resume"
import Navbar from "../../Components/Navbar/Navbar"
import Nali from "../../Components/Nali/Nali"
import Intr from "../../Components/Intr/Intr"
function Home() {
    
    return (
        <section id="fields of interests">
            <div>
                <Navbar />
                <Header />
                <Intro />
                <Intr />
                <Expn />
                <Resume />
                <Fouoter />
            </div>
        </section>


    )
}
export default Home