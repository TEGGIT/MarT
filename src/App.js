
import './App.css';
import MainContent from "./components/MainContent/MainContent";
import Contact from "./components/Contact/Contact";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Service from "./components/Service/Service";


function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainContent/>}/>
                    <Route path="/main-page" element={<MainContent/>}/>
                    <Route path="/contact-page" element={<Contact/>}/>
                    <Route path="/sosi" element={<Service/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
