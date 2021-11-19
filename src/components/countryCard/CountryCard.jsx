import './countryCard.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import {DarkContext} from '../../contextApi'

const CountryCard = ({name, flag, population, region, capital}) => {

    const dark = useContext(DarkContext)

    return (
        <div className={!dark.state.darkmode ? "cc" : "cc shadow"}>
            <div className="cc-img">
                <Link to={`/${name}`}>
                    <img className={!dark.state.darkmode ? "cc-img-img" : "cc-img-img border"} src={flag} alt={`Bandera de ${name}`} />
                </Link>
            </div>
            <div className={!dark.state.darkmode ? "cc-info" : "cc-info darkEL"}>
                <div className={!dark.state.darkmode ? "cc-title" : "cc-title darkColor"}>{name}</div>
                <div className="cc-moreInfo">
                    <ul>
                        <li className={!dark.state.darkmode ? null : "darkColor"}><strong className={!dark.state.darkmode ? null : "darkColor"}>Population:</strong> {population}</li>
                        <li className={!dark.state.darkmode ? null : "darkColor"}><strong className={!dark.state.darkmode ? null : "darkColor"}>Region:</strong> {region}</li>
                        <li className={!dark.state.darkmode ? null : "darkColor"}><strong className={!dark.state.darkmode ? null : "darkColor"}>Capital:</strong> {capital}</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default CountryCard