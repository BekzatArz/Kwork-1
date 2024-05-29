import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navigate from "./components/Navigate"

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Advertiser from "./pages/Advertiser"
import Publisher from "./pages/Publisher"
import AdFormats from "./pages/AdFormats"
import ContactUs from "./pages/ContactUs"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

import './styles/App.css'

import headerBack from './assets/header-back.png'
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div className="box">
      <Router>
        <header style={{zIndex:10}}>
          <Navigate />
          <img src={headerBack} className="header-back" width={1000} height={100} alt="" />
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/advertiser" element={<Advertiser />}/>
            <Route path="/publisher" element={<Publisher />}/>
            <Route path="/adformats" element={<AdFormats />}/>
            <Route path="/contactus" element={<ContactUs />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App