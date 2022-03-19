
import './App.css';
import MainContent from "./components/MainContent/MainContent";
import Contact from "./components/Contact/Contact";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Service from "./components/Service/Service";
import Numbers from "./components/Numbers/Numbers";
import InfoPage from "./components/InfoPage/InfoPage";
import {Provider} from "react-redux";
import {store} from "./store/store";


function App(menuItem) {
    return (
        <div className="App">
            <Provider store={store} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainContent/>}/>
                    <Route path="/main-page" element={<MainContent/>}/>
                    <Route path="/contact-page" element={<Contact/>}/>
                    <Route path="/sosi" element={<Service/>}/>
                    <Route path="/numbers-page" element={<Numbers/>}/>
                    <Route path="/info-page" element={<InfoPage/>}/>



                </Routes>
            </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
