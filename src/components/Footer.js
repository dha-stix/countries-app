import React from 'react'
import { useSelector} from 'react-redux'

const Footer = () => {
    const date = new Date().getFullYear()
    const mode = useSelector(state => state.modeSwitch.darkmode)

    return (
        <footer className={mode ? "w-full p-5 flex align-center items-center text-center justify-center flex-col bg-gray-800 border-t border-5" : "w-full p-5 flex align-center items-center text-center justify-center flex-col bg-white border-t border-5"}>
                <h3 className={mode ? "font-bold text-gray-200" : "font-bold "}>Built by David Asaolu</h3>
                <p className={mode && "text-gray-400"}>Copyright {date}</p>
        </footer>
    )
}

export default Footer
