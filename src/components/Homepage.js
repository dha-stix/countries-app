import React, {useState} from 'react'
import "../App.css"
import Nav from "./Nav"
import Countries from "./Countries"

const Homepage = () => {
    const[enableDarkMode, setEnableDarkMode] = useState(false)
    const handleDarkMode = () => setEnableDarkMode(!enableDarkMode)
    return (
        <main className={enableDarkMode ? "main--darkmode" : "main"}>
            <Nav enableDarkMode={enableDarkMode} setEnableDarkMode={setEnableDarkMode} handleDarkMode={handleDarkMode}/>
            <Countries enableDarkMode={enableDarkMode} setEnableDarkMode={setEnableDarkMode} handleDarkMode={handleDarkMode} />
        </main>
    )
}

export default Homepage
