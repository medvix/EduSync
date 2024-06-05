import React, {Component} from 'react';
import Routers from "./pages/Routing";

class App extends Component<any, any> {

    constructor() {
        super(undefined);
    }

    render() {
        return (
            <Routers/>
        )
    }
}

export default App;
