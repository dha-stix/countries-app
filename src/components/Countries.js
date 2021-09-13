import React, {useState, useEffect} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Country from './Country';
import AboutPage from './AboutPage';

const Countries = ({enableDarkMode}) => {
    const [input, setInput] = useState("")
    const [countryInfo, setCountryInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const [clickedCountry, setClickedCountry] = useState({})
    const [clicked, setClicked] = useState(false)

    const fetchAllCountries = () => {
      try {
        fetch("https://restcountries.eu/rest/v2/all")
          .then(response => response.json())
          .then(data => {
              setLoading(false)
            setCountryInfo(data)
          });
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(fetchAllCountries, [])
      const fetchData = () => {
            const url = `https://restcountries.eu/rest/v2/name/${input}` 
          try {
            fetch(url)
              .then(response => response.json())
              .then(data => {
                  setLoading(false)
                setCountryInfo(data)
              });
          } catch (error) {
            console.error(error);
          }
        };    
    
        const fetchByRegion = (e) => {
            const url = `https://restcountries.eu/rest/v2/region/${e.target.value}`
            try {
              fetch(url)
                .then(response => response.json())
                .then(data => {
                    setLoading(false)
                  setCountryInfo(data)
                });
            } catch (error) {
              console.error(error);
            }
        }

    return (
      <>
        <div className={clicked ? "nodisplay" :"countries"}>
            <form className="searchbar">
                <div className="input__section">
                <SearchIcon className="searchIcon" />
                <input type="text" 
                value={input} 
                className={enableDarkMode? "input--darkmode" : "input"}
                placeholder="Search for a country..."
                onChange={(e) => setInput(e.target.value)}
                 onKeyUp={fetchData}
                />
              </div>
                <select onChange={fetchByRegion} className={enableDarkMode? "select--darkmode" : "select"}>
                    <option>Filter by Region </option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </form>
            {countryInfo.length >= 1 && <Country 
            countryInfo={countryInfo}
            loading={loading}
            setClickedCountry={setClickedCountry}
            setClicked={setClicked}
            enableDarkMode={enableDarkMode}
             />}   
        </div>
              {clicked && (
                <AboutPage clickedCountry={clickedCountry} setClicked={setClicked}
                  enableDarkMode={enableDarkMode}
                />
              )}
            
      </>
    )
}
export default Countries

