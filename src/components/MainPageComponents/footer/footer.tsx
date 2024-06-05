import React, {useEffect} from "react";
import "./footer.scss"

interface FooterContentProps{
}
export const Footer: React.FC<FooterContentProps> = props => {

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-links">
                    <ul>
                        <li><a href="#">Domov</a></li>
                        <li><a href="#">Kurzy</a></li>
                        <li><a href="#">O nás</a></li>
                        <li><a href="#">Kontakt</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <p>Kontaktujte nás:</p>
                    <p>Email: info@EduSync.com</p>
                    <p>Telefón: +1 (555) 123-4567</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} EduSync. All rights reserved.</p>
                <div className="footer-social">
                    <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;