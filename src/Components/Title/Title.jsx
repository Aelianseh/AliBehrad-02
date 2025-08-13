import stylez from "./Title.module.css"
function Title(probs) {
    return (
        <div className={stylez.title}>
            <h3>
                {probs.title}
            </h3>
        </div>
    )
}
export default Title