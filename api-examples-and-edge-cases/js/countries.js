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
        <h3>Currency: ${country.currencies[Object.keys(country.currencies)].name}</h3>
        <h3>Time Zone: ${country.timezones}</h3>
        <h3>Population: ${country.population}</h3>
        <h3>Continent: ${country.continents}</h3>
        <h3>Flag: ${country.flag}</h3>
       <button class="button" onclick=" loadCountryDetails()">Details</button>
        `
         
        countryContainer.appendChild(countriesDiv);

        })
        
    
}

const loadCountryDetails = ()=>{
    console.log("get country details")
}


loadCountries();