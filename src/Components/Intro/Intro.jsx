import Axx from "../Axx/Axx"
import stylez from "./Intro.module.css"

function Intro() {
    return (
        <div className="container">
            <div className={stylez.flx}>
                <div className={stylez.left}>
                    <Axx />
                </div>
                <div className={stylez.right}>
                    <p>
                        Hi, I'm Ali Behrad, Piping Engineer,
                        Thanks for checking out my portfolio! Whether you’re
                        a recruiter, fellow engineer, friend, or lost stranger,
                        I hope you enjoy the ride.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Intro