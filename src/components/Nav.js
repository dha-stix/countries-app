import React from 'react'
import "../App.css"
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness1Icon from '@material-ui/icons/Brightness1';
const Nav = ({enableDarkMode, handleDarkMode}) => {
    
    return (

        <nav className={enableDarkMode ? "nav--darkmode" : "nav"}>
            <h3>Where in the world?</h3>
            
            <div onClick={handleDarkMode}>
                {enableDarkMode ? <Brightness1Icon/> :<Brightness2Icon />}
                <p>{enableDarkMode ? "Light Mode" :"Dark Mode"}</p>
            </div>   
        </nav>
    )
}

export default Nav
