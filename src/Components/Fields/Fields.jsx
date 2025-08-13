import stylez from "./Fields.module.css"
function Fields(probs) {
    // console.log(probs.result);
    return (
        <div className={stylez.fields}>
            
            <div className={stylez.fieldsDiv}>
                <p className={stylez.titrAx}>{probs.result.title}</p>
                <img src={probs.result.imageurl} alt="" />
                <p className={stylez.zireAx}>{probs.result.exprience} years of expriences</p>
            </div>
        </div>
    )
}
export default Fields