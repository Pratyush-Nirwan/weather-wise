const search_btn = document.getElementById("search-btn");
const search_box = document.getElementById("search-box");
const details = document.getElementById("details");
const error404 = document.getElementById("error404")
const card_img = document.getElementById("card-img");
const temprature = document.getElementById("temp");
const state = document.getElementById("state");
const humidity = document.getElementById("humidity-p");
const wind = document.getElementById("wind-p");
const card = document.getElementById("card");

const API_KEY= "f9da77fb42003d7b660905e953289514"

search_box.addEventListener('keydown', (event) => {
    if(event.key == "Enter"){
        search_btn.click();
    }
})
search_box.addEventListener('touchend', function(event) {
    if(event.key == "Enter"){
        search_btn.click();
    }
});
search_btn.addEventListener('click',() => {
    const city = search_box.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`).then(response => response.json()).then(json=>{
        if(json.cod == '404'){
            card.style.animation="fade-out 0.2s forwards"
            setTimeout(() => {
            details.style.display="none";
            error404.style.display="block";
            card.style.animation="fade-in 0.8s forwards"
            }, 200);
            return;
        } else{
            card.style.animation="fade-out 0.2s forwards"
            setTimeout(() => {
                details.style.display = "block"
            error404.style.display = "none"

            switch (json.weather[0].main){
                case 'Rain':
                    card_img.src = "assets/Rain.svg"
                break;
                case 'Snow':
                    card_img.src = "assets/Snow.svg"
                break;
                case 'Clouds':
                    card_img.src = "assets/Cloud.svg"
                break;
                case 'Haze':
                    card_img.src = "assets/Haze.svg"
                break;
                case 'Clear':
                    card_img.src = "assets/Sun.svg"
                break;
                default :
                card_img.src = ""
    
            }
            temprature.innerHTML = `${parseInt(json.main.temp)}°C`;
            state.innerHTML = json.weather[0].description;
            humidity.innerHTML = `${parseInt(json.main.humidity)}%<br>Humidity`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h<br>Wind Speed`;
            card.style.animation="fade-in 0.8s forwards"
            }, 200);
            
        }
    }) 
})
//created by pratyush with ♡