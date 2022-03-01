
import './App.css';
import MainContent from "./components/MainContent/MainContent";
import Contact from "./components/Contact/Contact";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Service from "./components/Service/Service";
import Numbers from "./components/Numbers/Numbers";


function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainContent/>}/>
                    <Route path="/main-page" element={<MainContent/>}/>
                    <Route path="/contact-page" element={<Contact/>}/>
                    <Route path="/sosi" element={<Service/>}/>
                    <Route path="/numbers-page" element={<Numbers/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
