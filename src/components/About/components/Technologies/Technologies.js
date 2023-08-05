import styles from "./Technologies.module.scss";

import htmlImg from "../../../../assets/img/logos/html.png";
import cssImg from "../../../../assets/img/logos/css.png";
import sassImg from "../../../../assets/img/logos/sass.png";
import jsImg from "../../../../assets/img/logos/js.png";
import reactImg from "../../../../assets/img/logos/react.png";
import reduxImg from "../../../../assets/img/logos/redux.png";
import gitImg from "../../../../assets/img/logos/git.png";
import wpImg from "../../../../assets/img/logos/wordpress.png";
import pythonImg from "../../../../assets/img/logos/python.png";

const customProps = [
    {alt: 'html', link: htmlImg},
    {alt: 'css', link: cssImg},
    {alt: 'sass', link: sassImg},
    {alt: 'js', link: jsImg},
    {alt: 'react', link: reactImg},
    {alt: 'redux', link: reduxImg},
    {alt: 'git', link: gitImg},
    {alt: 'wordPress', link: wpImg},
    {alt: 'python', link: pythonImg},
];

const Technologies = () =>{
    return(
        <div className={styles.technologies}>
            <div className="blockTitle">
                <h2 className="blockTitle__heading">Technologies</h2>
                <span className="blockTitle__line"></span>
            </div>
            <div className={styles.technologies__technologiesList}>
                {
                    customProps.map((item, id) =>(
                        <div className={styles.technologies__technologiesItem} key={id}>
                            <img className={styles.technologies__technologiesItemImg} src={item.link} alt={item.alt}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Technologies;