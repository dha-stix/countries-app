import React from 'react'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Detail = () => {
    const country = useSelector((state) => state.country.country)
    const mode = useSelector(state => state.modeSwitch.darkmode)

    return (
        <div className={mode ? "w-full min-h-screen p-7 bg-gray-800 flex flex-col" : "w-full min-h-screen p-7 bg-gray-100 flex flex-col"}>
            <Link to="/" className={mode ? "my-8 p-4 border w-36 text-center text-gray-100 hover:border-gray-200" : "my-8 p-4 border w-36 text-center hover:border-black"}><ArrowBackIcon/> Back</Link>
                {country.name ? (
                    <div className="w-full my-4 flex sm:items-center sm:p-2 sm:flex-row min-h-full flex-col">
                        <div className="mr-10">
                            <img src={country.flags.png} alt={country.name.common} className="w-full"/>
                        </div>

                        <div>
                            <h2 className={mode ? "text-gray-100 font-bold text-lg my-2" : "font-bold text-lg my-2"}>{country.name.common}</h2>

                            <p className={mode ? "text-gray-300 text-sm font-extralight" : "text-sm font-extralight"}><span className="font-normal">Population: </span> {Number(country.population).toLocaleString()} </p>

                            <p className={mode ? "text-gray-300 text-sm font-extralight" : "text-sm font-extralight"}><span className="font-normal ">Region: </span> {country.region} </p>

                            <p className={mode ? "text-gray-300 text-sm font-extralight" : "text-sm font-extralight"}><span className="font-normal ">Sub Region: </span> {country.subregion} </p>

                            <p className={mode ? "text-gray-300 text-sm font-extralight" : "text-sm font-extralight"}><span className="font-normal">Capital: </span> {country.capital} </p>

                            <p className={mode ? "text-gray-300 text-sm font-extralight" : "text-sm font-extralight"}><span className="font-normal">Timezone: </span> {country.timezones} </p>

                        </div>

                    </div>
                ):(
                    <p>Oops! kindly go back to the previous page</p>   
                )}
                
        </div>        
    )
}

export default Detail
