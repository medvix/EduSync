import React, {useEffect} from "react";
import "./MainContent.scss"
import First from "../First/First"

interface MainContentProps{
}
export const MainContnent: React.FC<MainContentProps> = props => {

    return (
        <>
            <div className={"Main"}>
                <First></First>
            </div>
        </>
    );
}

export default MainContnent;