import React from 'react';
import HeaderComponent from "../../components/PageNotFoundComponents/header/HeaderComponent";
import MainContent from "../../components/MainPageComponents/MainContent/MainContent";
import "./Main.scss";
import Second from "../../../src/components/MainPageComponents/Second/Second";
import Footer from "../../components/MainPageComponents/footer/footer"
import ImageText from "../../components/MainPageComponents/ImageText/ImageText";
import ImageImpressiveLearning from "../../global/assets/ImmersiveLearning.svg"
import ImageExperience from "../../global/assets/ExperienceTheDifference.svg"
import FullPotential from "../../global/assets/FullPotential.svg"
import JoinUs from "../../global/assets/JoinUs.svg"

export default class MainPage extends React.Component {

    scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    render() {

        return (
            <>
                <div className={"Background"}>
                    <HeaderComponent scrollToSection={this.scrollToSection} />
                    <MainContent/>
                </div>
                <div className={"Background2"}>
                    <div className={"about"} id={"about"}>
                        <h1>O nás</h1>
                        <ImageText imageUrl={ImageImpressiveLearning}
                                   text={"Vydajte sa na cestu transformatívneho vzdelávania s našou inovatívnou multimediálnou vzdelávacou platformou, kde sa najmodernejšie technológie plynule spájajú s pútavým obsahom. Ponorte sa do sveta podmanivých videí, interaktívnych kvízov a dynamických vzdelávacích materiálov, ktoré vám odomknú úplne nový rozmer učenia."}
                                   heading={"Uvoľnite silu pohlcujúceho učenia"} textPosition={"right"} />
                        <ImageText imageUrl={ImageExperience}
                                   text={"Naša platforma presahuje tradičné metódy učenia a uprednostňuje aktívne zapojenie a personalizované zážitky. Prostredníctvom interaktívnych cvičení, samostatne sa rozvíjajúcich vzdelávacích modulov a personalizovanej spätnej väzby získate hlbšie porozumenie predmetu."}
                                   heading={"Zažite rozdiel"} textPosition={"left"} />
                        <ImageText imageUrl={FullPotential}
                                   text={"Zanechajte monotónnosť tradičného učenia a využite transformačnú silu multimediálneho vzdelávania. Zistite, ako môže náš interaktívny prístup urobiť učenie nielen efektívnym, ale aj príjemným a podnietiť vašu vášeň pre vedomosti."}
                                   heading={"Odomknite svoj plný potenciál"} textPosition={"right"} />
                        <ImageText imageUrl={JoinUs}
                                   text={"Vydajte sa na cestu objavovania a odhaľte svoj plný vzdelávací potenciál. Zaregistrujte sa do našej multimediálnej vzdelávacej platformy ešte dnes a spoznajte budúcnosť učenia."}
                                   heading={"Pridajte sa k nám ešte dnes"} textPosition={"left"} />
                    </div>
                    <div id={"courses"}>
                        <Second/>
                    </div>
                </div>
                <div id={"contact"}>
                    <Footer/>
                </div>
            </>
        );
    }
}
