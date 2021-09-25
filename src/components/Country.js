import React from 'react'


const Country = ({loading, countryInfo, setClickedCountry, setClicked, enableDarkMode}) => {

    return ( 
        <div className="card__container">
                {!loading && (
                countryInfo.map(countries => (
                  <div className={enableDarkMode? "card--darkmode": "card"} key={countries.name} onClick={() => {setClickedCountry(countries); setClicked(true)}}>
                    <div className="card__image">
                        <img src={countries.flag} alt={countries.name}/>
                    </div>
                    <div className="card__details">
                        <h3>{countries.name}</h3>
                        <p>Population : {Number(countries.population).toLocaleString('en-US')}</p>
                        <p>Region : {countries.region}</p>
                        <p>Capital : {countries.capital}</p>
                    </div>
                </div>
                )))}
            </div>

    )
}

export default Country
