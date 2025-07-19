import Axx from "../Axx/Axx";
import style from "./Educ.module.css"
function Educ() {
    return (
        <div className={style.backcolor}>
            <div className="container">
                <div className={style.educ}>
                    <div className={style.left}>
                        <Axx />
                        <div className={style.leftp}>
                            Birth =	1986
                        </div>
                    </div>
                    <div className={style.right}>
                        <div className={style.rightf}>
                            <h3>Master: Materials and Metallurgical Engineering</h3>
                            <h4>Ferdowsi university of Mashhad</h4>
                        </div>
                        <div className={style.rights}>
                            <h3>Bachelor: Materials and Metallurgical Engineering</h3>
                            <h4>Shiraz university</h4>
                        </div>
                        <div className={style.rightt}>
                            <h3>Language:</h3>
                            <h4>English & farsi</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Educ;