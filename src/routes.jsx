import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error from './Pages/Error';
import Space from "./Pages/Space";

function RoutesSpace(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Space />} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesSpace;