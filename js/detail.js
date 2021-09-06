
const nameCountry  = window.location.search
const urlParams = new URLSearchParams(nameCountry)
const result =  urlParams.get('name')
const countryBox = document.querySelector('.country_item_container');
const buttonBack = document.querySelector('.button_back');
const loading = document.querySelector(".loader")

function getDetailCountry(name){
    axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`).then(function(response){
        console.log(response.data);
    renderCountry(response.data)
    }).then(function(){
        loading.remove()
    }).catch(function(error){
        loading.remove()
    })
}
function renderCountry(country){
    // const borderCountry = country.borders.map(function(borderCountry){
    //     return `   <a href="#" class="border_country_link">${borderCountry}</a>
    //     `
    // })
   
    const borderCountry = country[0].borders.map(function(bordercountryitem){
        return `   <a href="detail.html?name=${bordercountryitem.slice(0,2)}" class="border_country_link">${bordercountryitem}</a>
         `
    })
    console.log(borderCountry);
    console.log(country[0].borders);
    console.log(country.borders);
    console.log(borderCountry);
    const markUp = country.map(function(country){
        return `
        <div class="country_item">
            <div class="country_item_wrap">
                <div class="country_left">
                    <img src="${country.flag}" alt="">
                </div>
                <div class="country_right">
                    <div class="country_right_wrap">
                        <h3 class="country_name">${country.name}</h3>
                        <div class="country_info">
                            <div class="country_info-left">
                                <span class="country_info-detail">Native Name: ${country.nativeName}</span>
                                <span class="country_info-detail">Population: ${country.population}</span>
                                <span class="country_info-detail">Region: ${country.region}</span>
                                <span class="country_info-detail">Sub Region: ${country.subregion}</span>
                                <span class="country_info-detail">Capital: ${country.capital}</span>
                            </div>
                            <div class="country_info-right">
                                <span class="country_info-detail">Top Leves Domains: ${country.topLevelDomain}</span>
                                <span class="country_info-detail">Currencies: ${country.currencies[0].name}</span>
                                <span class="country_info-detail">Languages: ${country.languages[0].nativeName}</span>

                            </div>
                        </div>
                        <!-- country border -->
                        <div class="border_country">
                            <span class="border_title">Border Countries:</span>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>`
    })
    countryBox.insertAdjacentHTML('beforeend',markUp.join(''))
    const border_country_box = document.querySelector('.border_country');
    border_country_box.insertAdjacentHTML('beforeend',borderCountry.join(''))
}
buttonBack.addEventListener('click',function(){
    window.history.back()
})
getDetailCountry(result);