import './countryList.css'
import { useEffect, useState} from 'react'
import CountryCard from '../countryCard/CountryCard'
import getApi from '../../services/getApi'

const CountryList = () => {

    const [countries, setCountries] = useState([])

    
    useEffect(()=>{
        getApi.getAllCountries(setCountries)
    }, [])

    console.log(countries)

    return (
        <div className="cl">
            <div className="cl-wrapper">
                {
                    countries.map((x) => (
                        <CountryCard key={x.name.common} name={x.name.common} flag={x.flags.png} population={x.population} region={x.region} capital={x.capital}/>        
                    ))
                }
                
            </div>
        </div>
    )
}

export default CountryList