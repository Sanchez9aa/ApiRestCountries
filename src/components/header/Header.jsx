import "./header.css"
import { useContext } from "react"
import { DarkContext } from "../../contextApi"

const Header = () => {

    const dark = useContext(DarkContext)

    return (
        <div className={ !dark.state.darkmode ? "header" : "header darkBG border"}>
            <h1 className={ !dark.state.darkmode ? "header-title" : "header-title darkColor"}>
                Where in the World
            </h1>
        </div>
    )
}

export default Header