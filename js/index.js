
const boxCountry = document.querySelector('.country_wrapp');
const inputSearch = document.querySelector('.input-field');
const inputSelect = document.querySelector('#region');
const loading = document.querySelector(".loader")

 async function getAllCountry(){
   const response = await  axios.get("https://restcountries.eu/rest/v2/all")
    renderCountry(response.data);
    searchCountry(response.data);
   filterRegion(response.data);
    loading.remove();
    // .then(function(response){
    // //     console.log(response.data);
    
    // // // searchCountry
    // // inputSearch.addEventListener('input',function(){
    // // searchCountry(this.value,response.data)
    // //     })
    // //     // // filterRegion
    // //     inputSelect.addEventListener('change',function(){
    // //         filterRegion(this.value,response.data);
    // //      }) 
    // })
 
}
function hideLoading(){
    loading.remove();
}
// function searchCountry
function searchCountry(arrayCountry){
    inputSearch.addEventListener('input',function(){
      let result =  arrayCountry.filter(country=>
            country.name.toLowerCase().includes(this.value))
            // remove old element
            while(boxCountry.firstChild){
            boxCountry.removeChild(boxCountry.firstChild)
            }

        renderCountry(result);
             })
            
  
  
    }
    // function renderUI 
function renderCountry(countryData){
      const markup = countryData.map(function(country){
          return `   <div class="country_item">
                        <div class="country_image">
                            <a href="detail.html?name=${country.alpha2Code}">
                            <img src="${country.flag}" alt=""> 
                            </a>
                           
                        </div>
                        <div class="country_detail">
                            <h4 class="country_name">${country.name}</h4>
                            <div class="country_info">
                                <span class="country_population">Population: ${country.population}</span>
                                <span class="country_region">Region: ${country.region}</span>
                                <span class="country_capital">Captial: ${country.capital}</span>
                            </div>
                        </div>
                    </div>
      `
      })
      boxCountry.insertAdjacentHTML('beforeend',markup.join(''))
    
}

// function filter
function filterRegion(arrayCountry){
    inputSelect.addEventListener('change',function(){
        let result =  arrayCountry.filter(country=>
               country.region === this.value)
              // remove old element
              while(boxCountry.firstChild){
              boxCountry.removeChild(boxCountry.firstChild)
              }
  
          renderCountry(result);
               })
}
getAllCountry()


