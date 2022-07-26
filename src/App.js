import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import { themeContext } from './Context'
import { useContext } from 'react';


const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode? '#46045e': '',
      color : darkMode? 'white': ''
    }}

    >
    <Sidebar />
    <main className='main'>
    <Home />
    <About />
    <Services />
    <Resume />
    <Portfolio />
    <Pricing />
    <Testimonials />
    <Blog />
    <Contact />
    </main>
    </div>
  )
}
    

export default App
