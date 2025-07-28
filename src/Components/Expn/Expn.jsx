import { useEffect, useState } from "react"
import Softw from "../Softw/Softw"
import Title from "../Title/Title"
import stylez from "./Expn.module.css"
import axios from "axios"

function Expn() {
    const [Soft, setSoft] = useState([])
    // console.log(Soft);
    useEffect(() => {
        axios.get("http://localhost:7000/logos").then((res) => {
            setSoft(res.data.data)
            // console.log(Soft.data.data);

        }).catch((err) => { console.log("errrrrrrroooorrr"); })


    }, [])
    return (
        <section id="my career">
            <div className="container">
                <div className={stylez.exp}>
                    <Title title="My Carrier" />
                    <div className={stylez.matn}>
                        <div className={stylez.divs}>
                            <p>I have 12 years of experience as a Piping Engineer, specializing in refinery and petrochemical projects. My expertise encompasses piping design, layout, and installation, with a strong focus on real-world engineering applications. My portfolio features detailed drawings, software modeling, and adherence to industry codes. As a committed Piping Engineer, I possess extensive experience in designing, modeling, and implementing piping systems for large-scale refinery and petrochemical facilities. My technical skills include creating isometric drawings, reviewing PIDs, selecting materials, and ensuring compliance with international standards such as: ASME B31.3, ASME B31.1, API 610 , API 650 , ... .</p>
                        </div>
                        <div className={stylez.divs}>
                            <p>Tools i work with:</p>
                            <div className={stylez.soft}>
                                {Soft.map((res) => (<Softw key={res.id} result={res} />))}
                            </div>
                            <p>I take pride in delivering safe, efficient, and code-compliant piping systems — whether for steam,
                                hydrocarbons, or process fluids.Let’s build better plants together.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>


    )
}
export default Expn