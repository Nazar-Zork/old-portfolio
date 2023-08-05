import styles from './ProjectModalWindow.module.scss'

import ProjectImg from '../../assets/img/dentalHT.jpg'

const shortDescriptionData = [
    {key:"Name:",value: "DentalHt"},
    {key:"Data:",value: "12.01.2000"},
    {key:"Technologies:",value: "HTML, CSS, JS, JQ, WordPress, Gutenberg"},
    {key:"Time to complete:",value: "7 days"},
    {key:"Data:",value: "12.01.2000"},
    {key:"Data:",value: "12.01.2000"},
]



const ProjectModal = () =>{
    return(
        <div className={styles.projectModal}>
            <div className={styles.projectModal__window}>
                <div className={styles.projectModal__contant}>
                    <div className={styles.projectModal__projectImageWrapper}>
                        <img className={styles.projectModal__projectImage} src={ProjectImg} alt="" />
                    </div>
                    <ul className={styles.projectModal__shortDesription}>
                        {
                            shortDescriptionData.map((item, id) =>(
                                <li className={styles.projectModal__shortDesriptionItem} key={id}>
                                    <div className={styles.projectModal__shortDesriptionKey}>{item.key}</div>
                                    <div className={styles.projectModal__shortDesriptionValue}>{item.value}</div>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal;