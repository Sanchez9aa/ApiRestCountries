import './countryPage.css'
import Header from '../header/Header'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import getApi from '../../services/getApi'
import axios from 'axios'
const CountryPage = () => {

	const [data, setData] = useState({})
	const country = useParams().country
	
	useEffect(()=>{
		const getCountryByName = async () => {
			const res = await axios.get("https://restcountries.com/v3.1/name/"+country)
				setData(res.data[0])
			}
		getCountryByName()
	},[country])

	console.log(data)

    return(
			<>
			<Header />

        <div className="cp">
            <div className="cp-wrapper">
                <div className="cp-back">Back</div>
                <div className="cp-country">
                    <div className="cp-img">
                        <img src={data.flags.png} alt={`Bandera de ${data.name}`} />
                    </div>
                    <div className="cp-info">
                        <div className="cp-title">
                            {data.name}
                        </div>
                        <div className="cp-moreInfo">
                            <div className="cp-moreInfo1">
                                <ul>
                                    <li><strong>Native Name:</strong> {data.oficcial}</li>
                                    <li><strong>Population:</strong> {data.population}</li>
                                    <li><strong>Region:</strong> {data.region}</li>
                                    <li><strong>Sub Region:</strong> {data.subregion}</li>
                                    <li><strong>Capital:</strong> {data.capital}</li>
                                </ul>
                            </div>
                            <div className="cp-moreInfo2">
                                <ul>
                                    <li><strong>Top Level Domain</strong> {data.tld}</li>
                                    <li><strong>Currencies</strong> {data.currencies}</li>
                                    <li><strong>Languages</strong> {data.languages}</li>
                                </ul>
                            </div>
                        </div>
												<div className="cp-moreCountries">
                                <span><strong>Boder countries:</strong></span>
                                {data.borders.map((x) => (
																	<span className="cp-countries">{x}</span>	
																))}		
                        </div>
                    </div>
                </div>
            </div>
        </div>
			</>
    )
}

export default CountryPage