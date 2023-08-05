import styles from './AboutMe.module.scss';

const aboutMeInfo = [
    {
        key: 'Mail',
        value: 'kharchuk.nazar1201@gmail.com'
    },
    {
        key: 'Telegram',
        value: '@Nazar_Kharchuk'
    },
    {
        key: 'Instagram',
        value: '@nazar_zork'
    }
]

const AboutMe = () =>{
    return(
        <div className={styles.aboutMe}>
            <div className="blockTitle">
                <h2 className="blockTitle__heading">About me</h2>
                <span className="blockTitle__line"></span>
            </div>
            <div className={styles.aboutMe__contentWrapper}>
                <div className={` ${styles.aboutMe__contentItem} ${styles.aboutMe__photo}`}>
                </div>
                <div className={`${styles.aboutMe__contentItem} ${styles.aboutMe__myDescriptionWrapper}`}>
                    <div className={styles.aboutMe__myDescription}>
                        <p className={styles.aboutMe__descriptionParagraph}>Меня зовут Назар. Мне 22 года. Работаю во FrontEnd уже более 2,5 лет. В совершенстве владею такими технологиями как HTML, CSS/SCSS, JS/JQ. На хорошем уровне знаю React/Redux, WordPress. Своим главным преимуществом считаю то, что я люблю то чем занимаюсь и не считаю это за работу. Скорее всего этот тот случай "Найди себе работу по душе и никогда не будешь работать".</p>

                    </div>
                    <div className={styles.aboutMe__myShortDescription}>
                        <ul className={styles.aboutMe__descriptionList}>
                            {
                                aboutMeInfo.map((item, id) =>(
                                    <li className={styles.aboutMe__descriptionListItem} key={id}>
                                        <div className={styles.aboutMe__descriptionListKey}>{item.key}:</div>
                                        <div className={styles.aboutMe__descriptionListValue}>{item.value}</div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;