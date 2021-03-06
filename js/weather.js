const API_KEY = "af1c7d845f23068592930a6f5af32fe4"


function onGeoOk(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector(".temperat");
            const city = document.querySelector(".city");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`});
}
function onGeoError(error){
    alert("위치를 찾을 수 없습니다.")
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

