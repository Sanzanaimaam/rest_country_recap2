const loadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}

const displayCountries=countries=>{
    console.log(countries)
    const CountriesHTML= countries.map(country=>getCountriesHTML(country));
    // console.log(CountriesHTML)
    const container=document.getElementById('countries')
    container.innerHTML=CountriesHTML.join(' ')
}
// original:
// const getCountriesHTML=country=>{
//     return`
//       <div class="country">
//          <h2>${country.name.common}</h2>
//          <img src="${country.flags.png}">
         
//       </div>
//       `
// }

// destructure:
const getCountriesHTML=country=>{
    const{name, flags}=country;
    return`
      <div class="country">
         <h2>${name.common}</h2>
         <img src="${flags.png}">
         
      </div>
      `
}
loadCountries();