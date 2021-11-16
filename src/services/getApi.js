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
    const res = await axios.get(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => {
        setData(res.data[0])
    }).catch(err =>{
        console.log(err)
    })
}

const getCountryByCCA3 = async (country, setData) => {
    const res = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${country}`)
    .then(res => {
        const name = res.data[0].name.common 
        setData(name)
    }).catch(err =>{
        console.log(err)
    })
}

export default {getAllCountries, getCountryByName, getCountryByCCA3 }