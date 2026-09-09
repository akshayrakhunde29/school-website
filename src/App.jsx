import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Facilities from './pages/Facilities.jsx'
import Toppers from './pages/Toppers.jsx'
import Teachers from './pages/Teachers.jsx'
import Activities from './pages/Activities.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/toppers" element={<Toppers />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
