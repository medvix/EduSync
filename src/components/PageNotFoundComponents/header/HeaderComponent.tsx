import React from "react";
import './HeaderComponent.scss';
import Logo from "./../../../global/assets/logo23.svg"

interface HeaderComponentProps {
    scrollToSection: (sectionId: string) => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ scrollToSection }) => {
    return (
        <div className="MainNavigation">
            <div className="LeftNavigation">
                <img src={Logo} alt={"Logo"} className={"Logo"}/>
            </div>
            <div className="RightNavigation">
                <ul>
                    <li><button onClick={() => scrollToSection('home')}>Úvod</button></li>
                    <li><button onClick={() => scrollToSection('about')}>O nás</button></li>
                    <li><button onClick={() => scrollToSection('courses')}>Kurzy</button></li>
                    <li><button onClick={() => scrollToSection('contact')}>Kontakt</button></li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderComponent;