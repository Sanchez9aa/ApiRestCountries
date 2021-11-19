import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import getApi from '../../services/getApi'
import './borderCountry.css'
import { useContext } from "react";
import { DarkContext} from "../../contextApi";

const BorderCountry = ({countries}) => {

  const dark = useContext(DarkContext)

  const [data, setData] = useState([])

  useEffect(()=>{
    getApi.getCountryByCCA3(countries, setData)
  },[countries])

  return (
    
    <span className={!dark.state.darkmode ? "bc" : "bc shadow darkEL"}><Link className={!dark.state.darkmode ? null : "darkColor"} to={`/${data}`}>{data}</Link></span>
    
  )
}

export default BorderCountry