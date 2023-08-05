import styles from './Experience.module.scss';

const Experience = ({info, title}) =>{
    return(
        <div className={styles.experience}>
            <div className="blockTitle">
                <h2 className="blockTitle__heading">{title}</h2>
                <span className="blockTitle__line"></span>
            </div>
            <div className={styles.experience__worksList}>
                {
                    info.map((item, id) =>(
                        <div className={styles.experience__worksItem} key={id}>
                            <div className={styles.experience__workTimeWrapper}>
                                <span className={styles.experience__workTime}>{item.time}</span>
                            </div>  
                            <div className={styles.experience__workPlace}>
                                <h3 className={styles.experience__experienceHeading}>{item.company}</h3>
                                <span className={styles.experience__experienceOtherInfo}>{item.position}</span>
                            </div>
                        </div> 
                    ))
                }

                {/* <div className={styles.experience__worksItem}>
                    <div className={styles.experience__workTimeWrapper}>
                        <span className={styles.experience__workTime}>2016-2017</span>
                    </div>  
                    <div className={styles.experience__workPlace}>
                        <h3 className={styles.experience__experienceHeading}>Canonica</h3>
                        <span className={styles.experience__experienceOtherInfo}>Frone-end developer</span>
                    </div>
                </div> 
                <div className={styles.experience__worksItem}>
                    <div className={styles.experience__workTimeWrapper}>
                        <span className={styles.experience__workTime}>2016-2017</span>
                    </div>  
                    <div className={styles.experience__workPlace}>
                        <h3 className={styles.experience__experienceHeading}>Canonica</h3>
                        <span className={styles.experience__experienceOtherInfo}>Frone-end developer</span>
                    </div>
                </div>  */}
            </div>
        </div>
    )
}

export default Experience;