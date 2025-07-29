import stylez from "./Intr.module.css"
import Title from "../Title/Title"
import { useEffect, useState } from "react"
import axios from "axios"
import Fields from "../../Components/Fields/Fields"


function Intr() {
    const [Fild, setFild] = useState([])
    // console.log(Fild);
    useEffect(() => {
        axios.get("http://localhost:8000/interests").then((ints) => {
            // console.log(ints.data.data);
            setFild(ints.data.data)
        }).catch((err) => { console.log("errrrrrrroooorrr"); })

    }, []);
    return (
        <section id="fields">
            <div className="container">
                <div className={stylez.fild}>
                    <Title title="Field of Interests" />
                    <div className={stylez.home}>
                        {Fild.map((res) => (<Fields key={res.id} result={res} />))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Intr