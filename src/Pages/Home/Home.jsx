import { useEffect, useState } from "react"
import Fields from "../../Components/Fields/Fields"
import Header from "../../Components/Header/Header"
import Intro from "../../Components/Intro/Intro"
import Title from "../../Components/Title/Title"
import stylez from "./Home.module.css"
import axios from "axios"
import Fouoter from "../../Components/Footer/Fouoter"
import Expn from "../../Components/Expn/Expn"
import Resume from "../../Components/Resume/Resume"
function Home() {
    const [Fild, setFild] = useState([])
    // console.log(Fild);
    useEffect(() => {
        axios.get("http://localhost:8000/interests").then((ints) => {
            // console.log(ints.data.data);
            setFild(ints.data.data)
        }).catch((err) => { console.log("errrrrrrroooorrr"); })

    }, []);
    return (
        <div>
            <Header />
            {/* <Title title="Personal Information" /> */}
            <Intro />

            <div className="container">
                <div className={stylez.fild}>
                    <Title title="Field of Interests" />
                    <div className={stylez.home}>
                        {Fild.map((res) => (<Fields key={res.id} result={res} />))}
                    </div>
                </div>
            </div>
            <Expn />

            <Resume/>

            {/* <Title title="Contact Info." /> */}
            <Fouoter />

        </div>
    )
}
export default Home