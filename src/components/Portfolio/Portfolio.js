import styles from './Portfolio.module.scss'


import pic from "../../assets/img/dentalHT.jpg"

const Portfolio = () =>{
    return(
        <div className={styles.portfolio}>
            <div className="blockTitle">
                <h2 className="blockTitle__heading">Portfolio</h2>
                <span className="blockTitle__line"></span>
            </div>
            <ul className={styles.portfolio__filterList}>
                <li className={styles.portfolio__filterItem}>All</li>
                <li className={styles.portfolio__filterItem}>ReactJS</li>
                <li className={styles.portfolio__filterItem}>NextJS</li>
                <li className={styles.portfolio__filterItem}>WordPress</li>
                <li className={styles.portfolio__filterItem}>HTML</li>
            </ul>
            <div className={styles.portfolio__projectList}>
                <div className={styles.portfolio__projectItem}>
                    <div className={styles.portfolio__projectPhoto}>
                        <img className={styles.portfolio__projectImg} src={pic} alt="" />
                    </div>
                    <div className={styles.portfolio__projectShortDescription}>
                        <h3 className={styles.portfolio__projectName}>
                            Kelly Hookin
                        </h3>
                        <span className={styles.portfolio__projectTechnology}>React</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;