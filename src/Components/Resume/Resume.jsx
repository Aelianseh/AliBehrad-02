import Title from "../Title/Title"
import stylez from "./Resume.module.css"

function Resume() {
    return (
        <div className="container">
            <div className={stylez.title}>
                <Title title="work" />
                <div className={stylez.matn}>
                    <div className={stylez.matn}>
                        <div className={stylez.row}>
                            <div className={stylez.company}>ABOLFARES OIL REFINING</div>
                            <div className={stylez.duration}>2024 - Now</div>
                        </div>
                        <div className={stylez.row}>
                            <div className={stylez.company}>Enerchimi</div>
                            <div className={stylez.duration}>2020 - 2024</div>
                        </div>
                        <div className={stylez.row}>
                            <div className={stylez.company}>MAPNA</div>
                            <div className={stylez.duration}>2013 - 2020</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Resume