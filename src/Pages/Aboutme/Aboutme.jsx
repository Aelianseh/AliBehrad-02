import Header from "../../Components/Header/Header"
import imgx from "./../../Assets/IMGs/AliBehrad.jpg"
function Aboutme() {
    return (
        <div>
            <Header />
            <div className="container">
                <h1>About Me</h1>
                <h3>Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Esse quas sit earum expedita
                    modi quis veritatis perspiciatis ipsa? Accusamus explicabo soluta
                    deserunt veniam nam reiciendis ut minima quia sunt! Aliquam.</h3>
                <img src={imgx} alt="" />

            </div>
        </div>
    )
}
export default Aboutme