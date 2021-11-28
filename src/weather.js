const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "f2be3f29e2d1c904202fa49b3696f237";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            });    
}

function onGeoError(){
    alert("WHERE are you? I can't find you.")
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);