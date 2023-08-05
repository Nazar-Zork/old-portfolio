import styles from './Language.module.scss'

const Language = () =>{
    return(
        <div className={styles.language}>
            <div className="blockTitle">
                <h2 className="blockTitle__heading">Language</h2>
                <span className="blockTitle__line"></span>
            </div>
        </div>
    )
}

export default Language