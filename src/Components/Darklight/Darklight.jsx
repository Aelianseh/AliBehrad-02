import { useEffect, useState } from "react"
import style from "./Darklight.module.css"
import { FaMoon, FaSun } from "react-icons/fa"
function Darklight() {
    const [islight, setIslight] = useState(false)
    const lightToggle = () => {
        setIslight(!islight)
        console.log(islight);
    };

    useEffect(() => {

        if (islight) {
            document.body.classList.add("dark");
            console.log(islight);

        } else {
            document.body.classList.remove("dark");
        }
    }, [islight])


    return (
        <div className={style.wrapper}>
            <button onClick={lightToggle} className={`${islight ? style.active : style.noactive}`}>
                {!islight ? <FaSun /> : <FaMoon />}</button>
        </div>
    )
}
export default Darklight