const themeButton = document.querySelector('.header_button');
const textTheme = document.querySelector('.header_button_text');
const body = document.body
const icon = document.querySelector('.header_button i')
console.log(icon);
themeButton.addEventListener('click',function(){

    body.classList.toggle('light')
    
    textTheme.innerHTML =body.classList.contains('light')? "DarkMode" :"LightMode"

    body.classList.contains('light') ?  icon.setAttribute('class','far fa-moon') : icon.setAttribute('class','fas fa-moon')
})