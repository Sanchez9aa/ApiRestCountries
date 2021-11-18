import './toggle.css'
import {useContext, useState} from 'react'
import { DarkContext } from '../../contextApi'
import {Moon} from 'react-feather'

const Toggle = () => {
    
    const dark = useContext(DarkContext)
    console.log(dark)

    const handleClick = () => {
        dark.dispatch({type:"TOGGLE"})
    }
    
    return(
        <div className={dark.state.darkmode ? "tg" : "tg darkEL shadow"} onClick={handleClick}>
            <Moon size={16} color={dark.state.darkmode ? "black" : "white"} />
            <span className={dark.state.darkmode ? null : "darkColor"}>Dark Mode</span>
        </div>
    )
}

export default Toggle