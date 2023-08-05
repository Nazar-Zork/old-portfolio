import styles from './TitleBlock.module.scss'

const TitleBlock = () =>{
    return(
        <div className={styles.blockTitle}>
            <h2 className={styles.blockTitle__heading}>About me</h2>
            <span className={styles.blockTitle__line}></span>
        </div>
    )
}

export default TitleBlock;