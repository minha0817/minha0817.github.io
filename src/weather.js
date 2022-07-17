const API_KEY = "60551f0017be66b6ea0596fed21d815b"

function onGeoOk(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units
    =metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:last-child")

        city.innerHTML = data.name;
        weather.innerHTML = `${data.weather[0].main}`;

    })
}

function onGeoError(){
    alert("Can't find where you are at")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);