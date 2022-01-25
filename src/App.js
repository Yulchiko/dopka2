import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import Episode from "./Component/Episode/Episode";
import Episodes from "./Component/Episode/Episodes";

const App = () => (
    <div>
        <div className="App">
                    <Routes>
            <Route path="/" element={<Navigate to="episodes"/>}/>
            <Route path="/episodes" element={<Episodes/>}/>
            <Route path="/episodes/:id" element={<Episode/>}/>
        </Routes>
        <div className="Router">
            @ReactRouterDom
        </div>
    </div>
    </div>
);
export default App;
