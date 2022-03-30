import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Contact from './components/Contact/Contact'
import InfoPage from './components/InfoPage/InfoPage'
import MainContent from './components/MainContent/MainContent'
import Numbers from './components/Numbers/Numbers'
import Registrations from './components/Registrations/Registrations'
import Service from './components/Service/Service'
import { store } from './store/store'

const App = (menuItem) => (
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/main-page" element={<MainContent />} />
          <Route path="/contact-page" element={<Contact />} />
          <Route path="/sosi" element={<Service />} />
          <Route path="/numbers-page" element={<Numbers />} />
          <Route path="/info-page" element={<InfoPage />} />
          <Route path="/registration-page" element={<Registrations />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>
)

export default App
