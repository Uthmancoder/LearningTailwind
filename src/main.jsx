import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Analytics from './Components/Analytics.jsx'
import Newslater from './Components/Newslater.jsx'
import Cards from './Components/Cards.jsx'
import Footer from './Components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
    <Analytics/>
    <Newslater/>
    <Cards/>
    <Footer/>
    <App />
  </React.StrictMode>,
)
