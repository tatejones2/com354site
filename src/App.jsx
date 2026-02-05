import { useState, createContext } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

export const ThemeContext = createContext()

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <Header />
        <Hero />
        <Projects />
        <About />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
