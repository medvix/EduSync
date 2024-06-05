import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PageNotFound from "./PageNotFound/PageNotFound";
import Main from "./MainPage/Main";

const Routers = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </Router>
)


export default Routers;