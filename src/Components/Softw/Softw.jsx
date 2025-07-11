import stylez from "./Softw.module.css"
function Softw(probs) {
    return (
        <div className={stylez.soft}>
            <div className={stylez.softZir}>
                <img src={probs.result.imageurl} alt="" />
            </div>
            <div className={stylez.softZirMatn}>
                <span>{probs.result.title}</span>
            </div>
        </div>
    )
}
export default Softw