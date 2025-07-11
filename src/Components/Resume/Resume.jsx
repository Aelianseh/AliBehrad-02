import Title from "../Title/Title"
import stylez from "./Resume.module.css"

function Resume() {
    return (
        <div className="container">
            <div className={stylez.title}>
                <Title title="work" />
                <div className={stylez.matn}>
                    <p><span>ABOLFARES OIL REFINING COMPANY</span>  ------------------------- 2024-Now</p>
                    <p><span>Enerchimi</span> ---------------------------------------------- 2020-2024</p>
                    <p> <span>MAPNA</span> -------------------------------------------------- 2013-2020</p>
                </div>
            </div>

        </div>
    )
}
export default Resume