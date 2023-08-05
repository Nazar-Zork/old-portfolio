import styles from "./Footer.module.scss"
import { Instagram, Telegram, Envelope, Github } from "react-bootstrap-icons";

const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <div className={styles.footer__copyright}>Copyright © 2022</div>
            <div className={styles.footer__socials}>
            </div>
        </footer>
    )
}

export default Footer;