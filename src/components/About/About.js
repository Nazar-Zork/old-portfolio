import styles from './About.module.scss';

import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Technologies from './components/Technologies/Technologies';
import Language from './components/Language/Language';

const workExperience =[
    {
        time:'2021 - Present',
        company: 'Canonica',
        position:'FrontEnd developer(WordPress)'
    },
    {
        time:'2021 - 24 Feb. 2022',
        company: 'Freelance',
        position:'React Developer'
    },
    {
        time:'2019 - 2021',
        company: 'Dexter Studio',
        position:'FrontEnd developer'
    },
]
const educationExperience =[
    {
        time:'2021 - 2022',
        company: 'NTUU «Kyiv Polytechnic Institute»',
        position:'Master'
    },
    {
        time:'2017 - 2021',
        company: 'NTUU «Kyiv Polytechnic Institute»',
        position:'Bachelor'
    },
]


const About = () =>{
    return(
        <div className={`${styles.about}`}>
            <AboutMe />
            <div className={styles.about__doubleWrapper}>
                <div className={styles.about__double}><Experience title='Experience' info={workExperience}/></div>
                <div className={styles.about__double}><Technologies /></div>
            </div>
            <div className={styles.about__doubleWrapper}>
                <div className={styles.about__double}><Experience title='Education' info={educationExperience}/></div>
                <div className={styles.about__double}><Language /></div>
            </div>
        </div>
    )
}

export default About;