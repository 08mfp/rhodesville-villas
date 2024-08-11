import React from 'react';
import whatsappIcon from '../../assets/icons/whatsapp.webp';
import mailIcon from '../../assets/icons/mail.webp';
import logo from '../../assets/images/logo.png';
import { styles } from './styles';

const Footer: React.FC = () => (
    <footer className={styles.footerContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.topSection}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Rhodesville Logo" className={styles.logoImage} />
                    <span className={styles.logoText}>Rhodesville Zambia</span>
                </div>
                <div className={styles.linkContainer}>
                    <a href="https://wa.me/yourphonenumber" className={styles.link}>
                        <img src={whatsappIcon} alt="WhatsApp" className={styles.linkIcon} />
                        <span>WhatsApp</span>
                    </a>
                    <a href="mailto:youremail@example.com" className={styles.link}>
                        <img src={mailIcon} alt="Email" className={styles.linkIcon} />
                        <span>Email</span>
                    </a>
                </div>
            </div>
            <hr className={styles.horizontalRule} />
            <span className={styles.disclaimerText}>
                <i>
                    By using this site, you agree to our Terms, Privacy Policy, and Cookie Policy, acknowledge our liability disclaimer, intellectual property rights, and that information is not professional advice.
                </i>
            </span>  
            <br/>
            <span className={styles.disclaimerText}>
                © 2024 Rhodesville Villas, managed by no name company. All rights reserved.
            </span>
        </div>
    </footer>
);

export default Footer;
