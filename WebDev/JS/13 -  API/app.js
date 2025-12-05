async function getWeather() {
    let city = "Dhaka";
    let apiKey = "fa1250982fb2497732a766329341f294";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let res = await fetch(url);
    let data = await res.json();

    console.log(data);

    console.log("Temperature:", data.main.temp, "°C");
    console.log("Condition:", data.weather[0].description);
}

getWeather();
