import styles from "./Home.module.scss"

const Home = () =>{
    return(
        <div className={styles.home}>
            <div className={styles.home__inner}>
                <h2 className={styles.home__name}>Nazar Kharchuk</h2>
                <span className={styles.home__line}></span>
                <div className={styles.home__runningLabel}>
                    <h3 className={styles.home__staticWord}>FrontEnd</h3>
                    <span className={styles.home__dynamicWord}>Developer</span>
                </div>
                <button className={styles.home__getCV}>Get in Touch</button>
            </div>
        </div>
    )
}

export default Home;