import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import getApi from '../../services/getApi'
import './borderCountry.css'

const BorderCountry = ({countries}) => {

  const [data, setData] = useState([])
  console.log(data)
  useEffect(()=>{
    getApi.getCountryByCCA3(countries, setData)
  },[countries])

  return (
    
    <span className="bc"><Link to={`/${data}`}>{data}</Link></span>
    
  )
}

export default BorderCountry