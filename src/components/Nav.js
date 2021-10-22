import React from 'react'
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux'
import {changeMode} from "../redux/darkmode"
import { useSelector} from 'react-redux'

const Nav = () => {
    const dispatch = useDispatch()
    const mode = useSelector(state => state.modeSwitch.darkmode)

    return (
        <nav className={mode ? "w-full bg-gray-800 p-3 pl-7 pr-7 flex items-center justify-between border-b border-gray-500 sticky -top-0": "w-full  p-3 pl-7 pr-7 flex items-center justify-between border-b border-gray-200 sticky -top-0 bg-white"}>
            <h2 className={mode ? "font-bold text-x1 text-white" : "font-bold text-x1"}>Where in the world? </h2>
            <IconButton onClick={()=> dispatch(changeMode())}>
               {mode ? <Brightness5Icon className="icon"/> : <Brightness3Icon/>}
            </IconButton>
        </nav>
    )
}

export default Nav
