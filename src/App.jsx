import {Route, Routes, useLocation} from 'react-router-dom'
import Layouts from "./Components/Layouts"
import Home from "./Components/pages/Home/Home"
import Portfolio from "./Components/pages/Portfolio/Portfolio"
import Experience from "./Components/pages/Experience/Experience"
import Testmonials from "./Components/pages/Testmonials/Testmonials"
import Error from './Components/pages/Error/Error'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import ScrollToTop from './ScrollToTop'
import { useRef, useState } from 'react'

function App() {

  const location = useLocation()
  const [switcher, setSwitcher] = useState(false)


  const themeSwitcher = () => {
    setSwitcher(!switcher)
  }

  return (
    <>
      <div className="container">
        <AnimatePresence>
          <ScrollToTop/>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layouts themeSwitcher={themeSwitcher} switcher={switcher}/>}>
              <Route path="/" element={<Home switcher={switcher}/>} />
              <Route path="/experience" element={<Experience switcher={switcher}/>} />
              <Route path="/portfolio" element={<Portfolio switcher={switcher}/>} />
              <Route path="/testmonials" element={<Testmonials switcher={switcher}/>} />
              <Route path='*' element={<Error switcher={switcher}/>} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </>
  )
}

export default App
