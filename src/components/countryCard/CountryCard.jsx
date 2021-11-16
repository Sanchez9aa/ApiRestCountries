import './countryCard.css'
import {Link} from 'react-router-dom'

const CountryCard = ({name, flag, population, region, capital}) => {
    return (
        <div className="cc">
            <div className="cc-img">
                <Link to={`/${name}`}>
                    <img src={flag} alt={`Bandera de ${name}`} />
                </Link>
            </div>
            <div className="cc-info">
                <div className="cc-title">{name}</div>
                <div className="cc-moreInfo">
                    <ul>
                        <li><strong>Population:</strong> {population}</li>
                        <li><strong>Region:</strong> {region}</li>
                        <li><strong>Capital:</strong> {capital}</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default CountryCard