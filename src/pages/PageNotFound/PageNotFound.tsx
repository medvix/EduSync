import React from 'react';
import HeaderComponent from "../../components/PageNotFoundComponents/header/HeaderComponent";
import {FunctionalHeaderComponent} from "../../components/PageNotFoundComponents/functionalHeader/FunctionalHeaderComponent";
import {NotFoundComponent} from "../../components/global/NotFoundComponent/NotFoundComponent";

export default class PageNotFound extends React.Component {

    render() {
        return (
            <>
                <FunctionalHeaderComponent></FunctionalHeaderComponent>
                <NotFoundComponent></NotFoundComponent>
            </>
        );
    }
}