
import './App.css';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { Route, Routes, BrowserRouter } from "react-router-dom";


function App() {
  return (
      <div className="App">

  <BrowserRouter>
        <Routes>
           <Route path="/" element={<MainContent />} />
           <Route path="/main-page" element={<MainContent/>} />
      <Route  path="/contact-page" element={<Contact/>}/>

        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
