import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const AboutPage = ({clickedCountry, setClicked, enableDarkMode}) => {
    const handleClick = () => setClicked(false)
    return (
        <div className="countries">
            <div className="searchbar">
                <button className={enableDarkMode ? "backBtn--darkmode":"backBtn"} onClick={handleClick}><ArrowBackIcon/> Back</button>
            </div>

            <div className="country">
                <div className="country__flag">
                    <img src={clickedCountry.flag} alt={clickedCountry.name}/>
                </div>
                <div className={enableDarkMode ? "country__details--darkmode":"country__details"}>
                    <h3>{clickedCountry.name}</h3>
                    <div className="country__info">
                        <div>
                            <p className="info__text">
                            <span className="text__span">Native Name: </span>
                            {clickedCountry.name}
                            </p>
                            <p className="info__text">
                            <span className="text__span">
                                Population: 
                            </span>
                            {" " + Number(clickedCountry.population).toLocaleString('en-US')}
                            </p>
                            <p className="info__text">
                            <span className="text__span">
                                Region: 
                            </span>
                                {" " + clickedCountry.region}
                            </p>
                            <p className="info__text">
                            <span className="text__span">
                                Sub Region: 
                            </span>
                                {" " + clickedCountry.subregion}
                            </p>
                            <p className="info__text">
                            <span className="text__span">
                                Capital:  
                            </span>
                            {" " + clickedCountry.capital}
                            </p>
                          
                        </div>
                        <div className="other__info">
                        <p className="info__text">
                        <span className="text__span">
                            Top Level Domain: 
                        </span>
                        {" " + clickedCountry.topLevelDomain[0]}
                        </p>
                        <p className="info__text">
                        <span className="text__span">
                            Currency: 
                        </span>
                        {" " + clickedCountry.currencies[0].name}
                        </p>
                        <p className="info__text">
                        <span className="text__span">
                            Languages: 
                        </span>
                        {" " + clickedCountry.languages[0].name}
                        </p>
                      
                        </div>
                    </div>
                    <p className="info__text timezone">
                        <span className="text__span">
                            Timezone: 
                        </span>
                        {" " + clickedCountry.timezones[0]}
                        </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
