import './App.scss'

import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage/MainPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'

function App() {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  )
}

export default App


