import styles from "./Fouoter.module.css";
function Fouoter() {
    return (
        <div>
            <div className={styles.fouoter}>
                <div className={styles.left}>
                    <a href="https://www.linkedin.com/in/ali-behrad-49098b93/"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0A66C2">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3v-10h3v1.429c.737-.883 1.847-1.429 3-1.429 2.21 0 4 1.79 4 4v6z" />
                    </svg> linkedin </a>
                </div>
                <div className={styles.Right}>
                    <li>gmail: ali.behrad.pi@gmail.com</li>
                </div>
            </div>
        </div>
    )
}
export default Fouoter;
