import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setCountryData }from '../redux/country'
import { Link } from 'react-router-dom'

const Body = () => {
    const [input, setInput] = useState("")
    const [countriesData, setCountriesData] = useState([])
    const [loading, setLoading] = useState(true)
    const [region, setRegion] = useState("")
    const dispatch = useDispatch()
    const mode = useSelector(state => state.modeSwitch.darkmode)

    //Fetch when page loads
    useEffect(() => {
        async function onLoadData() {
            try{
            const request = await fetch("https://restcountries.com/v3.1/all")
            let response = await request.json()
            if(request.status !== 404 ) {
                setCountriesData(response)
                setLoading(false)
            }}catch(err) {
                console.error(err)
            }           
        }
        onLoadData()
    }, [])


    //Fetch By Region
    useEffect(() => {
        async function fetchByRegion() {
            try{
            const request = await fetch(`https://restcountries.com/v3.1/region/${region}`)
            let data = await request.json()
            if(request.status !== 404) {
                setCountriesData(data)
                setLoading(false)
            }}catch(err) {
                console.error(err)
            }
        }
        fetchByRegion()
    }, [region])

    //Fetch By Input
    useEffect(() => {
        async function fetchData() {
            try{
            const request = await fetch(`https://restcountries.com/v3.1/name/${input}`)
            let data = await request.json()
            if(request.status !== 404) {
                setCountriesData(data)
                setLoading(false)
            }}catch(err) {
                console.error(err)
            }
        }
        fetchData()
    }, [input])



    return (
        <main className={mode ? "w-full min-h-screen p-7 bg-gray-800" : "w-full min-h-screen p-7 bg-gray-100"}>
            {loading ? <h1 className={mode && "text-gray-200"}>Loading...Please, make sure you're connected to the internet</h1> : (
                <>
                <div className="w-full flex justify-between items-center mt-4 mb-12">
                <div className="sm:w-6/12 w-full">
                    <input type="text" placeholder="Enter a name"
                    className={mode ? "w-full h-10 p-5 border rounded outline-none block text-gray-100 bg-gray-600" : "w-full h-10 p-5 border rounded outline-none block"}
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                    />
                </div>
                <select className={mode ? "sm:w-4/12 w-full cursor-pointer border p-2 outline-none text-gray-100 bg-gray-600" : "sm:w-4/12 w-full cursor-pointer border p-2 outline-none"}
                value={region} 
                onChange={(e)=> setRegion(e.target.value)}>
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>

            </div>


            <div className="w-full flex flex-wrap items-center justify-center">

            {countriesData.map(country => (
                <Link to={"/country/"+ country.name.common} key={country.name.common}>
                <div 
                className={mode ? "sm:w-80 sm:h-96 w-72 h-80 bg-gray-700 m-3 border border-gray-700 rounded-lg hover:shadow-md cursor-pointer" : "sm:w-80 sm:h-96 w-72 h-80 bg-white m-3 border rounded-lg hover:shadow-md cursor-pointer"}  
                onClick={()=> dispatch(setCountryData(country))}>
                    <img src={country.flags.png} alt={country.name.common} className="w-full sm:h-56 bg-cover h-48"/>
                    <div className="w-full sm:h-40 p-7 h-32"> 
                        <p className={mode ? "font-semibold text-gray-200" : "font-semibold"}>{country.name.common}</p>

                        <p className={mode ? "text-gray-300 text-sm font-extralight" : "text-sm font-extralight"}><span className="font-normal">Population: </span> {Number(country.population).toLocaleString()} </p>

                        <p className={mode ? "text-gray-300 text-sm font-extralight" : "text-sm font-extralight"}><span className="font-normal ">Region: </span> {country.region} </p>

                        <p className={mode ? "text-gray-300 text-sm font-extralight" : "text-sm font-extralight"}><span className="font-normal">Capital: </span> {country.capital} </p>
                    </div>
                </div>
                </Link>
            ))}
                
              
            </div>
            </>
            )}
        </main>
    )
}

export default Body
