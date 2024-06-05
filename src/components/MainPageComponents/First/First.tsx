import React, {useEffect} from "react";
import "./First.scss"
import Image from "../../../global/assets/logo.svg"

interface FirstContentProps{
}
export const First: React.FC<FirstContentProps> = props => {

    return (
        <div className={"MainContent"}>
            <div className={"LeftMainContent"}>
                <h1>Najlepší spôsob pre vaše učenie</h1>
                <p>
                    Objavte budúcnosť vzdelávania na našej multimediálnej vzdelávacej platforme - kde sa stretávajú inovácie
                    a vzdelávanie bez problémov. Ponorte sa do pohlcujúceho sveta vedomostí s pútavými videami, interaktívnymi
                    kvízmi a dynamickým obsahom. Objavte najlepší spôsob, ako zlepšiť svoje skúsenosti s učením, vďaka čomu
                    vzdelávanie príjemné aj efektívne. Pridajte sa k nám na ceste za objavmi a odomknite svoj plný
                    vzdelávací potenciál!
                </p>
            </div>
            <div className={"RightMainContent"}>
                <img src={Image} ></img>
            </div>
        </div>
    );
}

export default First;