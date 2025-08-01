import Header from "../../Components/Header/Header"
import Intro from "../../Components/Intro/Intro"
import Fouoter from "../../Components/Footer/Fouoter"
import Expn from "../../Components/Expn/Expn"
import Resume from "../../Components/Resume/Resume"
import Navbar from "../../Components/Navbar/Navbar"
import Intr from "../../Components/Intr/Intr"
import Darklight from "../../Components/Darklight/Darklight"
function Home() {

    return (
        <section>
            <div>
                <Navbar />
                <Darklight />
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