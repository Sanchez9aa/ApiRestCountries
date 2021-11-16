//Get country

import axios from "axios"

const getAllCountries = async (setCountries) => {
    const res = await axios.get("https://restcountries.com/v3.1/all")
    .then(res => {
        setCountries(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

const getCountryByName = async (country, setData) => {
    const res = await axios.get("https://restcountries.com/v3.1/name/"+country)
    .then(res => {
            setData(res.data[0])
    }).catch(err =>{
            console.log(err)
    })
}

export default {getAllCountries, getCountryByName}