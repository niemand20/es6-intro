const loadCountries = ()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then (data => displayCountries(data))
}

const displayCountries = countries => {
    const countryContainer =  document.getElementById("countries-container");
    // for (const country of countries){
        countries.forEach(country => {
        // console.log(country);
        const countriesDiv = document.createElement('div');
        countriesDiv.classList.add("countries-class");
        countriesDiv.innerHTML=`
        <h3>Name: ${country.name.common}</h3>
        <h3>Capital: ${country.capital?country.capital[0]:"No Capital"}</h3>
        
        <h3>Time Zone: ${country.timezones}</h3>
        <h3>Population: ${country.population}</h3>
        <h3>Continent: ${country.continents}</h3>
        <h3>Flag: ${country.flag}</h3>
       <button class="button" onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        // <h3>Currency: ${country.currencies[Object.keys(country.currencies)].name}</h3>
        countryContainer.appendChild(countriesDiv);

        })
        
    
}

const loadCountryDetails = (code)=>{
    //https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log("get country details", code)
    // console.log(url);
    fetch(url)
    .then(res=> res.json())
    .then(data => displayCountriesDetails(data[0]))
}


const displayCountriesDetails = country =>{
    console.log(country);
    const countryDetail = document.getElementById("country-detail");
    countryDetail.innerHTML = `
    <h2>Details: ${country.name.common}</h2>
    <img src="${country.flags.png}" alt="" />
    `

}

loadCountries();